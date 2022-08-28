import { Nav, FloatingContainer, FloatingNav } from "./styles";
import { Header } from "./components/Header";
import { Content } from "./components/Content";
import { Footer } from "./components/Footer";
import useBreakpoint from "hooks/useBreakpoints";
import useNav from "hooks/useNav";

export const Navbar = () => {
  const breakpoint = useBreakpoint();
  const { open, toggle } = useNav();

  console.log(breakpoint);
  if (breakpoint === "md" || breakpoint === "sm") {
    return (
      <>
        <FloatingContainer open={open} onClick={toggle} />
        <FloatingNav open={open}>
          <Header />
          <Content />
          <Footer />
        </FloatingNav>
      </>
    );
  }
  return (
    <Nav>
      <Header />
      <Content />
      <Footer />
    </Nav>
  );
};
