import React, { useImperativeHandle, useRef } from "react";

import classes from "./Input.module.css";

// komponen fungsi kita sekarang adalah argumen pertama untuk forward ref yang mengembalikan React component yang mampu mengikat ref
const Input = React.forwardRef((props, ref) => {
    const inputRef = useRef();

    const focus = () => {
        inputRef.current.focus();
    };

    // parameters pertama adalah fungsi yang mengembalkan sebuah objek, dan objek itu akan berisi semua data yang dapat digunakan dari luar
    useImperativeHandle(ref, () => {
        return {
            activate: focus,
        };
    });

    return (
        <div
            className={`${classes.control} ${
                props.isValid === false ? classes.invalid : ""
            }`}
        >
            <label htmlFor={props.id}>{props.label}</label>
            <input
                ref={inputRef}
                type={props.type}
                id={props.id}
                value={props.value}
                onChange={props.onChange}
                onBlur={props.onBlur}
            />
        </div>
    );
});

export default Input;
