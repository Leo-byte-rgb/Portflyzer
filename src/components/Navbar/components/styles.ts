import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px 0;

  background: ${({ theme }) => theme.colors.aside.headerBackground};
  box-shadow: 0 4px 5px -5px ${({ theme }) => theme.colors.aside.bottomShadow};
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;

  border-radius: 100%;
`;

export const Name = styled.h5`
  font-size: 16px;
  margin-top: 8px;

  color: ${({ theme }) => theme.colors.title};
`;
export const Infos = styled.span`
  font-size: 13px;
  margin-top: 8px;

  &:last-child {
    margin-top: 2px;
  }

  color: ${({ theme }) => theme.colors.font};
`;
