import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
    0% {
        opacity: 0;
        transform: translateY(-4rem);
    }

    100% {
        opacity: 1;
        transform: translateY(0);
    }
`;

const StyledResult = styled.div`
  grid-column: 1 / 3;
  grid-row: 2 / 3;
  opacity: 0;
  animation: ${slideDown} 500ms ease-out 2000ms forwards;

  @media screen and (min-width: 750px) {
    & {
      grid-column: 2 / 3;
      grid-row: 1 / 2;
    }
  }

  h2 {
    font-size: 6rem;
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 2rem;
  }

  button {
    width: 100%;
    outline: none;
    border: none;
    border-radius: 1rem;
    background-color: #fff;
    font: inherit;
    color: hsl(229, 25%, 31%);
    padding: 1rem;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    cursor: pointer;
  }
`;

export default StyledResult;
