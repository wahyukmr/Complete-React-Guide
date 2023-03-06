import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { action as manipulateEventAction } from "./components/EventForm";
import AuthenticationPage, {
    action as authAction,
} from "./pages/Authentication";
import EditEventPage from "./pages/EditEvent";
import ErrorPage from "./pages/Error";
import EventDetailPage, {
    action as eventDetailAction,
    loader as eventDetailLoader,
} from "./pages/EventDetail";
import EventsPage, { loader as eventsLoader } from "./pages/Events";
import HomePage from "./pages/Home";
import { action as logoutAction } from "./pages/Logout";
import NewEventPage from "./pages/NewEvent";
import NewsletterPage, { action as newsletterAction } from "./pages/Newsletter";
import RootLayout from "./pages/Root";
import RootLayoutEvent from "./pages/RootEvent";
import { checkAuthLoader, tokenLoader } from "./util/auth";

const routers = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        loader: tokenLoader,
        id: "root",
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
                                loader: checkAuthLoader,
                            },
                        ],
                    },
                    {
                        path: "new",
                        element: <NewEventPage />,
                        action: manipulateEventAction,
                        loader: checkAuthLoader,
                    },
                ],
            },
            {
                path: "auth",
                element: <AuthenticationPage />,
                action: authAction,
            },
            {
                path: "newsletter",
                element: <NewsletterPage />,
                action: newsletterAction,
            },
            { path: "logout", action: logoutAction },
        ],
    },
]);

export default function App() {
    return <RouterProvider router={routers} />;
}
