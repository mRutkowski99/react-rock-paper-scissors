import Scoreboard from "./components/scoreboard/Scoreboard";
import OptionsField from "./components/options/OptionsField";
import Game from "./components/game/Game";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector((state) => state.ui.showModal);
  // const gameStarted = useSelector((state) => state.game.gameStarted);
  const gameStarted = true;

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
