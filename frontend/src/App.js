import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
    loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage, { action as newEventAction } from "./pages/NewEvent";
import RootLayout from "./pages/Root";
import RootLayoutEvent from "./pages/RootEvent";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        // error element tidak hanya untuk menampilkan halaman jika path route tidak valid, tetapi juga akan ditampilkan ke layar setiap kali error dihasilkan dalam kode terkait route apapun.
        errorElement: <ErrorPage />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: "events",
                element: <RootLayoutEvent />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: eventsLoader,
                    },
                    // Cara agar bisa mendapatkan akses ke loader tingkat yang lebih tinggi dari route yang tidak memiliki loader. Dengan menambahkan loader pada route induk membuat kedua route child memiliki akses ke loader yang sama. Penambahan properti id digunakan pada setiap komponen yang ingin menggunakan data tersebut menggunakan useRouteLoaderdata().
                    {
                        path: ":eventId",
                        loader: eventDetailLoader,
                        id: "event-detail",
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: newEventAction,
                    },
                ],
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={routers} />;
}
