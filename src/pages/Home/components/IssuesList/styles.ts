import styled from "styled-components";

export const IssueGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
`

export const IssueCardContainer = styled.div`
  display: relative;
  background-color: ${props => props.theme["post"]};
  border-radius: 10px;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  padding: 2rem;
  border: 2px solid transparent;
  cursor: pointer;

  &:hover {
    border: 2px solid ${props => props.theme["label"]};
  }

`

export const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 2rem;

  span {
    white-space: nowrap;
  }
`