import { Outlet } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

// Outlet komponen adalah komponen yang menandai tempat dimana elemen child root harus dirender.
function RootLayout() {
    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootLayout;
