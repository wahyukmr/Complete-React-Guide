import { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
};

function cartReducer(state, action) {
    if (action.type === "ADD_ITEM") {
        // Mengkalkulasi jumlah total (jumlah saat ini + harga item * jumlah item)
        const updateTotalAmount =
            state.totalAmount + action.payload.price * action.payload.amount;

        // Akan mengembalikan index item dengan id yang sama dari item yang sudah ada dengan item yang ditambahkan
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload.id
        );

        // Mendapatkan item hasil dari existingCartItemIndex dan menyimpannya dalam variabel existingCartItem
        const existingCartItem = state.items[existingCartItemIndex];

        let updatedItems;

        if (existingCartItem) {
            const updatedItem = {
                ...existingCartItem,
                amount: existingCartItem.amount + action.payload.amount,
            };

            updatedItems = [...state.items];

            // Memilih item dengan index yang sama dan menimpanya dengan updatedItem
            updatedItems[existingCartItemIndex] = updatedItem;
        } else {
            // Method concat = menambahkan item baru ke array yang sudah ada kemudian mengembalikan update array baru
            updatedItems = state.items.concat(action.payload);
        }

        return {
            items: updatedItems,
            totalAmount: updateTotalAmount,
        };
    }

    if (action.type === "REMOVE_ITEM") {
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.payload
        );

        const existingItem = state.items[existingCartItemIndex];

        const updatedTotalAmount = state.totalAmount - existingItem.price;

        let updatedItems;

        if (existingItem.amount === 1) {
            updatedItems = state.items.filter(
                (item) => item.id !== action.payload
            );
        } else {
            const updatedItem = {
                ...existingItem,
                amount: existingItem.amount - 1,
            };
            updatedItems = [...state.items];
            updatedItems[existingCartItemIndex] = updatedItem;
        }

        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount,
        };
    }

    return defaultCartState;
}

function CartProvider(props) {
    const [cartState, dispatchCartAction] = useReducer(
        cartReducer,
        defaultCartState
    );

    const addItemToCartHandler = (item) => {
        dispatchCartAction({
            type: "ADD_ITEM",
            payload: item,
        });
    };

    const removeItemFromCartHandler = (id) => {
        dispatchCartAction({
            type: "REMOVE_ITEM",
            payload: id,
        });
    };

    const cartContext = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
    };

    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartProvider;
