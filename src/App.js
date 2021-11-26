import Scoreboard from "./components/scoreboard/Scoreboard";
import OptionsField from "./components/options/OptionsField";
import Button from "./components/UI/Button";

function App() {
  return (
    <>
      <Scoreboard />
      <OptionsField />
      <Button outline={true} className="btn--rules">
        Rules
      </Button>
    </>
  );
}

export default App;
