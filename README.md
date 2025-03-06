# GitHub Issues Lister

## Visão Geral do Projeto

Este projeto é uma aplicação web desenvolvida como parte do Desafio 3 da trilha React da Rocketseat. O objetivo principal é criar uma interface que lista e exibe detalhes das Issues de um repositório específico do GitHub.

## Tecnologias e Ferramentas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário
- **TypeScript**: Superset tipado de JavaScript
- **Vite**: Ferramenta de build rápida para projetos modernos de web
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código


## Funcionalidades Principais

1. **Listagem de Issues**: Exibe uma lista paginada de Issues do repositório.
2. **Detalhes da Issue**: Ao clicar em uma Issue, mostra seus detalhes completos.
3. **Busca de Issues**: Permite buscar Issues por título ou conteúdo.
4. **Filtros**: Possibilita filtrar Issues por labels, descrição, etc.

## Componentes Principais

- **IssueList**: Componente responsável por renderizar a lista de Issues.
- **IssueDetail**: Exibe os detalhes de uma Issue específica.
- **SearchBar**: Permite a busca de Issues.
- **Pagination**: Gerencia a paginação da lista de Issues.

## Integração com a API do GitHub

O projeto utiliza a API do GitHub para buscar dados das Issues. As principais endpoints utilizadas são:

- `GET /repos/{owner}/{repo}/issues`: Para listar as Issues
- `GET /repos/{owner}/{repo}/issues/{issue_number}`: Para obter detalhes de uma Issue específica

## Estilização

O projeto utiliza a lib [Styled Components]([https://](https://styled-components.com/)) para estilização, garantindo escopo local para os estilos .

## Desafios e Aprendizados

1. **Gerenciamento de Estado**: Utilização eficiente do estado do React para manter a interface sincronizada com os dados.
2. **Paginação**: Implementação de paginação para lidar com grandes volumes de Issues.
3. **Performance**: Otimização de renderização para garantir uma experiência fluida ao usuário.
4. **TypeScript**: Uso efetivo de tipagem para melhorar a robustez e manutenibilidade do código.

## Conclusão

Este projeto demonstra a aplicação prática de conceitos modernos de desenvolvimento web com React, oferecendo uma interface intuitiva para interagir com a API de Issues do GitHub. Ele serve como um excelente exemplo de como integrar APIs externas e gerenciar estados complexos em aplicações React.