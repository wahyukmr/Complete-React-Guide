import { redirect } from "react-router-dom";

// Mengeksport action function untuk menghapus local storage yang akan menghapus token.
export function action() {
    localStorage.removeItem("token");
    localStorage.removeItem("expiration");
    return redirect("/");
}
