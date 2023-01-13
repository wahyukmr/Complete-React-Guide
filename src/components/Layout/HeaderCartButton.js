import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";
import CartIcon from "../Cart/CartIcon";
import classes from "./HeaderCartButton.module.css";

function HeaderCartButton(props) {
    const [btnIsHighlighted, setBtnHighlighted] = useState(false);

    // Dengan menggunakan useContext disini, komponen HeaderCartButton akan dievaluasi ulang oleh React setiap kali Context berubah (berubah ketika kita memperbarui komponen CartProvider)
    const cartCtx = useContext(CartContext);

    const { items } = cartCtx;

    // Mendapatkan jumlah item dengan mengakses Cart.items kemudian dengan method redecu memungkinkan untuk mengubah data array menjadi satu nilai / satu angka dalam kasus ini
    const numberOfCartItems = items.reduce((curNumber, item) => {
        return curNumber + item.amount;
    }, 0);

    const btnClasses = `${classes.button} ${
        btnIsHighlighted ? classes.bump : ""
    }`;

    useEffect(() => {
        if (items.length === 0) {
            return;
        }
        setBtnHighlighted(true);

        // Akan membuat effects bisa diulang kembali jika terjadi peruahan pada cartButton
        const timer = setTimeout(() => {
            setBtnHighlighted(false);
        }, 300);

        // Menambahkan clean up function, dimana akan menghapus setTimeout jika komponen itu harus dihapus (tidak terjadi pada aplikasi ini karena cartButton selalu ada, tetapi paraktik terbaik untuk selalu membersihkan setTimeout atau side-effect lain yang mungkin sedang berlangsung karena kita memulainya dengan useEffect)
        return () => {
            clearTimeout(timer);
        };
    }, [items]);

    return (
        <button className={btnClasses} onClick={props.clickButton}>
            <span className={classes.icon}>
                <CartIcon />
            </span>
            <span>Your Cart</span>
            <span className={classes.badge}>{numberOfCartItems}</span>
        </button>
    );
}

export default HeaderCartButton;
