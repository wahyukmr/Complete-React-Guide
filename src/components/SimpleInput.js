import useInput from "../hooks/use-input";

const SimpleInput = (props) => {
    const {
        enteredValue: nameValue,
        inputIsValid: nameIsValid,
        hasError: nameHasError,
        InputChangeHandler: nameChangeHandler,
        inputBlurHandler: nameBlurHandler,
        invalidClasses: nameInvalidClasses,
        errorHandler: nameErrorHandler,
        resetValue: nameResetValue,
    } = useInput((value) => value.trim() !== "" && value.trim().length <= 10);

    const {
        enteredValue: emailValue,
        inputIsValid: emailIsValid,
        hasError: emailHasError,
        InputChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        invalidClasses: emailInvalidClasses,
        errorHandler: emailErrorHandler,
        resetValue: emailResetValue,
    } = useInput((value) => value.includes("@"));

    let formIsValid = false;
    if (nameIsValid && emailIsValid) {
        formIsValid = true;
    }

    const submitHandler = (event) => {
        event.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(nameValue, emailValue);

        nameResetValue();
        emailResetValue();
    };

    const errorName = () => {
        if (nameValue.trim().length === 0) {
            return nameErrorHandler("* Can not be empty.");
        }
        if (nameValue.trim().length > 10) {
            return nameErrorHandler("* Must be 10 characters or less.");
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className={nameInvalidClasses(nameHasError)}>
                <label htmlFor="name">Your Name</label>
                <input
                    type="text"
                    id="name"
                    value={nameValue}
                    onChange={nameChangeHandler}
                    onBlur={nameBlurHandler}
                />
            </div>
            {nameHasError && errorName()}

            <div className={emailInvalidClasses(emailHasError)}>
                <label htmlFor="email">Your Email</label>
                <input
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                />
            </div>
            {emailHasError && emailErrorHandler("* Invalid email addresss")}
            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default SimpleInput;
