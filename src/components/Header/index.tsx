import { IconButton } from "components/Button/IconButton";
import useNav from "hooks/useNav";
import { AiOutlineMore } from "react-icons/ai";
import { Container } from "./styles";

export const Header = () => {
  const { open, toggle } = useNav();

  return (
    <Container open={open}>
      <IconButton icon={AiOutlineMore} onClick={toggle} />
    </Container>
  );
};
