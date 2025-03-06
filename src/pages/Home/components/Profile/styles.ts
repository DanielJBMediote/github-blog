import styled from "styled-components";

export const ProfileContainer = styled.div`
  position: relative;
  margin-top: -7rem;

  background-color: ${props => props.theme["profile"]};
  border: 1px solid ${props => props.theme["border"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2em;

  display: flex;
  gap: 1rem;
  justify-content: start;
  align-items: center;

  `

export const ProfileImage = styled.img`
  width: 9.25rem;
  height: 9.25rem;
  border-radius: 8px;
`

export const ProfileContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const ProfileInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ProfileTags = styled.div`
  display: flex;
  gap: 1rem;

  /* svg:first-child {
    color: ${props => props.theme["profile"]};
    border-radius: 50%;
    background-color: ${props => props.theme["label"]};
    padding: 2px;
  } */

  `

export const ProfileTag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  
  svg {
    color: ${props => props.theme["label"]};
  }
  
  `

export const ProfileLink = styled.a`
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  color: ${props => props.theme["blue"]};
  cursor: pointer;
  border-bottom: 1px solid transparent;
  text-decoration: none;
  
  &:hover {
    border-bottom: 1px solid ${props => props.theme["blue"]};
  }
`