// USE CSS MODULES
import React, { useState } from "react";

import Button from "../../UIButton/Button";
import styles from "./CourseInput.module.css";

function CourseInput(props) {
    const [enteredValue, setEnteredValue] = useState("");
    const [isValid, setIsValid] = useState(true);

    const goalInputChangeHandler = (event) => {
        if (event.target.value.trim().length > 0) {
            setIsValid(true);
        }
        setEnteredValue(event.target.value);
    };

    const formSubmitHandler = (event) => {
        event.preventDefault();

        if (enteredValue.trim().length === 0) {
            setIsValid(false);
            return;
        }

        props.onAddGoal(enteredValue);
    };

    return (
        <form onSubmit={formSubmitHandler}>
            {/* menggunakan syntax yang berbeda intuk mengakses property yang memiliki tanda hubung, kita perlu menggunakan tanda kurung siku */}
            <div
                className={`${styles["form__control"]} ${
                    !isValid && styles.invalid
                }`}
            >
                <label>Course Goal</label>
                <input type="text" onChange={goalInputChangeHandler} />
            </div>
            <Button type="submit">Add Goal</Button>
        </form>
    );
}

export default CourseInput;

// USE STYLED-COMPONENTS
// import React, { useState } from "react";
// import styled from "styled-components";

// import Button from "../../UiButton/Button";
// import "./CourseInput.css";

// const FormControl = styled.div`
//     margin: 0.5rem 0;

//     & label {
//         font-weight: bold;
//         display: block;
//         margin-bottom: 0.5rem;
//         color: ${(props) => (props.isValid ? "red" : "black")};
//     }

//     & input {
//         display: block;
//         width: 100%;
//         border: 1px solid ${(props) => (props.isValid ? "red" : "#ccc")};
//         background: ${(props) => (props.isValid ? "ffd7d7" : "transparent")};
//         font: inherit;
//         line-height: 1.5rem;
//         padding: 0 0.25rem;
//     }

//     & input:focus {
//         outline: none;
//         background: #fad0ec;
//         border-color: #8b005d;
//     }
// `;

// function CourseInput(props) {
//     const [enteredValue, setEnteredValue] = useState("");
//     const [isValid, setIsValid] = useState(true);

//     const goalInputChangeHandler = (event) => {
//         if (event.target.value.trim().length > 0) {
//             setIsValid(true);
//         }
//         setEnteredValue(event.target.value);
//     };

//     const formSubmitHandler = (event) => {
//         event.preventDefault();

//         if (enteredValue.trim().length === 0) {
//             setIsValid(false);
//             return;
//         }

//         props.onAddGoal(enteredValue);
//     };

//     return (
//         <form onSubmit={formSubmitHandler}>
//             {/* Menambahkan Style secara dinamis untuk mengubah bagian style berdasarkan beberapa props yang diteruskan ke styled components */}
//             <FormControl isValid={!isValid}>
//                 <label>Course Goal</label>
//                 <input type="text" onChange={goalInputChangeHandler} />
//             </FormControl>
//             <Button type="submit">Add Goal</Button>
//         </form>
//     );
// }

// export default CourseInput;
