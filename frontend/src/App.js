import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as manipulateEventAction } from "./components/EventForm";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
    action as eventDetailAction,
    loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import NewEventPage from "./pages/NewEvent";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import RootLayout from "./pages/Root";
import RootLayoutEvent from "./pages/RootEvent";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
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
                        loader: eventDetailLoader,
                        id: "event-detail",
                        children: [
                            {
                                index: true,
                                element: <EventDetailPage />,
                                action: eventDetailAction,
                            },
                            {
                                path: "edit",
                                element: <EditEventPage />,
                                action: manipulateEventAction,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: manipulateEventAction,
                    },
                ],
            },
            {
                path: "newsletter",
                element: <NewsletterPage />,
                action: newsletterAction,
            },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={routers} />;
}
