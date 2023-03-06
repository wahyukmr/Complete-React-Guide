import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

export default function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) return;

        setTimeout(() => {
            submit(null, { action: "/logout", method: "POST" });
        }, 1 * 60 * 60 * 1000);
    }, [token, submit]);

    return (
        <>
            <MainNavigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}
