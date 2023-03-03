import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export default function EventsPage() {
    const dataEventsResult = useLoaderData();
    const dataEvents = dataEventsResult.events;

    return <EventsList events={dataEvents} />;
}

export async function loader() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        throw json({ message: "Couldn't fetch events" }, { status: 500 });
    } else {
        return response;
    }
}
