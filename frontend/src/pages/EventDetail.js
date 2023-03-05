import { Suspense } from "react";
import {
    Await,
    defer,
    json,
    redirect,
    useRouteLoaderData,
} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";

// Menggunakan defer untuk membantu memuat beberapa data sementara masih menunggu data lainnya.
export default function EventDetailPage() {
    const { event, events } = useRouteLoaderData("event-detail");

    const fallbacks = <p style={{ textAlign: "center" }}>Loading...</p>;

    return (
        <>
            <Suspense fallback={fallbacks}>
                <Await resolve={event}>
                    {(loadedEvent) => <EventItem event={loadedEvent} />}
                </Await>
            </Suspense>
            <Suspense fallback={fallbacks}>
                <Await resolve={events}>
                    {(loadedEvents) => <EventsList events={loadedEvents} />}
                </Await>
            </Suspense>
        </>
    );
}

async function loadEvent(id) {
    const response = await fetch("http://localhost:8080/events/" + id);
    if (!response.ok) {
        throw json({ message: "Error fetching event" }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        throw json({ message: "Couldn't fetch events" }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export async function loader({ request, params }) {
    const id = params.eventId;

    return defer({
        event: loadEvent(id), // dengan menambahkan await disini membuat fungsi loadEvent akan dimuat sebelum halaman ini dirender.
        events: loadEvents(), // Dan untuk fungsi ini akan dimuat setelah halaman ini dirender
    });
}

export async function action({ request, params }) {
    const id = params.eventId;

    const response = await fetch("http://localhost:8080/events/" + id, {
        method: request.method,
    });
    if (!response.ok) {
        throw json({ message: "Error delete event" }, { status: 500 });
    }
    return redirect("/events");
}
