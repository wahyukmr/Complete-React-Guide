import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const isEmpty = (value) => value.trim() === "";
const isFiveLength = (value) => value.trim().length === 5;

const Checkout = (props) => {
    const [inputValidity, setInputValidity] = useState({
        name: true,
        street: true,
        postalCode: true,
        city: true,
    });

    const nameInput = useRef();
    const streetInput = useRef();
    const postalCodeInput = useRef();
    const cityInput = useRef();

    const confirmHandler = (e) => {
        e.preventDefault();

        const enteredName = nameInput.current.value;
        const enteredStreet = streetInput.current.value;
        const enteredPostalCode = postalCodeInput.current.value;
        const enteredCity = cityInput.current.value;

        const nameIsValid = !isEmpty(enteredName);
        const streetNameIsValid = !isEmpty(enteredStreet);
        const postalCodeIsValid = isFiveLength(enteredPostalCode);
        const cityNameIsValid = !isEmpty(enteredCity);

        setInputValidity({
            name: nameIsValid,
            street: streetNameIsValid,
            postalCode: postalCodeIsValid,
            city: cityNameIsValid,
        });

        const formIsValid =
            nameIsValid &&
            streetNameIsValid &&
            postalCodeIsValid &&
            cityNameIsValid;

        if (!formIsValid) {
            return;
        }

        props.onConfirm({
            name: enteredName,
            street: enteredStreet,
            postalCode: enteredPostalCode,
            city: enteredCity,
        });
    };

    const ControlClasses = (input) => {
        return `${classes.control} ${
            inputValidity[input] ? "" : classes.invalid
        }`;
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={ControlClasses("name")}>
                <label htmlFor="name">Your Name:</label>
                <input id="name" type="text" ref={nameInput} />
                {!inputValidity.name && (
                    <p className={classes["text-error"]}>
                        Please enter a valid name
                    </p>
                )}
            </div>

            <div className={ControlClasses("street")}>
                <label htmlFor="street">Street:</label>
                <input id="street" type="text" ref={streetInput} />
                {!inputValidity.street && (
                    <p className={classes["text-error"]}>
                        Please enter a valid street
                    </p>
                )}
            </div>

            <div className={ControlClasses("postalCode")}>
                <label htmlFor="postal">Postal Code:</label>
                <input id="postal" type="text" ref={postalCodeInput} />
                {!inputValidity.postalCode && (
                    <p className={classes["text-error"]}>
                        * No more than five digits
                    </p>
                )}
            </div>

            <div className={ControlClasses("city")}>
                <label htmlFor="city">City:</label>
                <input id="city" type="text" ref={cityInput} />
                {!inputValidity.city && (
                    <p className={classes["text-error"]}>
                        Please enter a valid city
                    </p>
                )}
            </div>

            <div className={classes.actions}>
                <button type="button" onClick={props.onCancel}>
                    Cancel
                </button>
                <button className={classes.submit}>Confirm</button>
            </div>
        </form>
    );
};
export default Checkout;
