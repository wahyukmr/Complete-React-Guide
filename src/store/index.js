import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

// Jika bekerja dengan banyak slice, kita masih hanya memiliki satu penyimpanan Redux, jadi masih hanya memanggil configureStore sekali dan di store (stateStorage) hanya memiliki satu reducer
const store = configureStore({
    reducer: { counters: counterSlice, auth: authSlice },
});

export default store;
