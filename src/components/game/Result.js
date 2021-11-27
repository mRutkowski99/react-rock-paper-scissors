import StyledResult from "./Result.styled";
import { useSelector } from "react-redux";

const Result = () => {
  const winner = useSelector((state) => state.game.winner);
  const text = winner === "player" ? "You win" : "The lose";

  return (
    <StyledResult>
      <h2>{text}</h2>
      <button>Play Again</button>
    </StyledResult>
  );
};

export default Result;
