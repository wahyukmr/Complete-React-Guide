import { createSlice } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// createSlice menerima object sebagai argumennya, yang dilakukan createSlice adalah memprsiapkan potongan Global State. Jika memiliki bagian yang berbeda atau yang tidak terkait langsung dengan potongan State, kita dapat membuat potongan lain yang berbeda. Setiap irisan membutuhkan property nama sebagai pengenal dari bagian State tersebut dan property reducers yang bisa dibilang seperti map() dari semua reducer yang dibutuhkan potongan State itu sendiri.
createSlice({
    name: "counter",
    initialState,
    reducers: {
        // disetiap method ini secara otomatis menerima State terbaru dan mengijinkan untuk mengubah State tersebut tanpa harus menyalin dan membuat objek atau array baru karena dengan redux toolkit secara otomatis mengkloning State yang ada dan membuat objek atau array State baru
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

// function Reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        return {
            counter: state.counter + action.amount,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            showCounter: state.showCounter,
        };
    }
    if (action.type === "toggle") {
        return {
            counter: state.counter,
            showCounter: !state.showCounter,
        };
    }

    return state;
};

// New store
const stateStorage = createStore(counterReducer);

export default stateStorage;
