import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
    const dispatch = useDispatch();
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const formLogin = useSelector((state) => state.auth.formLogin);

    const showFormHandler = () => {
        dispatch(authActions.showForm());
    };

    const loginSuccesful = isAuth && !formLogin;

    const buttonName = () => {
        if (!isAuth && !formLogin) return "Login";
        if (isAuth && !formLogin) return "Logout";
    };

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                <ul>
                    {loginSuccesful && (
                        <>
                            <li>
                                <a href="/">My Products</a>
                            </li>
                            <li>
                                <a href="/">My Sales</a>
                            </li>
                        </>
                    )}
                    {!formLogin && (
                        <li>
                            <button onClick={showFormHandler}>
                                {buttonName()}
                            </button>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
