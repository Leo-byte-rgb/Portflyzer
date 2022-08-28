import styled from "styled-components";

export const Container = styled.div<{ isPopular?: boolean }>`
  width: 100%;
  height: 100%;

  padding: 32px;

  display: flex;
  flex-direction: column;
  align-items: center;

  background: ${({ theme }) => theme.colors.secondaryBackground};

  box-shadow: 0 0 10px -5px ${({ theme }) => theme.colors.shadow};

  gap: 16px;

  position: relative;

  overflow: hidden;

  &::before {
    content: "Popular";

    display: ${({ isPopular }) => (isPopular ? "flex" : "none")};
    align-items: center;
    justify-content: center;

    position: absolute;

    top: 20px;
    right: -72px;

    transform: rotate(45deg);

    width: 200px;

    color: ${({ theme }) => theme.colors.black};
    background: ${({ theme }) => theme.colors.contrast};
  }
`;

export const Price = styled.div`
  width: 100%;

  display: flex;
  align-items: flex-end;
  justify-content: center;

  gap: 12px;

  > h1 {
    font-size: 60px;
    line-height: 48px;
    color: ${({ theme }) => theme.colors.contrast};
  }
  > small {
    font-size: 16px;
    line-height: 24px;
  }
`;

export const List = styled.ol`
  width: 100%;

  list-style: none;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  color: ${({ theme }) => theme.colors.font};

  gap: 8px;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 8px;

  font-size: 14px;
  svg {
    color: ${({ theme }) => theme.colors.contrast};
  }
`;
