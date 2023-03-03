import { createBrowserRouter, RouterProvider } from "react-router-dom";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
    loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
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
                    {
                        path: ":eventId",
                        element: <EventDetailPage />,
                        loader: eventDetailLoader,
                    },
                    { path: "new", element: <NewEventPage /> },
                    {
                        path: ":eventId/edit",
                        element: <EditEventPage />,
                    },
                ],
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={routers} />;
}
