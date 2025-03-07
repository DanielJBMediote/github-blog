import { createContext, PropsWithChildren, useCallback, useEffect, useReducer } from "react";
import { GithubUser, RepoIssue, useIssueReducer } from "../reducers/issueReducer";
import { fetchIssueAction, fetchIssuesAction, fetchUserAction } from "../reducers/issueReducer/actions";


interface IssueContextProps {
  user?: GithubUser;
  currentIssue?: RepoIssue;
  issues: RepoIssue[];

  fetchIssue: (issueNumber: number) => Promise<void>
  fetchIssues: (query?: string) => Promise<void>
}

export const IssueContext = createContext({} as IssueContextProps)

export function IssueContextProvider({ children }: PropsWithChildren) {

  const [issueState, dispatch] = useReducer(useIssueReducer, {
    issues: [],
    user: undefined,
    currentIssue: undefined
  }, (initialStaate) => {

    const userJSON = localStorage.getItem("@github-blog:user-state-v1.0.0")
    if (userJSON) {
      const userState = JSON.parse(userJSON)
      initialStaate.user = userState
    }

    const issuesJSON = localStorage.getItem("@github-blog:issues-state-v1.0.0")
    if (issuesJSON) {
      const issuesState = JSON.parse(issuesJSON)
      initialStaate.issues = issuesState
    }

    // const issueJSON = localStorage.getItem("@github-blog:issue-state-v1.0.0")
    // if (issueJSON) {
    //   const issueState = JSON.parse(issueJSON)
    //   initialStaate.currentIssue = issueState
    // }

    return initialStaate
  })

  const { currentIssue, issues, user } = issueState

  const fetchIssues = useCallback(async (query?: string) => {
    if (!user) throw new Error("Nenhum usuário Github encontrado.");
    dispatch(await fetchIssuesAction(query))
  }, [user])

  const fetchIssue = useCallback(async (issueNumber: number) => {
    if (!user) throw new Error("Nenhum usuário Github encontrado.");
    dispatch(await fetchIssueAction(issueNumber));
  }, [user])

  useEffect(() => {
    const fetchIssuesData = async () => {
      fetchIssues()
    }
    fetchIssuesData()

  }, [fetchIssues])

  useEffect(() => {
    async function loadUser() {
      try {
        const action = await fetchUserAction();
        dispatch(action);
      } catch (error) {
        console.error("Erro ao carregar usuário:", error);
      }
    }

    loadUser();
  }, []);

  return (
    <IssueContext.Provider value={{ user, issues, currentIssue, fetchIssues, fetchIssue }}>
      {children}
    </IssueContext.Provider>
  )
}