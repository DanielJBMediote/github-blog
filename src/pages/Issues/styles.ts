import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const IssueContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin: auto 16rem;
`
export const IssueHeaderCard = styled.div`
  position: relative;
  margin-top: -7rem;

  background-color: ${props => props.theme["profile"]};
  border: 1px solid ${props => props.theme["border"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2em;

  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 0.5rem;
`

export const IssueLinksContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const IssueLink = styled(NavLink)`
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

export const IssueDetailContent = styled.div`
  color: ${props => props.theme["text"]}
`