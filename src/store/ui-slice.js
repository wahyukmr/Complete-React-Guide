import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
    name: "ui",
    initialState: { cartIsVisible: false },
    reducers: {
        toggle(state) {
            // Saat menggunakan Redux Toolkit, kita tidak benar-benar memutasi State, meskipun sepertinya kita melakukannya. Tapi sebaliknya, Redux Toolkit menangkap kode ini dan menggunakan sejumlah immer library untuk memastikan bahwa ini benar-benar diterjemahkan ke beberapa kode yang tidak dapat diubah yang membuat objek state baru alih-alih memutasi yang sudah ada.
            state.cartIsVisible = !state.cartIsVisible;
        },
    },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
