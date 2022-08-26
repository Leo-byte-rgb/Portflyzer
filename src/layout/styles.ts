import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 16px;

  background: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1366px;

  display: flex;
`;
