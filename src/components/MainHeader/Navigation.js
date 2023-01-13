import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./Navigation.module.css";

function Navigation() {
    const context = useContext(AuthContext);

    return (
        <nav className={classes.nav}>
            <ul>
                {context.isLogin && (
                    <li>
                        <a href="/">Users</a>
                    </li>
                )}
                {context.isLogin && (
                    <li>
                        <a href="/">Admin</a>
                    </li>
                )}
                {context.isLogin && (
                    <li>
                        <button onClick={context.onLogout}>Logout</button>
                    </li>
                )}
            </ul>
        </nav>
    );
}

export default Navigation;
