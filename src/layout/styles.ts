import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 32px;

  @media (max-width: 768px) {
    padding: 76px 0;
  }

  background: ${({ theme }) => theme.colors.primaryBackground};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: ${({ theme }) => theme.colors.title};
  }

  span,
  p,
  b,
  small,
  strong {
    color: ${({ theme }) => theme.colors.font};
  }
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;

  max-width: 1366px;
  display: flex;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;

  overflow-y: auto;

  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */

  &::-webkit-scrollbar {
    display: none;
  }
`;
