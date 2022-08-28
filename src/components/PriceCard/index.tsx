import { OrderNow } from "components/OrderNow";
import { BsCheckLg } from "react-icons/bs";
import { Container, Price, List, Item } from "./styles";

interface IPriceCard {
  services: Array<string>;
  price: number;
  title: string;
  isPopular?: boolean;
}

export const PriceCard = ({
  title,
  services,
  price,
  isPopular,
}: IPriceCard) => {
  return (
    <Container isPopular={isPopular}>
      <h4>{title}</h4>
      <Price>
        <small>R$</small>
        <h1>{price}</h1>
        <small>Hora</small>
      </Price>
      <List>
        {services.map((description) => (
          <Item>
            <BsCheckLg />
            <span>{description}</span>
          </Item>
        ))}
      </List>
      <OrderNow />
    </Container>
  );
};
