import styled, { keyframes } from "styled-components";

const movingArrow = keyframes`
0% {
  transform: translateX(0px);
}
50% {
  transform: translateX(5px);
}
100% {
  transform: translateX(0);
}
`;

export const OrderButton = styled.button`
  background: none;
  outline: none;
  border: none;

  display: flex;
  align-items: center;

  gap: 4px;

  width: max-content;

  margin-top: 24px;

  cursor: pointer;

  &:hover {
    span {
      animation: ${movingArrow} 1s infinite;
    }
  }

  > h3,
  span {
    color: ${({ theme }) => theme.colors.contrast};
  }
  > h3 {
    font-weight: bold;
    letter-spacing: 1.5px;
  }
  > span {
    font-weight: bold;
    font-size: 24px;
  }
`;
