import { legacy_createStore as createStore } from "redux";

// function Reducer
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === "increment") {
        return {
            // Property yang diakses action di reducer (amount) harus memiliki nama yang sama persis dengan property yang ditambahkan ke action saat mengirimkannya
            counter: state.counter + action.amount,
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
