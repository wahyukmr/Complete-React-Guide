import React, { useState, useEffect } from "react";

const AuthContext = React.createContext({
    isLogin: false,
    // Menambahkan objek default yang hanya berupa fungsi dummy karena kita tidak akan menggunakan ini
    onLogout: () => {},
    onLogin: (email, password) => {},
});

export function AuthContextProvider(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Using the useEffect() Hook
    // Sekarang fungsi anonim dijalankan oleh React dan dijalankan setelah seiap komponen mengevaluasi ulang, hanya jika dependensi argumen kedua berubah
    // Jika dependensi tidak pernah berubah karena secara khusus tidak memiliki dependensi, Maka fungsi anonim disini hanya akan berjalan sekali ketika aplikasi dimulai / dimuat ulang
    useEffect(() => {
        const storedUserLoggIninformation = localStorage.getItem("isLoggedIn");

        if (storedUserLoggIninformation === "LOGGED_IN") {
            setIsLoggedIn(true);
        }
    }, []);

    const logoutHandler = () => {
        localStorage.removeItem("isLoggedIn");
        setIsLoggedIn(false);
    };
    const loginHandler = () => {
        localStorage.setItem("isLoggedIn", "LOGGED_IN");
        setIsLoggedIn(true);
    };

    return (
        <AuthContext.Provider
            value={{
                isLogin: isLoggedIn,
                onLogout: logoutHandler,
                onLogin: loginHandler,
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
