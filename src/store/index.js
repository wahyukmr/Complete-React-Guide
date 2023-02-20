import { legacy_createStore as createStore } from "redux";

// function Reducer
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + 1,
        };
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
        };
    }

    return state;
};

// New store
const stateStorage = createStore(counterReducer);

export default stateStorage;
