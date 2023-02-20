import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
    // useDispatch adalah sebuah fungsi yang tidak menerima parameter, sebuah fungsi yang dapat dipanggil yang akan mengirimkan "action" terhadap Redux store
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);

    const incrementHandler = () => {
        dispatch({ type: "increment" });
    };

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counter}</div>
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
