import { IconButton } from "components/Button/IconButton";
import {
  AiFillLinkedin,
  AiFillInstagram,
  AiFillDribbbleCircle,
  AiFillGithub,
} from "react-icons/ai";
import { Container } from "./styles";

export const Footer = () => {
  return (
    <Container>
      <IconButton icon={AiFillLinkedin} />
      <IconButton icon={AiFillInstagram} />
      <IconButton icon={AiFillDribbbleCircle} />
      <IconButton icon={AiFillGithub} />
    </Container>
  );
};
