import StyledOption from "./Option.styled";
import { useDispatch } from "react-redux";
import { gameActions } from "../../store/game-slice";

const Option = (props) => {
  const dispatch = useDispatch();

  const playerChoiceHandler = () => {
    dispatch(gameActions.startGame(props.type));
  };

  return (
    <StyledOption styles={props.styles} onClick={playerChoiceHandler}>
      <div className="outer">
        <div className="inner">
          <img src={props.src} alt="Option to choose icon" className="icon" />
        </div>
      </div>
    </StyledOption>
  );
};

export default Option;
