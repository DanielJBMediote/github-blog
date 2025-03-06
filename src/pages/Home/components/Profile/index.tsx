import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import { useContext } from "react";
import { Link, Text, Title } from "../../../../components/Texts/styles";
import { IssueContext } from "../../../../contexts/IssueContext";
import { ProfileContainer, ProfileContent, ProfileImage, ProfileInfo, ProfileLink, ProfileTag, ProfileTags } from "./styles";

export function Profile() {

  const { user } = useContext(IssueContext)


  if (!user) return <></>
  return (
    <ProfileContainer>
      <ProfileImage src={user.avatar_url} alt="" />
      <ProfileContent>
        <ProfileInfo>
          <Title size="L" >{user.name}</Title>
          <Text size="M" >{user.bio}</Text>
        </ProfileInfo>
        <ProfileTags>
          <ProfileTag>
            <GithubLogo weight="fill" />
            <Text size="M">{user.login}</Text>
          </ProfileTag>
          <ProfileTag>
            <Building weight="fill" />
            <Text size="M">{user.company || "Sem Empresa"}</Text>
          </ProfileTag>
          <ProfileTag>
            <Users weight="fill" />
            <Text size="M">{user.followers} Seguidores</Text>
          </ProfileTag>
        </ProfileTags>
      </ProfileContent>
      <ProfileLink to={user.html_url} target="_blank">
        <Link>Github</Link>
        <ArrowSquareOut />
      </ProfileLink>
    </ProfileContainer>
  )
}