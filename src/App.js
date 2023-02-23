import { useSelector } from "react-redux";
import Auth from "./components/Auth";
import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfile from "./components/UserProfile";

function App() {
    const isAuth = useSelector((state) => state.auth.isAuthenticated);
    const formLogin = useSelector((state) => state.auth.formLogin);

    const loginSuccesful = isAuth && !formLogin;

    return (
        <>
            <Header />
            <Auth />
            {loginSuccesful && <UserProfile />}
            {loginSuccesful && <Counter />}
        </>
    );
}

export default App;
