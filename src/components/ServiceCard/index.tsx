import { OrderNow } from "components/OrderNow";
import { Container } from "./styles";

interface IServiceCard {
  title: string;
  text: string;
}

export const ServiceCard = ({ text, title }: IServiceCard) => {
  return (
    <Container>
      <h4>{title}</h4>
      <p>{text}</p>
      <OrderNow />
    </Container>
  );
};
