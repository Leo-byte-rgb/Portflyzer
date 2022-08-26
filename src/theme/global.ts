import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

html {
  font-size: 12px;
}

@media (min-width: 768px) {
  html {
    font-size: 14px;
  }
}
@media (min-width: 1024px) {
  html {
    font-size: 16px;
  }
}

body {
  font-family: 'JetBrains Mono', monospace, sans-serif;
}

`;
