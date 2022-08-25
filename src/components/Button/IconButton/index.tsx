import { HTMLAttributes } from "react";
import { IconType } from "react-icons";
import { Button } from "./styles";

interface IIconButton extends HTMLAttributes<HTMLButtonElement> {
  icon: IconType;
}

export const IconButton = ({ icon: Icon, ...props }: IIconButton) => {
  return (
    <Button {...props}>
      <Icon />
    </Button>
  );
};
