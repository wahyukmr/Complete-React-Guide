import React from "react";

// Default (mengatur defaults didalam createContext() dianjurkan,tetapi tidak selalu diperlukan)
const CartContext = React.createContext({
    items: [],
    totalAmount: 0,
    addItem: (item) => {},
    removeItem: (id) => {},
});

export default CartContext;
