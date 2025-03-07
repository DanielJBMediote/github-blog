import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from "@phosphor-icons/react";

import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Link, Text, Title } from "../../components/Texts/styles";
import { IssueContext } from "../../contexts/IssueContext";
import { formattToNow } from "../../utils/formatter";
import { ProfileTag, ProfileTags } from "../Home/components/Profile/styles";
import { Markdown } from "./components/Markdown";
import { IssueContainer, IssueDetailContent, IssueHeaderCard, IssueLink, IssueLinksContainer } from "./styles";

export function Issue() {

  const location = useLocation();
  const issueNumber = location.state?.issueNumber as number;
  const { currentIssue, fetchIssue } = useContext(IssueContext)

  // const [currentIssue, setCurrentIssue] = useState<RepoIssue | null>(null)


  useEffect(() => {
    const fetchCurrentIssue = async () => {
      await fetchIssue(issueNumber)
    }
    fetchCurrentIssue();
  }, [fetchIssue, issueNumber])


  if (!currentIssue) {
    return <></>
  }
  return (
    <IssueContainer>
      <IssueHeaderCard>
        <IssueLinksContainer>
          <IssueLink to="/">
            <ArrowLeft />
            <Link>Voltar</Link>
          </IssueLink>
          <IssueLink to={currentIssue.html_url} target="_blank">
            <Link>Ver no github </Link>
            <ArrowSquareOut />
          </IssueLink>
        </IssueLinksContainer>

        <Title size="L">{currentIssue.title}</Title>

        <ProfileTags>
          <ProfileTag>
            <GithubLogo weight="fill" />
            <Text size="M">{currentIssue.user.login}</Text>
          </ProfileTag>
          <ProfileTag>
            <Calendar weight="fill" />
            <Text size="M">{formattToNow(new Date(currentIssue.created_at))}</Text>
          </ProfileTag>
          <ProfileTag>
            <ChatCircle weight="fill" />
            <Text size="M">{currentIssue.comments} comentários</Text>
          </ProfileTag>
        </ProfileTags>
      </IssueHeaderCard>

      <IssueDetailContent>
        <Markdown content={currentIssue.body} />
      </IssueDetailContent>
    </IssueContainer>
  )
}