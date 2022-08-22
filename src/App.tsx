import { Navbar } from "components/Navbar";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "theme/global";
import { theme } from "theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Navbar />
    </ThemeProvider>
  );
}

export default App;
