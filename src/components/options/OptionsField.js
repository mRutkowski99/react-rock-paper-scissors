import Option from "./Option";
import StyledOptionField from "./OptionsField.styled";
import optionsAttributes from "./optionsAttributes";

const { lizard, paper, rock, scissors, spock } = optionsAttributes;

const OptionsField = () => {
  return (
    <StyledOptionField>
      <Option styles={scissors} type="scissors" src={scissors.icon} />
      <Option styles={paper} type="paper" src={paper.icon} />
      <Option styles={rock} type="rock" src={rock.icon} />
      <Option styles={lizard} type="lizard" src={lizard.icon} />
      <Option styles={spock} type="spock" src={spock.icon} />
    </StyledOptionField>
  );
};

export default OptionsField;
