// ******************************************************************************************************
// Menggunakan useEffect
// ******************************************************************************************************
// import React, { useState, useEffect } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";

// function Login(props) {
//     const [enteredEmail, setEnteredEmail] = useState("");
//     const [emailIsValid, setEmailIsValid] = useState();
//     const [enteredPassword, setEnteredPassword] = useState("");
//     const [passwordIsValid, setPasswordIsValid] = useState();
//     const [formIsValid, setFormIsValid] = useState(false);

//     // ketika useEffect hanya menggunakan satu argumen, ini adalah cara yang valid untuk menggunakannya, meskipun jarang digunakan, ini akan membuat fungsi berjalan saat komponen dipasang / dirender untuk pertama kalinya, tetapi juga untuk setiap pembaruan State / siklus render komponen (akan berjalan setelahnya)

//     // Jika ditambahkan dengan dependency array kosong, akan membuat fungsi hanya berjalan sekali saat pertama kali saat komponen dipasang dan dirender

//     // Atau jika menambahkan dependency seperti  enteredPassword, akan menjalankan fungsi setiap kali komponen dipasang dan dirender dan setiap kali state (dalam hal ini enteredPassword ) berubah

//     // Kita juga harus membersihkan fungsi, dengan mereturnnya. Clean up function ini berjalan sebelum fungsi ini berjalan secara keseluruhan. Clean up function akan dipicu sebelum fungsi Effect berjalan

//     // Jika memiliki array kosong (tidak ada dependency) hanya akan melihat Effect berjalan satu kali dan Clean up function akan berjalan ketika komponen dihapus dari DOM
//     useEffect(() => {
//         console.log("EFFECT");

//         // Clean up function / unmounting
//         return () => {
//             console.log("EFFECT CLEAN UP");
//         };
//     }, [enteredPassword]); // dependency

//     useEffect(() => {
//         // debounce
//         setTimeout(() => {
//             console.log("a");
//             setFormIsValid(
//                 enteredEmail.includes("@") && enteredPassword.trim().length > 6
//             );
//         }, 500);

//         return () => {
//             console.log("clean");
//         };
//     }, [enteredEmail, enteredPassword]);

//     const emailChangeHandler = (event) => {
//         setEnteredEmail(event.target.value);

//         setFormIsValid(
//             event.target.value.includes("@") &&
//                 enteredPassword.trim().length > 6
//         );
//     };

//     const passwordChangeHandler = (event) => {
//         setEnteredPassword(event.target.value);

//         setFormIsValid(
//             event.target.value.trim().length > 6 && enteredEmail.includes("@")
//         );
//     };

//     const validateEmailHandler = () => {
//         setEmailIsValid(enteredEmail.includes("@"));
//     };

//     const validatePasswordHandler = () => {
//         setPasswordIsValid(enteredPassword.trim().length > 6);
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         props.onLogin(enteredEmail, enteredPassword);
//     };

//     return (
//         <Card className={classes.login}>
//             <form onSubmit={submitHandler}>
//                 <div
//                     className={`${classes.control} ${
//                         emailIsValid === false ? classes.invalid : ""
//                     }`}
//                 >
//                     <label htmlFor="email">Email</label>
//                     <input
//                         type="email"
//                         id="email"
//                         value={enteredEmail}
//                         onChange={emailChangeHandler}
//                         onBlur={validateEmailHandler}
//                     />
//                 </div>
//                 <div
//                     className={`${classes.control} ${
//                         passwordIsValid === false ? classes.invalid : ""
//                     }`}
//                 >
//                     <label htmlFor="password">Password</label>
//                     <input
//                         type="password"
//                         id="password"
//                         value={enteredPassword}
//                         onChange={passwordChangeHandler}
//                         onBlur={validatePasswordHandler}
//                     />
//                 </div>
//                 <div className={classes.actions}>
//                     <Button
//                         type="submit"
//                         className={classes.btn}
//                         disabled={!formIsValid}
//                     >
//                         Login
//                     </Button>
//                 </div>
//             </form>
//         </Card>
//     );
// }

// export default Login;

// ******************************************************************************************************
// Menggunakan useState, useEffect, useReducer
// ******************************************************************************************************
// import React, { useState, useEffect, useReducer, useContext } from "react";

// import Card from "../UI/Card/Card";
// import classes from "./Login.module.css";
// import Button from "../UI/Button/Button";
// import AuthContext from "../../store/auth-context";
// import Input from "../UI/input/input";

// function emailReducer(state, action) {
//     if (action.type === "INPUT_EMAIL") {
//         return { value: action.input, isValid: action.input.includes("@") };
//     }
//     if (action.type === "USER_BLUR") {
//         return { value: state.value, isValid: state.value.includes("@") };
//     }
//     return { value: "", isValid: false };
// }

// function passwordReducer(state, action) {
//     if (action.type === "INPUT_PW") {
//         return { value: action.input, isValid: action.input.trim().length > 6 };
//     }
//     if (action.type === "USER_BLUR") {
//         return { value: state.value, isValid: state.value.trim().length > 6 };
//     }
//     return { value: "", isValid: false };
// }

// function Login() {
//     const [formIsValid, setFormIsValid] = useState(false);

//     const [emailState, dispatchEmail] = useReducer(emailReducer, {
//         value: "",
//         isValid: null,
//     });
//     const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
//         value: "",
//         isValid: null,
//     });

//     const context = useContext(AuthContext);

//     // Ini adalah konsep penting untuk lebih mengoptimalkan useEffect dan untuk menghindari eksekusi effect yang tidak perlu, tidak hanya saat menggunakannya dengan useReducer, tetapi juga saat melakukannya
//     const { isValid: emailIsValid } = emailState;
//     const { isValid: passwordIsValid } = passwordState;

//     useEffect(() => {
//         setTimeout(() => {
//             setFormIsValid(emailIsValid && passwordIsValid);
//         }, 500);
//     }, [emailIsValid, passwordIsValid]);

//     const emailChangeHandler = (event) => {
//         dispatchEmail({ type: "INPUT_EMAIL", input: event.target.value });

//         setFormIsValid(passwordState.isValid && emailState.isValid);
//     };

//     const passwordChangeHandler = (event) => {
//         dispatchPassword({ type: "INPUT_PW", input: event.target.value });

//         setFormIsValid(emailState.isValid && passwordState.isValid);
//     };

//     const validateEmailHandler = () => {
//         dispatchEmail({ type: "USER_BLUR" });
//     };

//     const validatePasswordHandler = () => {
//         dispatchPassword({ type: "USER_BLUR" });
//     };

//     const submitHandler = (event) => {
//         event.preventDefault();
//         context.onLogin(emailState.value, passwordState.value);
//     };

//     return (
//         <Card className={classes.login}>
//             <form onSubmit={submitHandler}>
//                 <Input
//                     id="email"
//                     label="Email"
//                     type="email"
//                     isValid={emailIsValid}
//                     value={emailState.value}
//                     onChange={emailChangeHandler}
//                     onBlur={validateEmailHandler}
//                 />

//                 <Input
//                     id="password"
//                     label="Password"
//                     type="password"
//                     isValid={passwordIsValid}
//                     value={passwordState.value}
//                     onChange={passwordChangeHandler}
//                     onBlur={validatePasswordHandler}
//                 />

//                 <div className={classes.actions}>
//                     <Button
//                         type="submit"
//                         className={classes.btn}
//                         disabled={!formIsValid}
//                     >
//                         Login
//                     </Button>
//                 </div>
//             </form>
//         </Card>
//     );
// }

// export default Login;

// ******************************************************************************************************
// Menyelami lebih dalam "Forward Refs"
// ******************************************************************************************************
import React, {
    useState,
    useEffect,
    useReducer,
    useContext,
    useRef,
} from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";
import Input from "../UI/Input/Input";

function emailReducer(state, action) {
    if (action.type === "INPUT_EMAIL") {
        return { value: action.input, isValid: action.input.includes("@") };
    }
    if (action.type === "USER_BLUR") {
        return { value: state.value, isValid: state.value.includes("@") };
    }
    return { value: "", isValid: false };
}

function passwordReducer(state, action) {
    if (action.type === "INPUT_PW") {
        return { value: action.input, isValid: action.input.trim().length > 6 };
    }
    if (action.type === "USER_BLUR") {
        return { value: state.value, isValid: state.value.trim().length > 6 };
    }
    return { value: "", isValid: false };
}

function Login() {
    const [formIsValid, setFormIsValid] = useState(false);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: "",
        isValid: null,
    });
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: "",
        isValid: null,
    });

    const context = useContext(AuthContext);

    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    // Ini adalah konsep penting untuk lebih mengoptimalkan useEffect dan untuk menghindari eksekusi effect yang tidak perlu, tidak hanya saat menggunakannya dengan useReducer, tetapi juga saat melakukannya
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;

    useEffect(() => {
        setTimeout(() => {
            setFormIsValid(emailIsValid && passwordIsValid);
        }, 500);
    }, [emailIsValid, passwordIsValid]);

    const emailChangeHandler = (event) => {
        dispatchEmail({ type: "INPUT_EMAIL", input: event.target.value });

        setFormIsValid(passwordState.isValid && emailState.isValid);
    };

    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "INPUT_PW", input: event.target.value });

        setFormIsValid(emailState.isValid && passwordState.isValid);
    };

    const validateEmailHandler = () => {
        dispatchEmail({ type: "USER_BLUR" });
    };

    const validatePasswordHandler = () => {
        dispatchPassword({ type: "USER_BLUR" });
    };

    const submitHandler = (event) => {
        event.preventDefault();
        if (formIsValid) {
            context.onLogin(emailState.value, passwordState.value);
        } else if (!emailIsValid) {
            emailInputRef.current.activate();
        } else {
            passwordInputRef.current.activate();
        }
    };

    return (
        <Card className={classes.login}>
            <form onSubmit={submitHandler}>
                <Input
                    ref={emailInputRef}
                    id="email"
                    label="Email"
                    type="email"
                    isValid={emailIsValid}
                    value={emailState.value}
                    onChange={emailChangeHandler}
                    onBlur={validateEmailHandler}
                />

                <Input
                    ref={passwordInputRef}
                    id="password"
                    label="Password"
                    type="password"
                    isValid={passwordIsValid}
                    value={passwordState.value}
                    onChange={passwordChangeHandler}
                    onBlur={validatePasswordHandler}
                />

                <div className={classes.actions}>
                    <Button type="submit" className={classes.btn}>
                        Login
                    </Button>
                </div>
            </form>
        </Card>
    );
}

export default Login;
