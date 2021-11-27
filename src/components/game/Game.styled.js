import styled from "styled-components";

const StyledGame = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: min-content min-content;
  justify-items: center;
  align-items: center;
  gap: 5rem 2rem;

  @media screen and (min-width: 750px) {
    & {
      grid-template-columns: 1fr 25rem 1fr;
      grid-template-rows: 1fr;
    }
  }
`;

export default StyledGame;
