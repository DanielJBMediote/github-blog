

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
  user: GithubUser | null;
  issues: RepoIssue[];
  // currentIssue: RepoIssue | null;
}

interface IssueReducerActions {
  type: "SET_ALL_ISSUES" | "SET_ONE_ISSUE" | "SET_USER"
  payload: {
    issues: RepoIssue[],
    // currentIssue?: RepoIssue, 
    user?: GithubUser
  }
  ;
}

export function useIssueReducer(state: IssueStateReducerProps, actions: IssueReducerActions) {

  if (actions.type === "SET_ALL_ISSUES") {
    state.issues = actions.payload.issues
  }

  // else if (actions.type === "SET_ONE_ISSUE") {
  //   if (actions.payload.currentIssue)
  //     state.currentIssue = actions.payload.currentIssue
  // }

  else if (actions.type === "SET_USER") {
    if (actions.payload.user)
      state.user = actions.payload.user
  }

  return state;
}