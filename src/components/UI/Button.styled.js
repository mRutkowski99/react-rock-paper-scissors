import styled from "styled-components";

const StyledButton = styled.div`
  outline: none;
  border: solid 1px #fff;
  border-radius: 0.5rem;
  color: #fff;
  background-color: transparent;
  text-transform: uppercase;
  letter-spacing: 1px;
  text-align: center;
  padding: 1rem;
  width: 12rem;
  cursor: pointer;

  @media screen and (min-width: 480px) {
    & {
      align-self: flex-end;
    }
  }
`;

export default StyledButton;
