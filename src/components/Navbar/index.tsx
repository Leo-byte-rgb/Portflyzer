import { Container } from "./styles";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";

export const Navbar = () => {
  return (
    <Container>
      <Header />
      <Content />
      <Footer />
    </Container>
  );
};
