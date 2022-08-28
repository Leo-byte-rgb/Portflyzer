import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

export const Title = styled.h2``;

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: space-between;

  margin-top: 32px;
`;

export const CardList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const Card = styled.div`
  width: 100%;
  height: max-content;

  padding: 32px;

  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: 0 0 10px -5px ${({ theme }) => theme.colors.shadow};

  position: relative;

  &::before {
    content: "";

    position: absolute;

    top: 12px;
    right: -12px;

    width: 0;
    height: 0;

    transform: rotate(270deg);

    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-top: 10px solid ${({ theme }) => theme.colors.secondaryBackground};
  }

  &::after {
    content: "";
    background: ${({ theme }) => theme.colors.contrast};

    position: absolute;
    top: 10px;
    right: -46px;

    width: 15px;
    height: 15px;

    border-radius: 100%;
  }
`;

export const Line = styled.div`
  width: 5px;
  min-width: 5px;
  height: 100%;

  margin-left: 36px;

  background: ${({ theme }) => theme.colors.border};
`;

export const Header = styled.div`
  width: 100%;
  height: max-content;

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  margin-bottom: 16px;
  gap: 8px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;

  gap: 4px;
`;

export const TimeInfo = styled.div`
  width: 200px;
  padding: 4px 8px;
  height: max-content;

  border-radius: 15px;

  background: ${({ theme }) => theme.colors.secondaryBackground};
  box-shadow: inset 0 0 20px -12px ${({ theme }) => theme.colors.shadow};
`;
