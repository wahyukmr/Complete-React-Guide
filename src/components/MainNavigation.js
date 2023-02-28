import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.css";

// NavLink untuk mendukung link yang harus menunjukkan kepada kita apakah link tersebut mengarah ke halaman yang sedang aktif atau tidak. NavLink digunakan seperti Link.
// Penambahan props "end" berguna jika memiliki route yang bersarang
function MainNavigation() {
    return (
        <header className={classes.header}>
            <nav>
                <ul className={classes.list}>
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                            end
                        >
                            Products
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/products/example"
                            className={({ isActive }) =>
                                isActive ? classes.active : undefined
                            }
                        >
                            Example
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavigation;
