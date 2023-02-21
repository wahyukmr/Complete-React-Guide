import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counter);
    const showCounter = useSelector((state) => state.showCounter);

    const incrementHandler = () => {
        dispatch({ type: "increment", amount: 1 });
    };

    const increaseHandler = () => {
        dispatch({ type: "increment", amount: 5 });
    };

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };

    const toggleCounterHandler = () => {
        dispatch({ type: "toggle" });
    };

    // Counter hanya digunakan untuk komponen ini saja (local State), namun kita asumsikan Counter sebagai global State yang dapat digunakan oleh banyak komponent
    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            {showCounter && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={increaseHandler}>Increase by 5</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Toggle Counter</button>
        </main>
    );
};

export default Counter;
