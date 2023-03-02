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
        // Menggunakan throw Response alih-alih object biasa, memungkinkan untuk menyertakan properti status yang membantu membangun komponen penanganan error.
        throw new Response(
            JSON.stringify({ message: "Couldn't fetch events" }),
            { status: 500 }
        );
    } else {
        return response;
    }
}
