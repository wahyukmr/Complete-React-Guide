import { useContext, useState } from "react";
import UseHttp from "../../hooks/use-http";
import CartContext from "../../store/cart-context";
import Modal from "../UI/Modal/Modal";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

function Cart(props) {
    const [isCheckout, setIsCheckout] = useState(false);
    const [submittingData, setSubmittingData] = useState(false);
    const cartCtx = useContext(CartContext);
    const { fetchMeals, loading, error } = UseHttp();

    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const cartItemRemoveHandler = (id) => {
        cartCtx.removeItem(id);
    };
    const cartItemAddHandler = (item) => {
        cartCtx.addItem({ ...item, amount: 1 });
    };

    const orderHandler = () => {
        setIsCheckout(true);
    };
    const cancelHandler = () => {
        setIsCheckout(false);
    };

    const confirmHandler = async (userData) => {
        fetchMeals(
            "orders.json",
            {
                method: "POST",
                body: { user: userData, orderedItems: cartCtx.items },
            },
            null
        );

        setSubmittingData(true);
        cartCtx.clearCart();
    };

    const cartListContent = (
        <>
            <ul className={classes["cart-items"]}>
                {cartCtx.items.map((item) => (
                    <CartItem
                        key={item.id}
                        name={item.name}
                        amount={item.amount}
                        price={item.price}
                        onRemove={cartItemRemoveHandler.bind(null, item.id)}
                        onAdd={cartItemAddHandler.bind(null, item)}
                    />
                ))}
            </ul>
            <div className={classes.total}>
                <span>Total Amount:</span>
                <span>{totalAmount}</span>
            </div>
            <div className={classes.actions}>
                <button
                    className={classes["button--alt"]}
                    onClick={props.onHideCart}
                >
                    Close
                </button>
                {hasItems && (
                    <button className={classes.button} onClick={orderHandler}>
                        Order
                    </button>
                )}
            </div>
        </>
    );

    const actionsModalContent = (message) => {
        return (
            <>
                <h1 style={{ textAlign: "center" }}>{message}</h1>
                <div className={classes.actions}>
                    <button
                        className={classes["button--alt"]}
                        onClick={props.onHideCart}
                    >
                        Close
                    </button>
                </div>
            </>
        );
    };

    const cartModalContent = (
        <>
            {!isCheckout && cartListContent}
            {isCheckout && (
                <Checkout onConfirm={confirmHandler} onCancel={cancelHandler} />
            )}
        </>
    );

    return (
        <Modal onClickBackgroundCart={props.onHideCart}>
            {!submittingData && cartModalContent}
            {submittingData &&
                !error &&
                !loading &&
                actionsModalContent("Order Success!!")}
            {loading && (
                <h1 style={{ textAlign: "center" }}>Sending order data...</h1>
            )}
            {error && actionsModalContent("Something went wrong")}
        </Modal>
    );
}

export default Cart;
