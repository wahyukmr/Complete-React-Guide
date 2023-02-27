import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/pages/Home";
import ProductPage from "./components/pages/Products";
import RootLayout from "./components/pages/Root";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
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
