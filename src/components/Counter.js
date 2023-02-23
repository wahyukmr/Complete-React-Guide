import { useDispatch, useSelector } from "react-redux";
import { counterActions } from "../store/counter-slice";
import classes from "./Counter.module.css";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counters.counter);
    const showCounter = useSelector((state) => state.counters.showCounter);

    const incrementHandler = () => {
        // Nilai apapun yang diberikan disini sebagai argument untuk method actions, akan disimpan dalam bidang tambahan bernama "payload"
        dispatch(counterActions.increment(1)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 1}
    };

    const increaseHandler = () => {
        dispatch(counterActions.increment(5)); // {type: SOME_UNIQUE_IDENTIFIER, payload: 5}
    };

    const decrementHandler = () => {
        dispatch(counterActions.decrement());
    };

    const toggleCounterHandler = () => {
        dispatch(counterActions.toggle());
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
