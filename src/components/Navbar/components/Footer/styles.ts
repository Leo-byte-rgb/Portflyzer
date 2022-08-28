import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 16px;

  width: 100%;
  height: 45px;

  background: ${({ theme }) => theme.colors.aside.footer.background};
  box-shadow: -2px -2px 4px -4px ${({ theme }) => theme.colors.shadow};

  position: absolute;
  bottom: 0;
  left: 0;
`;
