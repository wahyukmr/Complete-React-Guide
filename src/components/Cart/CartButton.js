import { useDispatch, useSelector } from "react-redux";
import { uiActions } from "../../store/ui-slice";
import classes from "./CartButton.module.css";

const CartButton = (props) => {
    const dispatch = useDispatch();
    const cartTotalQuantity = useSelector((state) => state.cart.totalQuantity);

    const myCartButtonHandler = () => {
        dispatch(uiActions.toggle());
    };

    return (
        <button className={classes.button} onClick={myCartButtonHandler}>
            <span>My Cart</span>
            <span className={classes.badge}>{cartTotalQuantity}</span>
        </button>
    );
};

export default CartButton;
