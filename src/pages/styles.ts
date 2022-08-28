import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  padding: 0 32px;

  gap: 32px;
`;

export const Banner = styled.div`
  width: 100%;
  min-height: 235px;

  background-image: url("https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80");

  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Highlights = styled.section`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));

  column-gap: 32px;
  row-gap: 32px;
`;

export const HighlightWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    max-width: 120px;
    font-size: 12px;
  }

  h6 {
    color: ${({ theme }) => theme.colors.contrast};
  }

  flex-wrap: wrap;
`;

export const Highlight = styled.h6`
  font-size: 24px;
  font-weight: bold;

  white-space: nowrap;
`;

export const Services = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  column-gap: 32px;
  row-gap: 32px;
`;

export const Prices = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  column-gap: 32px;
  row-gap: 32px;
`;

export const TimelineSection = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));

  column-gap: 32px;
  row-gap: 32px;

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
