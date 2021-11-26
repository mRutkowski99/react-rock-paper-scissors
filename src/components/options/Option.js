import StyledOption from "./Option.styled";

const Option = (props) => {
  return (
    <StyledOption attributes={props.attributes}>
      <div className="outer">
        <div className="inner">
          <img src={props.src} alt="Option to choose icon" className="icon" />
        </div>
      </div>
    </StyledOption>
  );
};

export default Option;
