import React, { useState } from "react";

import Card from "../UI/Card";
import Button from "../UI/Button";

import styles from "./FormInput.module.css";
import ErrorModal from "../UI/ErrorModal";

function FormInput(props) {
    const [userInput, setUserInput] = useState({
        name: "",
        age: "",
    });
    const [error, setError] = useState();

    const userInputChangeHandler = (event) => {
        setUserInput((prevState) => ({
            ...prevState,
            [event.target.id]: event.target.value,
        }));
    };

    const userInputHandler = (event) => {
        event.preventDefault();

        const { name, age } = userInput;

        if (name === "" || age === "") {
            setError({
                title: "Invalid Input",
                message: "Name and age cannot be empty",
            });
            return;
        }

        if (+age < 1) {
            setError({
                title: "Invalid Input",
                message: "Age must be greater than 0",
            });
            return;
        }

        const userData = {
            userName: name,
            userAge: age,
            id: Math.random().toString(),
        };
        props.onSaveUserData(userData);

        setUserInput({ name: "", age: "" });
    };

    const errorHandler = () => {
        setError(false);
    };

    return (
        <div>
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
                    <input
                        id="name"
                        type="text"
                        value={userInput.name}
                        onChange={userInputChangeHandler}
                    />

                    <label htmlFor="age">Age (Years)</label>
                    <input
                        id="age"
                        type="number"
                        value={userInput.age}
                        onChange={userInputChangeHandler}
                    />

                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
}

export default FormInput;
