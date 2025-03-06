import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    padding: 0;
    margin: 0;
    border: 0;
    box-shadow: border-box;

    background-color: ${props => props.theme["background"]};
  }

  * {
    font-family: "Nunito", sans-serif;
    font-optical-sizing: auto;
    line-height: 160%;
    font-style: normal;
  }

`