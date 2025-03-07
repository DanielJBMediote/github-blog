import { IssueActionsType, IssueReducerActions } from "./actions";


export interface GithubUser {
  login: string;
  avatar_url: string;
  name: string;
  bio: string;
  public_repos: number;
  company: string;
  followers: number;
  following: number;
  created_at: string;
  html_url: string;
}

export interface RepoIssue {
  id: number;
  number: number;
  title: string;
  created_at: string;
  comments: number;
  labels: string[];
  url: string;
  repository_url: string;
  html_url: string;
  state: "open" | "closed";
  assignees: string[];
  milestone: string | null;
  body: string;
  user: GithubUser;
}

interface IssueStateReducerProps {
  user?: GithubUser;
  issues: RepoIssue[];
  currentIssue?: RepoIssue;
}

export function useIssueReducer(state: IssueStateReducerProps, actions: IssueReducerActions) {

  switch (actions.type) {
    case IssueActionsType.FETCH_USER:
      return { ...state, user: actions.payload.newGithubUser }
    case IssueActionsType.FETCH_ISSUES:
      return { ...state, issues: actions.payload.newIssueList }
    case IssueActionsType.FETCH_ONE_ISSUE:
      return { ...state, currentIssue: actions.payload.newCurrentIssue }
    default:
      return state
  }
}