import { Form, Link, useSearchParams } from "react-router-dom";
import classes from "./AuthForm.module.css";

export default function AuthForm() {
    // Hook useSearchParams() memudahkan untk mendapatkan akses ke parameter query yang sedang diatur. Akan mengembalikan sebuah arrray dengan dua buah elemen, yang pertama adalah objek yang memberi kita akses ke parameter query yang saat ini ditetapkan, yang kedua adalah fungsi untuk memperbarui parameter query saat ini.
    const [searchParams] = useSearchParams();
    // method get untuk mengambil nilai parameter query tertentu.
    const isLogin = searchParams.get("mode") === "Login";

    return (
        <>
            <Form method="post" className={classes.form}>
                <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
                <p>
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" required />
                </p>
                <p>
                    <label htmlFor="image">Password</label>
                    <input
                        id="password"
                        type="password"
                        name="password"
                        required
                    />
                </p>
                <div className={classes.actions}>
                    <Link to={`?mode=${isLogin ? "Signup" : "Login"}`}>
                        {isLogin ? "Create new user" : "Login"}
                    </Link>
                    <button>Save</button>
                </div>
            </Form>
        </>
    );
}
