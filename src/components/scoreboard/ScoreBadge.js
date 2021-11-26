import StyledScoreBadge from "./ScoreBadge.styled";
import { useSelector } from "react-redux";

const ScoreBadge = () => {
  const points = useSelector((state) => state.game.points);

  return (
    <StyledScoreBadge>
      <span className="score-badge__score">Score</span>
      <span className="score-badge__points">{points}</span>
    </StyledScoreBadge>
  );
};

export default ScoreBadge;
