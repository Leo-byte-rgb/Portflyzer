import { Navbar } from "components/Navbar";
import { ReactNode } from "react";
import { Container, Main } from "./styles";

interface IProfileLayout {
  children: ReactNode;
}

export const ProfileLayout = ({ children }: IProfileLayout) => {
  return (
    <Container>
      <Main>
        <Navbar />
        {children}
      </Main>
    </Container>
  );
};
