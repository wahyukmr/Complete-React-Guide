import { createSlice } from "@reduxjs/toolkit";
import { uiActions } from "./ui-slice";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        replaceCart(state, action) {
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items;
        },
        addItemToCart(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(
                (item) => item.itemId === newItem.id
            );
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    itemId: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.title,
                });
            } else {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload;
            const existingItem = state.items.find((item) => item.itemId === id);
            state.totalQuantity--;
            if (existingItem.quantity === 1) {
                state.items = state.items.filter((item) => item.itemId !== id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
    },
});

// Membuat actions creator function (membuat fungsi yang mengembalikan fungsi lain)
export const sendCartData = (cart) => {
    return async (dispatch) => {
        dispatch(
            uiActions.showNotifications({
                status: "pending",
                title: "Sending...",
                message: "Sending cart data",
            })
        );

        const sendRequest = async () => {
            const response = await fetch(
                "https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending data to cart failed");
            }
        };

        try {
            await sendRequest();

            dispatch(
                uiActions.showNotifications({
                    status: "success",
                    title: "Successful!",
                    message: "Send cart data successfully",
                })
            );
        } catch (error) {
            dispatch(
                uiActions.showNotifications({
                    status: "error",
                    title: "Failed!",
                    message: "Send cart data failed",
                })
            );
        }
    };
};

export const cartActions = cartSlice.actions;

export default cartSlice.reducer;
