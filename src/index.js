// Mengimport fitur React
import React from "react";
import ReactDOM from "react-dom/client";

// Mengimport Component
import App from "./App";

// Bukan syntax JavaScript
import "./index.css";

// Memberitahu React dimana ada UI yang dibangun dan harus ditempatkan di halaman web yang dimuat
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
