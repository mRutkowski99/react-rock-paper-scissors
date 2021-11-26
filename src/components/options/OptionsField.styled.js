import styled from "styled-components";
import bg from "../../assests/bg-pentagon.svg";

const StyledOptionField = styled.div`
  width: 50vw;
  max-width: 30rem;
  aspect-ratio: 1;
  position: relative;
  background: url(${bg});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export default StyledOptionField;
