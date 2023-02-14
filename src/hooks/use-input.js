import { useState } from "react";

const useInput = (validationInput) => {
    const [enteredValue, setEnteredValue] = useState("");
    const [inputTouched, setInputTouched] = useState(false);

    const inputIsValid = validationInput(enteredValue);
    const hasError = !inputIsValid && inputTouched;

    const InputChangeHandler = (event) => {
        setEnteredValue(event.target.value);
    };

    const inputBlurHandler = () => {
        setInputTouched(true);
    };

    const invalidClasses = (inputIsInvalid) => {
        return inputIsInvalid ? "form-control invalid" : "form-control";
    };

    const errorHandler = (message) => {
        return <p className="error-text">{message}</p>;
    };

    const resetValue = () => {
        setEnteredValue("");
        setInputTouched(false);
    };

    return {
        enteredValue,
        inputIsValid,
        hasError,
        InputChangeHandler,
        inputBlurHandler,
        invalidClasses,
        errorHandler,
        resetValue,
    };
};

export default useInput;
