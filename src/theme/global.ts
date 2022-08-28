import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;

  font-family: 'Poppins', sans-serif;
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
`;
