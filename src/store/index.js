// configureStore: seperti createStore, tetapi itu membuat penggabungan multiple reducer menjadi satu reducer. Meneruskan sebuah objek bukan fungsi reducer
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.counter += action.amount;
        },
        decrement(state) {
            state.counter--;
        },
        toggle(state) {
            state.showCounter = !state.showCounter;
        },
    },
});

const stateStorage = configureStore({
    reducer: counterSlice.reducer,
});

export default stateStorage;
