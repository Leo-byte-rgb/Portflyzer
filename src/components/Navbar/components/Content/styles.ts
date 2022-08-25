import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  padding: 235px 32px 45px;

  background: ${({ theme }) => theme.colors.aside.content.background};

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const Section = styled.div`
  width: 100%;
  height: max-content;

  padding: 24px 0;

  display: flex;
  flex-direction: column;

  h6 {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.title};
  }
  span {
    font-size: 13px;
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const Row = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${({ theme }) => theme.colors.border};
`;

export const PersonalInfo = styled(Section)`
  gap: 8px;
`;

export const LanguageSkills = styled(Section)`
  > div > div {
    gap: 8px;
  }
`;

export const BarSkills = styled(Section)`
  gap: 16px;
`;

export const ResumeRow = styled(Row)`
  justify-content: flex-start;
  gap: 12px;

  svg {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.contrast};
  }
  span {
    white-space: nowrap;
  }
`;

export const SkillsResumeCheck = styled(Section)`
  gap: 8px;
`;
