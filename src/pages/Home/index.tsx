import { IssuesList } from "./components/IssuesList";
import { Profile } from "./components/Profile";
import { SearchForm } from "./components/SearchForm";
import { HomeContainer } from "./style";

export function Home() {
  return (
    <HomeContainer>
      <Profile />
      <SearchForm />
      <IssuesList />
    </HomeContainer>

  )
}