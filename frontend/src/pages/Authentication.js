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

    return redirect("/");
}
