import styled from "styled-components";

const StyledScoreboard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: solid 3px hsl(217, 16%, 45%);
  border-radius: 1.5rem;
  padding: min(4%, 1.5rem);
  width: min(100%, 60rem);

  img {
    display: block;
    width: min(25%, 10rem);
  }
`;

export default StyledScoreboard;
