import Scoreboard from "./components/scoreboard/Scoreboard";
import OptionsField from "./components/options/OptionsField";
import Game from "./components/game/Game";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import { useDispatch, useSelector } from "react-redux";
import { gameActions } from "./store/game-slice";
import { useEffect } from "react";

function App() {
  const showModal = useSelector((state) => state.ui.showModal);
  const gameStarted = useSelector((state) => state.game.gameStarted);
  const points = useSelector((state) => state.game.points);
  const dispatch = useDispatch();

  useEffect(() => {
    const initialPoints = localStorage.getItem("points");
    dispatch(gameActions.setInitialPoints(initialPoints));
  }, []);

  localStorage.setItem("points", points);

  return (
    <>
      {showModal && <Modal />}
      <Scoreboard />
      {gameStarted && <Game />}
      {!gameStarted && <OptionsField />}
      <Button outline={true} className="btn--rules">
        Rules
      </Button>
    </>
  );
}

export default App;
