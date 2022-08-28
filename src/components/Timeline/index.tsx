import {
  Container,
  Title,
  Wrapper,
  CardList,
  Card,
  Line,
  HeaderWrapper,
  Header,
  TimeInfo,
} from "./styles";

interface ICard {
  title: string;
  ocupation: string;
  date: string;
  text: string;
}

interface ITimeline {
  title: string;
  cards: Array<ICard>;
}

export const Timeline = ({ title, cards }: ITimeline) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Wrapper>
        <CardList>
          {cards.map(() => (
            <Card>
              <Header>
                <HeaderWrapper>
                  <h4>Instituto Federal de Santa Catarina</h4>
                  <span>Estudante</span>
                </HeaderWrapper>
                <TimeInfo>
                  <span>Jan 2018 - Mar 2022</span>
                </TimeInfo>
              </Header>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat
                tenetur pariatur doloribus.
              </p>
            </Card>
          ))}
        </CardList>
        <Line />
      </Wrapper>
    </Container>
  );
};
