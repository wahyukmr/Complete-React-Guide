import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pertama hapus import halaman blog
// import BlogPage, { loader as postsLoader } from './pages/Blog';
import HomePage from "./pages/Home";
// import PostPage, { loader as postLoader } from "./pages/Post";
import RootLayout from "./pages/Root";

// Ketiga panggil kembali halaman komponen BlogPage, tetapi hanya jika halaman blog dibutuhkan (lazy). Dengan mengimport lazy function dari react akan menangani promise yang dikembalikan dari anonym function
const BlogPage = lazy(() => import("./pages/Blog"));
const PostPage = lazy(() => import("./pages/Post"));

const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "posts",
                children: [
                    // Kedua membuat loader function menjadi lazy loading, karena halaman blog juga mengimport loader didalamnya, maka juga harus membuatnya menjadi lazy loading. import key didalam function disini ia akan mengimport sesuatu secara dinamis hanya ketika dibutuhkan. Untuk mengimport perlu melewati sebuah path dan akan membari kita Promise karena ini adalah proses async. Jadi saat kita mengunjungi halaman BlogPage barulah file blog.js akan di import dan fungsi loader dari file itu akan dieksekusi.
                    {
                        index: true,
                        // Suspense komponen juga bisa untuk melakukan await konten yang dimuat sebelum merender konten.
                        element: (
                            <Suspense
                                fallback={
                                    <h1 style={{ textAlign: "center" }}>
                                        Loading...
                                    </h1>
                                }
                            >
                                <BlogPage />
                            </Suspense>
                        ),
                        loader: () =>
                            import("./pages/Blog").then((module) =>
                                module.loader()
                            ),
                    },
                    {
                        path: ":id",
                        element: (
                            <Suspense
                                fallback={
                                    <h1 style={{ textAlign: "center" }}>
                                        Loading...
                                    </h1>
                                }
                            >
                                <PostPage />
                            </Suspense>
                        ),
                        loader: (meta) =>
                            import("./pages/Post").then((module) =>
                                module.loader(meta)
                            ),
                        // element: <PostPage />,
                        // loader: postLoader,
                    },
                ],
            },
        ],
    },
]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
