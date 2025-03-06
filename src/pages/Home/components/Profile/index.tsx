import { ArrowSquareOut, Building, GithubLogo, Users } from "@phosphor-icons/react";
import { Link, Text, Title } from "../../../../components/Texts/styles";
import { ProfileContainer, ProfileContent, ProfileImage, ProfileInfo, ProfileLink, ProfileTag, ProfileTags } from "./styles";

export function Profile() {
  return (
    <ProfileContainer>
      <ProfileImage src="https://github.com/DanielJBMediote.png" alt="" />
      <ProfileContent>
        <ProfileInfo>
          <Title size="L" >Daniel J. B. Mediote</Title>
          <Text size="M" >Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</Text>
        </ProfileInfo>
        <ProfileTags>
          <ProfileTag>
            <GithubLogo weight="fill" />
            <Text size="M">DanielJBMediote</Text>
          </ProfileTag>
          <ProfileTag>
            <Building weight="fill" />
            <Text size="M">Rockeatseat</Text>
          </ProfileTag>
          <ProfileTag>
            <Users weight="fill" />
            <Text size="M">17 Seguidores</Text>
          </ProfileTag>
        </ProfileTags>
      </ProfileContent>
      <ProfileLink>
        <Link>Github</Link>
        <ArrowSquareOut />
      </ProfileLink>
    </ProfileContainer>
  )
}