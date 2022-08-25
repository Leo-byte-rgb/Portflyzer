import styled from "styled-components";

export const Button = styled.button`
  background: none;
  border: none;
  outline: none;

  display: flex;
  align-items: center;

  width: auto;
  height: auto;

  cursor: pointer;

  font-size: 14px;
  color: ${({ theme }) => theme.colors.font};
`;
