import React from "react";
import ReactDOM from "react-dom";

import styles from "./ErrorModal.module.css";
import Button from "./Button";
import Card from "./Card";

function Backdrop(props) {
    return (
        <div
            className={styles.backdrop}
            onClick={props.onHandlerErrorFromInput}
        />
    );
}

function ModalOverlay(props) {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.titleFromInput}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.messageFromInput}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onHandlerErrorFromInput}>Close</Button>
            </footer>
        </Card>
    );
}

function ErrorModal(props) {
    return (
        <>
            {ReactDOM.createPortal(
                <Backdrop onHandlerErrorFromInput={props.onHandlerError} />,
                document.getElementById("backdrop-root")
            )}

            {ReactDOM.createPortal(
                <ModalOverlay
                    titleFromInput={props.title}
                    messageFromInput={props.message}
                    onHandlerErrorFromInput={props.onHandlerError}
                />,
                document.getElementById("overlay-root")
            )}
        </>
    );
}

export default ErrorModal;
