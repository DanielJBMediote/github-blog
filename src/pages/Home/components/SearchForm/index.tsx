import { ChangeEvent, useContext } from "react";
import { Span, Title } from "../../../../components/Texts/styles";
import { IssueContext } from "../../../../contexts/IssueContext";
import { SearchFormContainer, SearchHeader, SearchInput } from "./styles";

export function SearchForm() {

  const { fetchIssues, issues } = useContext(IssueContext)

  async function handleBlurQuery(e: ChangeEvent<HTMLInputElement>) {
    e.preventDefault();

    const query = e.target.value;
    await fetchIssues(query);
  }

  const publishesCount = issues.length;

  return (
    <SearchFormContainer>
      <SearchHeader>
        <Title size="S">Publicações</Title>
        <Span size="S">{publishesCount} publicações</Span>
      </SearchHeader>
      <SearchInput type="text" placeholder="Buscar conteúdo" onBlur={handleBlurQuery} />
    </SearchFormContainer>
  )
}