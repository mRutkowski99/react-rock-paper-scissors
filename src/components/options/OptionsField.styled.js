import styled from "styled-components";

const StyledOptionField = styled.div`
  width: 50vw;
  max-width: 30rem;
  aspect-ratio: 1;
  position: relative;

  & > div:first-child::before {
    content: "";
    position: absolute;
    z-index: -10;
    transform-origin: 0% 50%;
    background-color: rgba(0, 0, 0, 0.25);
    height: 15px;
    top: 50%;
    left: 50%;
    width: 15rem;
    transform: rotate(36deg);
    cursor: default;
  }

  & > div:nth-child(2)::before {
    content: "";
    position: absolute;
    transform-origin: 0% 50%;
    background-color: rgba(0, 0, 0, 0.25);
    height: 15px;
    top: 50%;
    left: 50%;
    width: 15rem;
    transform: rotate(106deg);
    cursor: default;
  }

  & > div:nth-child(3)::before {
    content: "";
    position: absolute;
    transform-origin: 0% 50%;
    background-color: rgba(0, 0, 0, 0.25);
    height: 15px;
    top: 50%;
    left: 50%;
    width: 15rem;
    transform: rotate(180deg);
    cursor: default;
  }

  & > div:nth-child(4)::before {
    content: "";
    position: absolute;
    transform-origin: 0% 50%;
    background-color: rgba(0, 0, 0, 0.25);
    height: 15px;
    top: 50%;
    left: 50%;
    width: 15rem;
    transform: rotate(-106deg);
    cursor: default;
  }

  // & > div:last-child::before {
  //   content: "";
  //   position: absolute;
  //   z-index: -10;
  //   transform-origin: 0% 50%;
  //   background-color: rgba(0, 0, 0, 0.25);
  //   height: 15px;
  //   top: 50%;
  //   left: 50%;
  //   width: 15rem;
  //   transform: rotate(-36deg);
  //   cursor: default;
  // }

  &::before {
    content: "";
    position: absolute;
    z-index: -10;
    transform-origin: 0% 50%;
    background-color: rgba(0, 0, 0, 0.25);
    height: 15px;
    top: 0%;
    left: 50%;
    width: 15rem;
    transform: rotate(-216deg);
    cursor: default;
  }
`;

export default StyledOptionField;
