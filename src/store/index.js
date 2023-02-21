import { legacy_createStore as createStore } from "redux";

const initialState = { counter: 0, showCounter: true };

// function Reducer
const counterReducer = (state = initialState, action) => {
    if (action.type === "increment") {
        // jangan pernah melakukan perubahan untuk menyatakan State yang ada, sebagai gantinya selalu menggantinya dengan mengembalikan State Object yang baru. Jadi harus selalu membuat Object atau Array baru kapan pun kita perlu memperbarui data.
        // state.counter++;
        // return state
        
        // Dengan memperbarui State seperti ini, kita membuat objek baru dimana tidak mengubah apapun terhadap State yang lama (Menimpa State yang lama dengan State yang baru).
        return {
            // Objek yang dikembalikan di reducer tidak akan digabungkan dengan State yang ada, mereka akan menimpa State yang ada. Jadi kita harus selalu menetapkan semua State yang dimiliki saat memperbarui State karena akan menimpa yang lama.
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
