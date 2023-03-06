import {
    Form,
    Link,
    useActionData,
    useNavigation,
    useSearchParams,
} from "react-router-dom";
import classes from "./AuthForm.module.css";

export default function AuthForm() {
    // Mendapatkan data yang dikembalikan oleh fungsi action yang dikirimkan form.
    const data = useActionData();
    const navigation = useNavigation();

    const [searchParams] = useSearchParams();
    const isLogin = searchParams.get("mode") === "login";

    const buttonText =
        navigation.state === "submitting"
            ? "Submitting..."
            : navigation.state === "loading"
            ? "Done!"
            : "Seve";

    return (
        <>
            <Form method="post" className={classes.form}>
                <h1>{isLogin ? "Log in" : "Create new user"}</h1>
                {data && data.errors && (
                    <ul>
                        {Object.values(data.errors).map((err) => (
                            <li key={err}>{err}</li>
                        ))}
                    </ul>
                )}
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
                    <Link to={`?mode=${isLogin ? "signup" : "login"}`}>
                        {isLogin ? "Sign in" : "Log in"}
                    </Link>
                    <button disabled={navigation.state === "submitting"}>
                        {buttonText}
                    </button>
                </div>
            </Form>
        </>
    );
}
