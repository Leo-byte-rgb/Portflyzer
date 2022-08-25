import { IconType } from "react-icons";
import { Button } from "./styles";

interface ITextButton {
  text: string;
  icon?: IconType;
}

export const TextButton = ({ text, icon: Icon }: ITextButton) => {
  return (
    <Button>
      <h6>{text}</h6> {Icon && <Icon />}
    </Button>
  );
};
