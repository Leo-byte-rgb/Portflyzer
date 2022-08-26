import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100%;

  position: relative;

  box-shadow: 0 0 10px -4px ${({ theme }) => theme.colors.shadow};
`;
