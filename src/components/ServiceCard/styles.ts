import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  padding: 32px;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme.colors.secondaryBackground};

  box-shadow: 0 0 10px -5px ${({ theme }) => theme.colors.shadow};

  > p {
    color: ${({ theme }) => theme.colors.font};
    margin-top: 12px;
  }
`;
