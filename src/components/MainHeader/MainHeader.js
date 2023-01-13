import React, { useContext } from "react";

import AuthContext from "../../store/auth-context";
import classes from "./MainHeader.module.css";
import Navigation from "./Navigation";

function MainHeader() {
    const context = useContext(AuthContext);

    return (
        <header className={classes["main-header"]}>
            <h1>A Typical Page</h1>
            <Navigation onLogout={context.onLogout} />
        </header>
    );
}

export default MainHeader;
