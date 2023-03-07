import { json, redirect } from "react-router-dom";
import AuthForm from "../components/AuthForm";

export default function AuthenticationPage() {
    return <AuthForm />;
}

// Action functions yang akan dieksekusi setiap kali form authentication dikirim.
export async function action({ request }) {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    if (mode !== "login" && mode !== "signup") {
        throw json({ message: "Unsupported mode" }, { status: 422 });
    }

    const data = await request.formData();
    const authData = {
        email: data.get("email"),
        password: data.get("password"),
    };

    const response = await fetch("http://localhost:8080/" + mode, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(authData),
    });

    // Mengecek jika terjadi error di backend
    if (response.status === 401 || response.status === 422) {
        return response;
    }

    if (!response.ok) {
        throw json({ message: "Invalid response" }, { status: 500 });
    }

    // mengakses token dari backend server
    const resData = await response.json();
    const token = resData.token;

    localStorage.setItem("token", token);
    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1); // ini akan menciptakan waktu selama satu jam dimasa depan
    localStorage.setItem("expiration", expiration.toISOString());

    return redirect("/");
}
