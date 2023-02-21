import { useDispatch, useSelector } from "react-redux";

import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counters = useSelector((state) => state.counter);

    const incrementHandler = () => {
        dispatch({ type: "increment", amount: 1 });
    };
    
    const increaseHandler= () => {
        dispatch({ type: "increment", amount: 5 });
    }

    const decrementHandler = () => {
        dispatch({ type: "decrement" });
    };

    const toggleCounterHandler = () => {};

    return (
        <main className={classes.counter}>
            <h1>Redux Counter</h1>
            <div className={classes.value}>{counters}</div>
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