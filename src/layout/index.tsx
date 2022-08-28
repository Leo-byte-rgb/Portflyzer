import { Header } from "components/Header";
import { Navbar } from "components/Navbar";
import { ReactNode } from "react";
import { Wrapper, Main, Content } from "./styles";

interface IProfileLayout {
  children: ReactNode;
}

export const ProfileLayout = ({ children }: IProfileLayout) => {
  return (
    <Wrapper>
      <Main>
        <Navbar />
        <Header />
        <Content>{children}</Content>
      </Main>
    </Wrapper>
  );
};
