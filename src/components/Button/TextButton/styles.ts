import styled from "styled-components";

export const Button = styled.button`
  background: none;
  outline: none;
  border: none;

  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  gap: 4px;

  &:hover {
    filter: brightness(0.5);
  }

  transition: all 0.3s;

  h6,
  svg {
    color: ${({ theme }) => theme.colors.font};
  }
`;
