import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";
import { StyledBackdrop, StyledModalOverlay } from "./Modal.styled";
import iconClose from "../../assests/icon-close.svg";
import imageRules from "../../assests/image-rules-bonus.svg";
import { uiActions } from "../../store/ui-slice";

const Backdrop = (props) => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <StyledBackdrop onClick={closeModalHandler}>
      {props.children}
    </StyledBackdrop>
  );
};

const ModalOverlay = () => {
  const dispatch = useDispatch();

  const closeModalHandler = () => {
    dispatch(uiActions.toggleModal());
  };

  return (
    <StyledModalOverlay>
      <div className="modal__header">
        <h2 className="modal__title">Rules</h2>
        <img
          src={iconClose}
          alt="Close icon"
          className="modal__close"
          onClick={closeModalHandler}
        />
      </div>
      <img src={imageRules} alt="Rules image" className="modal__rules" />
    </StyledModalOverlay>
  );
};

const portalElement = document.getElementById("overlays");

const Modal = () => {
  return (
    <>
      {ReactDOM.createPortal(<Backdrop />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay />, portalElement)}
    </>
  );
};

export default Modal;
