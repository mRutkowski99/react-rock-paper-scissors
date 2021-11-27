import styled, { keyframes, css } from "styled-components";
import StyledOption from "../options/Option.styled";

const rotateBack = keyframes`
  0% {
    transform: rotateY(0);
  }

  100% {
    transform: rotateY(-180deg);
  }
`;

const rotateBackAnimation = css`
  animation: ${rotateBack} 1000ms ease-out 1000ms forwards;
`;

const rotateFront = keyframes`
  0% {
    transform: rotateY(180deg);
  }

  100% {
    transform: rotateY(0);
  }
`;

const rotateFrontAnimation = css`
  animation: ${rotateFront} 1000ms ease-out 1000ms forwards;
`;

const StyledGameOption = styled(StyledOption)`
  cursor: default;
  position: relative;
  top: unset;
  left: unset;
  transform: none;
  width: clamp(12rem, 20vw, 20rem);
  aspect-ratio: 1;
  perspective: 150rem;

  .front {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    backface-visibility: hidden;
    transform: ${(props) =>
      props.animateRotation ? "rotateY(180deg)" : "none"};
    ${(props) => props.animateRotation && rotateFrontAnimation}
  }

  .back {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    aspect-ratio: 1;
    backface-visibility: hidden;
    background-color: hsl(214, 47%, 23%);
    border-radius: 100%;
    transform: ${(props) =>
      props.animateRotation ? "rotateY(0)" : "rotateY(180deg)"};
    ${(props) => props.animateRotation && rotateBackAnimation}
  }
`;

export default StyledGameOption;
