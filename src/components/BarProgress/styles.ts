import styled, { keyframes } from "styled-components";

const progressAnimation = keyframes`
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
`;

export const Container = styled.div`
  width: 100%;
  height: max-content;

  display: flex;
  flex-direction: column;

  gap: 8px;
`;

export const TotalContainer = styled.div`
  width: 100%;
  height: 5px;
  background: ${({ theme }) => theme.colors.progress.progressBackground};
`;

export const Total = styled.div<{ value: number }>`
  width: 0%;
  height: 100%;

  max-width: ${({ value }) => `${value}%`};

  background-color: ${({ theme }) => theme.colors.contrast};

  animation: ${progressAnimation} 2s forwards;
`;

export const Heading = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-between;

  h6 {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.title};
  }
  span {
    font-size: 12px;
    color: ${({ theme }) => theme.colors.font};
  }
`;
