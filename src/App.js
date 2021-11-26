import Scoreboard from "./components/scoreboard/Scoreboard";
import OptionsField from "./components/options/OptionsField";
import Button from "./components/UI/Button";
import Modal from "./components/UI/Modal";
import { useSelector } from "react-redux";

function App() {
  const showModal = useSelector((state) => state.ui.showModal);

  return (
    <>
      {showModal && <Modal />}
      <Scoreboard />
      <OptionsField />
      <Button outline={true} className="btn--rules">
        Rules
      </Button>
    </>
  );
}

export default App;
