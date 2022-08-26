import { ProfileLayout } from "layout";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "theme/global";
import { theme } from "theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <ProfileLayout>
        <></>
      </ProfileLayout>
    </ThemeProvider>
  );
}

export default App;
