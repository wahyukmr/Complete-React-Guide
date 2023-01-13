import React, { useState, useRef } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./FormInput.module.css";
import ErrorModal from "../UI/ErrorModal";

function FormInput(props) {
    const [error, setError] = useState();

    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const userInputHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredAge = ageInputRef.current.value;

        if (enteredName === "" || enteredAge === "") {
            setError({
                title: "Invalid Input",
                message: "Name and age cannot be empty",
            });
            return;
        }

        if (+enteredAge < 1) {
            setError({
                title: "Invalid Input",
                message: "Age must be greater than 0",
            });
            return;
        }

        const userData = {
            userName: enteredName,
            userAge: enteredAge,
            id: Math.random().toString(),
        };
        props.onSaveUserData(userData);

        // hanya bisa untuk mengubah apa yang dimasukkan pengguna, tidak untuk memanipulasi DOM. Opsi lain bisa menggunkaan useState
        nameInputRef.current.value = "";
        ageInputRef.current.value = "";
    };

    const errorHandler = () => {
        setError(false);
    };

    return (
        <>
            {error && (
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onHandlerError={errorHandler}
                />
            )}
            <Card className={styles.input}>
                <form onSubmit={userInputHandler}>
                    <label htmlFor="userName">Username</label>
                    <input id="name" type="text" ref={nameInputRef} />

                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef} />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </>
    );
}

export default FormInput;
