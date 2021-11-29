import StyledGameOption from "./GameOption.styled";

const GameOption = (props) => {
  return (
    <StyledGameOption
      styles={props.styles}
      animateRotation={props.animateRotation}
      isWinner={props.isWinner}
    >
      <div className="front">
        <div className="outer">
          <div className="inner">
            <img src={props.src} alt="Chosen option icon" className="icon" />
          </div>
        </div>
      </div>

      <div className="back" />
    </StyledGameOption>
  );
};

export default GameOption;
