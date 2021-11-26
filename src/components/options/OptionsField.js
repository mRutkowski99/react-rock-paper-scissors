import Option from "./Option";
import StyledOptionField from "./OptionsField.styled";
import optionsAttributes from "./optionsAttributes";

const { lizard, paper, rock, scissors, spock } = optionsAttributes;

const OptionsField = () => {
  return (
    <StyledOptionField>
      <Option attributes={scissors} src={scissors.icon} />
      <Option attributes={paper} src={paper.icon} />
      <Option attributes={rock} src={rock.icon} />
      <Option attributes={lizard} src={lizard.icon} />
      <Option attributes={spock} src={spock.icon} />
    </StyledOptionField>
  );
};

export default OptionsField;
