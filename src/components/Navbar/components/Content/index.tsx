import { FaCheck, FaDownload } from "react-icons/fa";
import { BarProgress } from "components/BarProgress";
import { CircularProgress } from "components/CircularProgress";
import {
  Container,
  PersonalInfo,
  LanguageSkills,
  Row,
  Divider,
  Column,
  BarSkills,
  SkillsResumeCheck,
  ResumeRow,
  Section,
} from "./styles";
import { TextButton } from "components/Button/TextButton";

export const Content = () => {
  return (
    <Container>
      <PersonalInfo>
        <Row>
          <h6>País:</h6>
          <span>Brasil</span>
        </Row>
        <Row>
          <h6>Cidade:</h6>
          <span>Chapecó</span>
        </Row>
        <Row>
          <h6>Idade:</h6>
          <span>19</span>
        </Row>
      </PersonalInfo>
      <Divider />
      <LanguageSkills>
        <Row>
          <Column>
            <CircularProgress value={95} />
            <span>Português</span>
          </Column>
          <Column>
            <CircularProgress value={75} />
            <span>Inglês</span>
          </Column>
          <Column>
            <CircularProgress value={75} />
            <span>Francês</span>
          </Column>
        </Row>
      </LanguageSkills>
      <Divider />
      <BarSkills>
        <BarProgress title="HTML" value={85} />
        <BarProgress title="CSS" value={75} />
        <BarProgress title="Javascript" value={95} />
        <BarProgress title="React" value={95} />
        <BarProgress title="Node" value={70} />
        <BarProgress title="SQL" value={50} />
      </BarSkills>
      <Divider />
      <SkillsResumeCheck>
        <ResumeRow>
          <FaCheck />
          <span>Html, Css, Javascript</span>
        </ResumeRow>
        <ResumeRow>
          <FaCheck />
          <span>React, React Native</span>
        </ResumeRow>
        <ResumeRow>
          <FaCheck />
          <span>Node, SQL, Express</span>
        </ResumeRow>
        <ResumeRow>
          <FaCheck />
          <span>UI, UX, Research</span>
        </ResumeRow>
      </SkillsResumeCheck>
      <Divider />
      <Section>
        <TextButton text="Download CV" icon={FaDownload} />
      </Section>
    </Container>
  );
};
