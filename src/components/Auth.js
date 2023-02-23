import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Auth.module.css";

const Auth = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const formLogin = useSelector((state) => state.auth.formLogin);

    const formSubmitHandler = (event) => {
        event.preventDefault();

        dispatch(authActions.authenticated());
        dispatch(authActions.hideForm());
    };

    const buttonName = () => {
        if (!isAuth && formLogin) return "Login";
        if (isAuth && formLogin) return "Logout";
    };

    return (
        <>
            {formLogin && (
                <main className={classes.auth}>
                    <section>
                        <form onSubmit={formSubmitHandler}>
                            <div className={classes.control}>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" />
                            </div>
                            <div className={classes.control}>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" />
                            </div>
                            <button>{buttonName()}</button>
                        </form>
                    </section>
                </main>
            )}
        </>
    );
};

export default Auth;
