import styled from "styled-components";

const StyledScoreBadge = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  border-radius: 0.5rem;
  background-color: #fff;
  width: min(30%, 12rem);

  .score-badge__score {
    text-transform: uppercase;
    letter-spacing: 1px;
    color: hsl(229, 64%, 46%);
  }

  .score-badge__points {
    font-size: 4.5rem;
    color: hsl(229, 25%, 31%);
    font-weight: 700;
  }
`;

export default StyledScoreBadge;
