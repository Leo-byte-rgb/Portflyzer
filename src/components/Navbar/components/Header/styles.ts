import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 235px;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 32px;

  background: ${({ theme }) => theme.colors.aside.header.background};
  box-shadow: 0 2px 4px -4px ${({ theme }) => theme.colors.shadow};

  position: absolute;
  top: 0;
  left: 0;
`;

export const Image = styled.img`
  width: 90px;
  height: 90px;

  border-radius: 100%;
`;

export const Name = styled.h5`
  font-size: 16px;
  margin-top: 8px;
`;
export const Infos = styled.span`
  font-size: 13px;
  margin-top: 8px;

  &:last-child {
    margin-top: 2px;
  }
`;
