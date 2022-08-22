import styled from "styled-components";

export const Container = styled.div`
  width: 150px;
  height: 100%;

  background: ${({ theme }) => theme.colors.aside.background};
`;
