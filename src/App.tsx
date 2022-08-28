import { NavProvider } from "hooks/useNav";
import { ProfileLayout } from "layout";
import { Home } from "pages/Home";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "theme/global";
import { darkTheme } from "theme/theme";

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <GlobalStyle />
      <NavProvider>
        <ProfileLayout>
          <Home />
        </ProfileLayout>
      </NavProvider>
    </ThemeProvider>
  );
}

export default App;
