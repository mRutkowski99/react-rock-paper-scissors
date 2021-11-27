import styled, { keyframes } from "styled-components";

const slideDown = keyframes`
  0% {
    opacity: 0;
    transform: translate(-50%, -50%) translateY(-4rem);
  }

  100% {
    opcaity: 1;
    transform: translate(-50%, -50%) translateY(0);
  }
`;

export const StyledBackdrop = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const StyledModalOverlay = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 30;
  width: 100%;
  height: 100%;
  padding: 2.5rem;
  border-radius: 0;
  background-color: #fff;
  max-width: 50rem;
  animation: ${slideDown} ease-out 500ms;

  @media screen and (min-width: 500px) {
    & {
      height: unset;
      border-radius: 1rem;
    }
  }

  .modal__header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    margin-bottom: 3rem;
  }

  .modal__close {
    cursor: pointer;
  }

  .modal__title {
    font-size: 3rem;
    text-transform: uppercase;
    color: hsl(229, 25%, 31%);
  }

  .modal__rules {
    display: block;
    width: 100%;
    max-width: 35rem;
    margin: 0 auto;
  }
`;
