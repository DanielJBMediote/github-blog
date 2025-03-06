import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Span, Text, Title } from "../../../../components/Texts/styles";
import { IssueContext } from "../../../../contexts/IssueContext";
import { formattToNow, sliceText } from "../../../../utils/formatter";
import { IssueCardContainer, IssueGridContainer, IssueHeader } from "./styles";

export function IssuesList() {

  const navigate = useNavigate()

  const { issues } = useContext(IssueContext)

  async function handleFetchIssue(issueNumber: number) {
    // const fetchedIssue = await fetchIssue(issueNumber);
    // if (fetchedIssue) {
    navigate("/issue", { state: { issueNumber } });
    // }
  }

  return (
    <IssueGridContainer>
      {issues.map(issue => (
        <IssueCardContainer key={issue.id} onClick={() => handleFetchIssue(issue.number)}>
          <IssueHeader>
            <Title size="M">{issue.title}</Title>
            <Span size="S">{formattToNow(new Date(issue.created_at))}</Span>
          </IssueHeader>
          <Text size="M">{sliceText(issue.body, 200)}</Text>
        </IssueCardContainer>
      ))}

    </IssueGridContainer>
  )
}