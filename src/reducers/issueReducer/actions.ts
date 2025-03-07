import { GithubUser, RepoIssue } from ".";
import { api } from "../../api";

const GITHUB_USER_LOGIN = import.meta.env.VITE_GITHUB_USER
const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO

export enum IssueActionsType {
  FETCH_ISSUES = "FETCH_ISSUES",
  FETCH_USER = "FETCH_USER",
  FETCH_ONE_ISSUE = "FETCH_ONE_ISSUE"
}

export interface IssueReducerActions {
  type: IssueActionsType,
  payload: {
    newIssueList: RepoIssue[],
    newCurrentIssue?: RepoIssue,
    newGithubUser?: GithubUser
  }
}

export async function fetchUserAction(): Promise<IssueReducerActions> {
  let userState: GithubUser;
  const userJSON = localStorage.getItem("@github-blog:user-state-v1.0.0");

  const fetchData = async () => {
    const response = await api.get<GithubUser>(`/users/${GITHUB_USER_LOGIN}`);
    return response.data;
  };

  if (userJSON) {
    console.log("Ja tem usuário no storage...");
    userState = JSON.parse(userJSON);
  } else {
    console.log("Buscando usuário...");
    userState = await fetchData();
    localStorage.setItem("@github-blog:user-state-v1.0.0", JSON.stringify(userState));
  }

  return { type: IssueActionsType.FETCH_USER, payload: { newIssueList: [], newGithubUser: userState } };
}



interface IssueSearchResult {
  totalCount: number;
  items: RepoIssue[]
}

export async function fetchIssuesAction(query?: string): Promise<IssueReducerActions> {

  if (!query) query = "";

  const response = await api.get<IssueSearchResult>(`/search/issues?q=${query}%20repo:${GITHUB_USER_LOGIN}/${GITHUB_REPO}`);
  localStorage.setItem("@github-blog:issues-state-v1.0.0", JSON.stringify(response.data.items));

  return { type: IssueActionsType.FETCH_ISSUES, payload: { newIssueList: response.data.items } };
}


export async function fetchIssueAction(issueNumber: number): Promise<IssueReducerActions> {
  const response = await api.get<RepoIssue>(`/repos/${GITHUB_USER_LOGIN}/${GITHUB_REPO}/issues/${issueNumber}`);
  // localStorage.setItem("@github-blog:issue-state-v1.0.0", JSON.stringify(response.data));

  return { type: IssueActionsType.FETCH_ONE_ISSUE, payload: { newIssueList: [], newCurrentIssue: response.data } };
}
