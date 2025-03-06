import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const SearchHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const SearchInput = styled.input`
  padding: 0.5rem;
  outline: none;
  border-radius: 6px;
  background-color: ${props => props.theme["input"]};
  border: 1px solid ${props => props.theme["border"]};
  padding: 0.75rem 1rem;
  color: ${props => props.theme["label"]};
  
  &:focus {
    border-color: ${props => props.theme["blue"]};
    color: ${props => props.theme["text"]};
  }

`