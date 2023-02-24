import { useSelector } from "react-redux";
import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";

const Cart = (props) => {
    const CartItems = useSelector((state) => state.cart.items);

    return (
        <Card className={classes.cart}>
            <h2>Your Shopping Cart</h2>
            <ul>
                {CartItems.map((item) => (
                    <CartItem
                        key={item.itemId}
                        item={{
                            id: item.itemId,
                            title: item.name,
                            quantity: item.quantity,
                            total: item.totalPrice,
                            price: item.price,
                        }}
                    />
                ))}
            </ul>
        </Card>
    );
};

export default Cart;
