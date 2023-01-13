import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
    return (
        <div className={classes.backdrop} onClick={props.clickBackgroundCart} />
    );
};

const ModalOverlay = (props) => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const portalElement = document.getElementById("overlay");

function Modal(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop clickBackgroundCart={props.onClickBackgroundCart} />,
                portalElement
            )}
            {ReactDOM.createPortal(
                <ModalOverlay>{props.children}</ModalOverlay>,
                portalElement
            )}
        </>
    );
}

export default Modal;
