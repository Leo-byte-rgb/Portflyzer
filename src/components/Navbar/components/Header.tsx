import { Container, Image, Infos, Name } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Image src="https://safine.com.br/wp-content/uploads/2021/09/safine_com_br-oculos-2-em-1-clip-on-masculino-redondo-preto-rui-8-768x768.jpg" />
      <Name>Artur Carter</Name>
      <Infos>Front-end Developer</Infos>
      <Infos>UI/UX Designer</Infos>
    </Container>
  );
};
