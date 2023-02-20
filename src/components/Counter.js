// useSelector: custom hook yang memungkinkan kita untuk secara otomatis memilih bagian dari State yang dikelola oleh store (mengeluarkan data dari store).
// Ada juga connect: custom hook sebagai pengganti useSelector jika menggunakan komponen berbasis Class dan bukan komponen fungsi. Yang digunakan sebagai pembungkus disekitar komponen class untuk menghubungkan komponen class tersebut ke store
import { useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
    // Ketika menggunakan useSelector, React Redux akan secara otomatis mengatur subcribe ke Redux store untuk komponen ini dibelakang layar. Jadi komponen akan diperbarui (dievaluasi kembali) setiap kali data di Redux store berubah dan akan menerima hasil terbarunya secara otomatis, termasuk juga jika komponen ini dihapus dari DOM.
    useSelector(state => state.counter);
    
    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>-- COUNTER VALUE --</div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
