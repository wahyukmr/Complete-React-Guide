import useInput from "../hooks/use-input";

const validateName = (value) =>
    value.trim() !== "" && value.trim().length <= 10;
const validateEmail = (value) => value.includes("@");

const BasicForm = (props) => {
    const {
        enteredValue: firstNameValue,
        inputIsValid: firstNameValid,
        hasError: firstNameHasError,
        InputChangeHandler: firstNameInputChangeHandler,
        inputBlurHandler: firstNameInputBlurHandler,
        invalidClasses: firstNameInvalidClasses,
        errorHandler: firstNameErrorHandler,
        resetValue: firstNameResetValue,
    } = useInput(validateName);

    const {
        enteredValue: lastNameValue,
        inputIsValid: lastNameValid,
        hasError: lastNameHasError,
        InputChangeHandler: lastNameInputChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        invalidClasses: lastNameInvalidClasses,
        errorHandler: lastNameErrorHandler,
        resetValue: lastNameResetValue,
    } = useInput(validateName);

    const {
        enteredValue: emailValue,
        inputIsValid: emailInputValid,
        hasError: emailHasError,
        InputChangeHandler: emailInputChangeHandler,
        inputBlurHandler: emailInputBlurHandler,
        invalidClasses: emailInvalidClasses,
        errorHandler: emailErrorHandler,
        resetValue: emailResetValue,
    } = useInput(validateEmail);

    let formIsValid = false;
    if (firstNameValid && lastNameValid && emailInputValid) {
        formIsValid = true;
    }

    const submitHandler = (e) => {
        e.preventDefault();

        if (!formIsValid) {
            return;
        }

        console.log(firstNameValue, lastNameValue, emailValue);

        firstNameResetValue();
        lastNameResetValue();
        emailResetValue();
    };

    const errorName = (inputValue, errorHandler) => {
        if (inputValue.trim().length === 0) {
            return errorHandler("* Can not be empty.");
        }
        if (inputValue.trim().length > 10) {
            return errorHandler("* Must be 10 characters or less.");
        }
    };

    return (
        <form onSubmit={submitHandler}>
            <div className="control-group">
                <div className={firstNameInvalidClasses(firstNameHasError)}>
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        value={firstNameValue}
                        onChange={firstNameInputChangeHandler}
                        onBlur={firstNameInputBlurHandler}
                    />
                    {firstNameHasError &&
                        errorName(firstNameValue, firstNameErrorHandler)}
                </div>

                <div className={lastNameInvalidClasses(lastNameHasError)}>
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        value={lastNameValue}
                        onChange={lastNameInputChangeHandler}
                        onBlur={lastNameBlurHandler}
                    />
                    {lastNameHasError &&
                        errorName(lastNameValue, lastNameErrorHandler)}
                </div>
            </div>

            <div className={emailInvalidClasses(emailHasError)}>
                <label htmlFor="email">E-Mail Address</label>
                <input
                    type="email"
                    id="email"
                    value={emailValue}
                    onChange={emailInputChangeHandler}
                    onBlur={emailInputBlurHandler}
                />
            </div>
            {emailHasError && emailErrorHandler("* Invalid email addresss")}

            <div className="form-actions">
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
    );
};

export default BasicForm;
