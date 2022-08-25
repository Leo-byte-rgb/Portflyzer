import { Container, Heading, TotalContainer, Total } from "./styles";

interface IBarProgress {
  title: string;
  value: number;
}

export const BarProgress = ({ title, value }: IBarProgress) => {
  return (
    <Container>
      <Heading>
        <h6>{title}</h6>
        <span>{value}%</span>
      </Heading>
      <TotalContainer>
        <Total value={value} />
      </TotalContainer>
    </Container>
  );
};
