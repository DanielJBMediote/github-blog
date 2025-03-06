import { createContext, PropsWithChildren, useCallback, useEffect, useReducer } from "react";
import { api } from "../api";
import { GithubUser, RepoIssue, useIssueReducer } from "../reducers/issue";


interface IssueSearchResult {
  totalCount: number;
  items: RepoIssue[]
}

interface IssueContextProps {
  user: GithubUser | null;
  // currentIssue: RepoIssue | null;
  issues: RepoIssue[];

  fetchIssue: (issueNumber: number) => Promise<RepoIssue>
  fetchIssues: (query?: string) => Promise<void>
}

export const IssueContext = createContext({} as IssueContextProps)

export function IssueContextProvider({ children }: PropsWithChildren) {

  const [issueState, dispatch] = useReducer(useIssueReducer, {
    // currentIssue: null,
    issues: [],
    user: null
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

  const { /*currentIssue*/ issues, user } = issueState

  const fetchIssues = useCallback(async (query?: string) => {
    if (!user) throw new Error("Nenhum usuário Github encontrado.");

    if (!query) query = "";

    const response = await api.get<IssueSearchResult>(`/search/issues?q=${query}%20repo:${user.login}/desafio-rockeatseat-coffee-delivery`);
    dispatch({ type: "SET_ALL_ISSUES", payload: { issues: response.data.items } });

    localStorage.setItem("@github-blog:issues-state-v1.0.0", JSON.stringify(response.data.items));

  }, [user])

  const fetchIssue = useCallback(async (issueNumber: number) => {
    if (!user) throw new Error("Nenhum usuário Github encontrado.");

    const response = await api.get<RepoIssue>(`/repos/${user.login}/desafio-rockeatseat-coffee-delivery/issues/${issueNumber}`);
    // dispatch({ type: "SET_ONE_ISSUE", payload: { issues: [], currentIssue: response.data } });

    localStorage.setItem("@github-blog:issue-state-v1.0.0", JSON.stringify(response.data));

    return response.data;
  }, [user])

  useEffect(() => {
    const fetchIssuesData = async () => {
      fetchIssues()
    }
    fetchIssuesData()

  }, [fetchIssues])

  useEffect(() => {
    const userJSON = localStorage.getItem("@github-blog:user-state-v1.0.0")

    if (userJSON) {
      console.log("Ja tem usuário no storage...");

      const userState = JSON.parse(userJSON)
      dispatch({ type: "SET_USER", payload: { issues: [], user: userState } });

    } else {
      console.log("Buscando usuário...");

      const fetchUserData = async () => {
        const response = await api.get<GithubUser>('/users/DanielJBMediote');
        dispatch({ type: "SET_USER", payload: { issues: [], user: response.data } });

        localStorage.setItem("@github-blog:user-state-v1.0.0", JSON.stringify(response.data))
      }
      fetchUserData();
    }

  }, [])

  return (
    <IssueContext.Provider value={{ user, issues, /*currentIssue,*/ fetchIssues, fetchIssue }}>
      {children}
    </IssueContext.Provider>
  )
}