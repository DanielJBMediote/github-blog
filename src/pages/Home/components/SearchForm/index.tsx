import { Span, Title } from "../../../../components/Texts/styles";
import { SearchFormContainer, SearchHeader, SearchInput } from "./styles";

export function SearchForm() {

  return (
    <SearchFormContainer>
      <SearchHeader>
        <Title size="S">Publicações</Title>
        <Span size="S">6 publicações</Span>
      </SearchHeader>
      <SearchInput type="text" placeholder="Buscar conteúdo" />
    </SearchFormContainer>
  )
}