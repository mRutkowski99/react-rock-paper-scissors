import StyledButton from "./Button.styled";
import { useDispatch } from "react-redux";
import { uiActions } from "../../store/ui-slice";

const Button = (props) => {
  const dispatch = useDispatch();

  const showModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <StyledButton onClick={showModalHandler}>{props.children}</StyledButton>
  );
};

export default Button;
