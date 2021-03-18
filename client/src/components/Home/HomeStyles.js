import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6rem;
  @media screen and (min-width: 800px) {
    margin-top: 4rem;
  }
`;

export const Content = styled.div`
  margin-top: 2rem;
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(500px, 1fr));
    grid-gap: 1rem;
  }
`;
