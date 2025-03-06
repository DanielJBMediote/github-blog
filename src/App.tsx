import { ThemeProvider } from 'styled-components';
import { Router } from './router';
import { defaultTheme } from "./styles/DefaultTheme/default";
import { GlobalStyle } from "./styles/globals";


export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  )
}

