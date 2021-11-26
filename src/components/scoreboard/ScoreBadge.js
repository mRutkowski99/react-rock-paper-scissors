import StyledScoreBadge from "./ScoreBadge.styled";

const ScoreBadge = () => {
  return (
    <StyledScoreBadge>
      <span className="score-badge__score">Score</span>
      <span className="score-badge__points">10</span>
    </StyledScoreBadge>
  );
};

export default ScoreBadge;
