import styled from "styled-components";

export const Container = styled.div`
  background: inherit;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled.div`
  width: 45px;
  height: 45px;
  border-radius: 50%;

  background: ${({ theme }) => theme.colors.progress.labelBackground};
  color: ${({ theme }) => theme.colors.font};

  z-index: 1;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
`;

export const Progress = styled.div.attrs<{ degrees: number }>(
  ({ theme, degrees }) => ({
    style: {
      background: `conic-gradient(${theme.colors.contrast} ${degrees}deg, ${theme.colors.progress.progressBackground} 0deg)`,
    },
  })
)<{ degrees: number }>`
  width: 55px;
  height: 55px;

  border-radius: 50%;

  transition: all 0.3s;

  display: flex;
  align-items: center;
  justify-content: center;
`;
