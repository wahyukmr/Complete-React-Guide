import { Outlet } from "react-router-dom";
import EventsNavigation from "../components/EventsNavigation";

export default function RootLayoutEvent() {
    return (
        <>
            <EventsNavigation />
            <Outlet />
        </>
    );
}
