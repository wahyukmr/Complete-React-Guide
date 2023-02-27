import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./components/Home";

// createBrowserRouter adalah fungsi yang disediakan oleh package yang memungkinkan untuk mendefinisikan rute/path yang ingin kita dukung. Dimana setiap objek mewakili satu rute. Key properti yang hampir selalu ditambahkan adalah properti path. path adalah bagian setelah nama domain. Key element medefinisikan elemen mana yang harus dimuat ketika jalurnya aktif.
const routers = createBrowserRouter([
    // ini adalah rute untuk halaman utama/awal situs web ini, dan karena itu jalurnya bisa berupa slash saja.
    { path: "/", element: <HomePage /> },
]);

// RouterProvider untuk memberi tahu react bahwa router ingin digunakan.
function App() {
    return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
