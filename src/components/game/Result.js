import StyledResult from "./Result.styled";
import { useSelector, useDispatch } from "react-redux";
import { gameActions } from "../../store/game-slice";
import { useEffect } from "react";

const Result = () => {
  const winner = useSelector((state) => state.game.winner);
  const dispatch = useDispatch();

  const text = winner === "player" ? "You win" : "You lose";

  const wait = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  useEffect(() => {
    if (winner !== "player") return;

    wait(2500).then(() => dispatch(gameActions.addPoint()));
  }, [winner, dispatch]);

  const resetGameHandler = () => {
    dispatch(gameActions.resetGame());
  };

  return (
    <StyledResult>
      <h2>{text}</h2>
      <button onClick={resetGameHandler}>Play Again</button>
    </StyledResult>
  );
};

export default Result;
