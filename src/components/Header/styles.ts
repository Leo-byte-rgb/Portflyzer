import styled from "styled-components";

export const Container = styled.div<{ open: boolean }>`
  width: 100%;
  height: 60px;

  display: flex;
  align-items: center;

  padding: 0 16px;

  background: ${({ theme }) => theme.colors.header.background};

  margin-bottom: 32px;

  position: absolute;
  top: 0;
  left: 0;

  svg {
    color: ${({ theme }) => theme.colors.title};
    font-size: 32px;
    transform: ${({ open }) =>
      open ? "translateX(240px)" : "translateX(0px)"};

    transition: all 0.7s;

    z-index: 4;
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
