import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export function EventsPage() {
    const dataEventsResult = useLoaderData();
    const dataEvents = dataEventsResult.events;

    return <EventsList events={dataEvents} />;
}

export async function fetchingEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // setError("Fetching events failed.");
    } else {
        return response;
    }
}
