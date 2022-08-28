import styled from "styled-components";

interface INav {
  open: boolean;
}

export const Nav = styled.nav`
  min-width: 300px;
  max-width: 300px;
  height: 100%;

  position: relative;

  box-shadow: 0 0 10px -4px ${({ theme }) => theme.colors.shadow};
`;

export const FloatingNav = styled(Nav)<INav>`
  width: ${({ open }) => (open ? "300px" : "0")};
  min-width: ${({ open }) => (open ? "300px" : "0")};
  max-width: ${({ open }) => (open ? "300px" : "0")};

  position: absolute;
  top: 0;
  left: 0;

  z-index: 3;

  overflow: hidden !important;
  * {
    white-space: nowrap;
  }

  transition: all 0.6s;
`;

export const FloatingContainer = styled.div<INav>`
  display: ${({ open }) => (open ? "block" : "none")};

  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  bottom: 0;

  z-index: 1;

  background: ${({ theme }) => `${theme.colors.black}60`};
`;
