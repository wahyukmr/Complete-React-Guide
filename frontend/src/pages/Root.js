import { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";

export default function RootLayout() {
    const token = useLoaderData();
    const submit = useSubmit();

    useEffect(() => {
        if (!token) {
            return;
        }

        if (token === "EXPIRED") {
            submit(null, { action: "/logout", method: "post" });
            return;
        }

        const tokenDuration = getTokenDuration();
        console.log(tokenDuration);

        const timer = setTimeout(() => {
            submit(null, { action: "/logout", method: "post" });
        }, tokenDuration);
        return () => clearTimeout(timer);

        // Dengan ini masih akan memberi error misalnya jika sudah login selama 10 menit, lalu mereload ulang aplikasi akan memicu efect lagi. Ini akan membuat umur token bertambah 10 menit, tidak lagi hanya satu jam.
        // setTimeout(() => {
        //     submit(null, { action: "/logout", method: "POST" });
        // }, 1 * 60 * 60 * 1000);
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
