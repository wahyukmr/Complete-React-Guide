// configureStore: seperti createStore, tetapi itu membuat penggabungan multiple reducer menjadi satu reducer. Meneruskan sebuah objek bukan fungsi reducer
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment(state, action) {
            state.counter += action.payload;
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

// Method pada objek actions disini, yang akan kita panggil akan mmebuat objek actions untuk kita dimana objek ini sudah mwmiliki property "type" dengan pengenal unik per actions secara otomatis dibuat dibelakang layar.
// Sehingga dengan adanya ini kita tidak perlu khawatir tentang membuat objek actions sendiri dan membuat pengenal unik serta menghindari kesalahan ketik (typo)
export const counterActions = counterSlice.actions;

export default stateStorage;
