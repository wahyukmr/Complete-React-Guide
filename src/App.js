import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";
import ProductPage from "./components/Products";

const routers = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/products", element: <ProductPage /> },
]);

function App() {
    return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
