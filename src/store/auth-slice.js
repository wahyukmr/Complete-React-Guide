import { createSlice } from "@reduxjs/toolkit";

const initialAuthState = { isAuthenticated: false, formLogin: false };
const authSlice = createSlice({
    name: "authentication",
    initialState: initialAuthState,
    reducers: {
        authenticated(state) {
            state.isAuthenticated = !state.isAuthenticated;
        },
        showForm(state) {
            state.formLogin = true;
        },
        hideForm(state) {
            state.formLogin = false;
        },
    },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;
