import React from "react";
import classes from "./Button.module.css";

const Button = (props) => {
    console.log("BUTTON RUNNING");
    return (
        <button
            type={props.type || "button"}
            className={`${classes.button} ${props.className}`}
            onClick={props.onClick}
            disabled={props.disabled}
        >
            {props.children}
        </button>
    );
};

// Pada kasus React.memo karena nilai props pada komponen DemoOutput berupa primitive types (Boolean) yang mana jika dijalankan kembali hanya akan mengembalikan nilai yang sama seperti sebelumnya, maka dari itu props yang diterima komponen DemoOutput tidak berubah nilainya dan itu yang membuat komponen tersebut tidak dievaluasi ulang

// Sedangkan pada komponen ini, nilai props nya berupa reference types (dapat berubah) maka ini lah yang mentrigger komponen ini untuk tetap dievaluasi ulang. Masalah ini bisa di atasi dengan menggunakan useCallback hook
export default React.memo(Button);
