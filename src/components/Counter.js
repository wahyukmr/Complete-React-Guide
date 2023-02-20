// import { useDispatch, useSelector } from "react-redux";

// import classes from "./Counter.module.css";

// const Counter = () => {
//     const dispatch = useDispatch();
//     const counters = useSelector((state) => state.counter);

//     const incrementHandler = () => {
//         dispatch({ type: "increment" });
//     };

//     const decrementHandler = () => {
//         dispatch({ type: "decrement" });
//     };

//     const toggleCounterHandler = () => {};

//     return (
//         <main className={classes.counter}>
//             <h1>Redux Counter</h1>
//             <div className={classes.value}>{counters}</div>
//             <div>
//                 <button onClick={incrementHandler}>Increment</button>
//                 <button onClick={decrementHandler}>Decrement</button>
//             </div>
//             <button onClick={toggleCounterHandler}>Toggle Counter</button>
//         </main>
//     );
// };

// export default Counter;

// Redux with Class-based component
import { Component } from "react";
import { connect } from "react-redux";
import classes from "./Counter.module.css";

class Counter extends Component {
    incrementHandler() {
        this.props.increment();
    }

    decrementHandler() {
        this.props.decrement();
    }

    toggleCounterHandler() {}

    render() {
        return (
            <main className={classes.counter}>
                <h1>Redux Counter</h1>
                <div className={classes.value}>{this.props.counters}</div>
                <div>
                    <button onClick={this.incrementHandler.bind(this)}>
                        Increment
                    </button>
                    <button onClick={this.decrementHandler.bind(this)}>
                        Decrement
                    </button>
                </div>
                <button onClick={this.toggleCounterHandler}>
                    Toggle Counter
                </button>
            </main>
        );
    }
}

//Memetakan state redux ke props, yang akan diterima di komponen ini (mirip seperti useSelector).
const mapStateToProps = (state) => {
    return {
        counters: state.counter,
    };
};

// Menyimpan fungsi dispatch di props, sehingga komponen ini memiliki props tertentu yang dapat di jalankan sebagai fungsi dan mengirimkan "action" ke redux store.
const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch({ type: "increment" }),
        decrement: () => dispatch({ type: "decrement" }),
    };
};

// connect disebut hight order component, kita menjalankan fungsi connect kemudian mengembalikan fungsi baru
export default connect(mapStateToProps, mapDispatchToProps)(Counter);
