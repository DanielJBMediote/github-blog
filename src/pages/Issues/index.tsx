import { ArrowLeft, ArrowSquareOut, Calendar, ChatCircle, GithubLogo } from "@phosphor-icons/react";
import { Link, Text, Title } from "../../components/Texts/styles";
import { ProfileTag, ProfileTags } from "../Home/components/Profile/styles";
import { IssueContainer, IssueDetailContent, IssueHeaderCard, IssueLink, IssueLinksContainer } from "./styles";


export function Issues() {

  return (
    <IssueContainer>
      <IssueHeaderCard>
        <IssueLinksContainer>
          <IssueLink href="/">
            <ArrowLeft />
            <Link>Voltar</Link>
          </IssueLink>
          <IssueLink>
            <Link>Ver no github </Link>
            <ArrowSquareOut />
          </IssueLink>
        </IssueLinksContainer>

        <Title size="L">JavaScript data types and data structures</Title>

        <ProfileTags>
          <ProfileTag>
            <GithubLogo weight="fill" />
            <Text size="M">DanielJBMediote</Text>
          </ProfileTag>
          <ProfileTag>
            <Calendar weight="fill" />
            <Text size="M">Há 1 dia</Text>
          </ProfileTag>
          <ProfileTag>
            <ChatCircle weight="fill" />
            <Text size="M">5 comentários</Text>
          </ProfileTag>
        </ProfileTags>
      </IssueHeaderCard>

      <IssueDetailContent>

      </IssueDetailContent>
    </IssueContainer>
  )
}