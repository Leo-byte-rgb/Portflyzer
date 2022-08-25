import styled from "styled-components";

export const Container = styled.div`
  width: 250px;
  height: 100vh;

  background: ${({ theme }) => theme.colors.aside.background};
`;
