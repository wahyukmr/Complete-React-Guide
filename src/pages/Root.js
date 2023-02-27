import { Outlet } from "react-router-dom";
import MainNavigation from "../MainNavigation";
import classes from "./Root.module.css";

// Outlet komponen adalah komponen yang menandai tempat dimana elemen child root harus dirender.
function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main className={classes.content}>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
