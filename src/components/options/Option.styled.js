import styled from "styled-components";

const StyledOption = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: ${(props) => props.styles?.top};
  left: ${(props) => props.styles?.left};
  transform: translate(-50%, -50%);
  width: clamp(8rem, 20vw, 13rem);

  .outer {
    width: 100%;
    aspect-ratio: 1;
    border-radius: 100%;
    background: ${(props) => props.styles?.gradient};
    filter: drop-shadow(0 6px 0 ${(props) => props.styles?.dropshadow});

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner {
    width: 70%;
    aspect-ratio: 1;
    border-radius: 100%;
    background-color: #fff;
    filter: drop-shadow(0 -5px 0 #ddd);
    transform: translateY(5px);

    display: flex;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 50%;
    display: block;
    align-self: center;
  }
`;

export default StyledOption;
