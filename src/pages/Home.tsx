import { Countup } from "components/Countup";
import { PriceCard } from "components/PriceCard";
import { ServiceCard } from "components/ServiceCard";
import { Timeline } from "components/Timeline";
import {
  Container,
  Highlight,
  HighlightWrapper,
  Highlights,
  Banner,
  Services,
  Prices,
  TimelineSection,
} from "./styles";

export const Home = () => {
  return (
    <Container>
      <Banner />
      <Highlights>
        <HighlightWrapper>
          <Countup
            value={10}
            render={(value) => <Highlight>{value} +</Highlight>}
          />
          <span>Anos de Experiência</span>
        </HighlightWrapper>
        <HighlightWrapper>
          <Countup
            value={143}
            render={(value) => <Highlight>{value}</Highlight>}
          />
          <span>Projetos Entregues</span>
        </HighlightWrapper>
        <HighlightWrapper>
          <Countup
            value={114}
            render={(value) => <Highlight>{value} +</Highlight>}
          />
          <span>Clientes Felizes</span>
        </HighlightWrapper>
        <HighlightWrapper>
          <Countup
            value={20}
            render={(value) => <Highlight>{value} +</Highlight>}
          />
          <span>Prêmios de Desenvolvimento</span>
        </HighlightWrapper>
      </Highlights>
      <h2>Serviços</h2>
      <Services>
        <ServiceCard
          title="Web Development"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        />
        <ServiceCard
          title="Web 3 Development"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        />
        <ServiceCard
          title="UI/UX Design"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        />
        <ServiceCard
          title="Web Infrastructure"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        />
        <ServiceCard
          title="Product Design"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        />
        <ServiceCard
          title="Automatization"
          text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus."
        />
      </Services>
      <h2>Preços</h2>
      <Prices>
        <PriceCard
          title="Backend"
          services={[
            "Api Rest",
            "GRAPH QL",
            "Database Analysis",
            "Docker",
            "Kubernetes",
            "Deploy",
          ]}
          price={120}
        />
        <PriceCard
          title="Frontend"
          services={[
            "Api Rest",
            "GRAPH QL",
            "Database Analysis",
            "Docker",
            "Kubernetes",
            "Deploy",
          ]}
          isPopular
          price={155}
        />
        <PriceCard
          title="Fullstack"
          services={[
            "Api Rest",
            "GRAPH QL",
            "Database Analysis",
            "Docker",
            "Kubernetes",
            "Deploy",
          ]}
          price={210}
        />
      </Prices>
      <TimelineSection>
        <Timeline
          title="Formação"
          cards={[
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
          ]}
        />
        <Timeline
          title="Experiência"
          cards={[
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
            {
              title: "Instituto Federal de Santa Catarina",
              ocupation: "Student",
              date: "Jan 2018 - Mar 2022",
              text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus esse commodi deserunt vitae, vero quasi! Veniam quaerat tenetur pariatur doloribus.",
            },
          ]}
        />
      </TimelineSection>
    </Container>
  );
};
