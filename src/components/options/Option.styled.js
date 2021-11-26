import styled from "styled-components";

const StyledOption = styled.div`
  cursor: pointer;
  position: absolute;
  z-index: 10;
  top: ${(props) => props.attributes.top};
  left: ${(props) => props.attributes.left};
  transform: translate(-50%, -50%);

  .outer {
    width: clamp(9rem, 20vw, 12rem);
    aspect-ratio: 1;
    border-radius: 100%;
    background: ${(props) => props.attributes.gradient};
    filter: drop-shadow(0 6px 0 ${(props) => props.attributes.dropshadow});

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .inner {
    width: calc(100% - 2rem);
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
