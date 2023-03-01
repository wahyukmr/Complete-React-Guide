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
            // Jika path yang dimulai dengan slash atau garis miring didepannya maka itu adalah absolute path, yang berarti mereka akan langsung ditambahkan setelah nama domain, bukan setelah path yang sedang aktif.
            { path: "", element: <HomePage /> },
            { path: "products", element: <ProductPage /> },
            // route ini yang bertanggungjawab atas product detail adalah anak langsung dari root route, bukan products route.
            { path: "products/:productId", element: <ProductDetailPage /> },
        ],
    },
    // {
    //     path: "/root",
    //     element: <RootLayout />,
    //     errorElement: <ErrorPage />,
    //     children: [
    //         // jika memiliki child route dengan relative path (tanpa diawali slash atau garis miring) maka react router akan secara default menambahkan path itu setelah route path yang sedang aktif.
    //         { path: "", element: <HomePage /> },
    //         { path: "products", element: <ProductPage /> },
    //         { path: "products/:productId", element: <ProductDetailPage /> },
    //     ],
    // },
]);

function App() {
    return <RouterProvider router={routers} />;
}

export default App;
