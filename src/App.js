import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/Error";
import HomePage from "./pages/Home";
import ProductDetailPage from "./pages/ProductDetail";
import ProductPage from "./pages/Products";
import RootLayout from "./pages/Root";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            // "root index" yang berarti route ini adalah route default yang harus dimuat jika parent route path aktif. Merupakan alternatif untuk menambahkan path kosong.
            { index: true, element: <HomePage /> }, // path: ""
            { path: "products", element: <ProductPage /> },
            { path: "products/:productId", element: <ProductDetailPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={routers} />;
}

export default App;
