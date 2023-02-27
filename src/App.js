import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";

// errorElement untuk mendefinisikan elemen yang harus dimuat ketika halaman ini melempar kesalahan.
const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <ProductPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={routers} />;
}

export default App;
