import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const fetchCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const response = await fetch(
                "https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json"
            );
            if (!response.ok) {
                throw new Error("couldn't fetch cart data");
            }
            const cartDataResult = response.json();
            return cartDataResult;
        };

        try {
            const cartData = await fetchData();
            dispatch(
                cartActions.replaceCart({
                    items: cartData?.items || [],
                    totalQuantity: cartData?.totalQuantity || 0,
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
                {
                    method: "PUT",
                    body: JSON.stringify({
                        items: cart.items,
                        totalQuantity: cart.totalQuantity,
                    }),
                }
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
