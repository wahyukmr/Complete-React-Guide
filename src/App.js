import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import Notification from "./components/UI/Notification";
import { uiActions } from "./store/ui-slice";

let isInitial = true;

function App() {
    const dispatch = useDispatch();
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.notification);

    // Menangani side-effect yang bergantung pada redux state. useEffect akan dijalankan setiap kali cart berubah
    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotifications({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data",
                })
            );

            // Jika mengirim PUT Request, kita menyimpan data di firebase. Perbedaan dengan POST request adalah data baru tidak akan ditambahkan ke daftar data melainkan menimpa data yang ada.
            const response = await fetch(
                "https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending data to cart failed");
            }

            dispatch(
                uiActions.showNotifications({
                    status: "success",
                    title: "Successful!",
                    message: "Send cart data successfully",
                })
            );
        };

        // Memblokir cart data agar tidak dikirim saat pertama kali useEffect dijalankan, saat aplikasi pertama kali dimulai.
        if (isInitial) {
            isInitial = false;
            return;
        }

        // Ini untuk menangani semua jenis kesalahan yang bisa terjadi.
        sendCartData().catch((error) => {
            dispatch(
                uiActions.showNotifications({
                    status: "error",
                    title: "Failed!",
                    message: "Send cart data failed",
                })
            );
        });
    }, [cart, dispatch]);

    return (
        <>
            {notification && (
                <Notification
                    status={notification.status}
                    title={notification.title}
                    message={notification.message}
                />
            )}
            <Layout>
                {showCart && <Cart />}
                <Products />
            </Layout>
        </>
    );
}

export default App;
