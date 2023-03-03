import { json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export function EventsPage() {
    const dataEventsResult = useLoaderData();
    const dataEvents = dataEventsResult.events;

    return <EventsList events={dataEvents} />;
}

export async function fetchingEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // Membuat response secara manual.
        // throw new Response(
        //     JSON.stringify({ message: "Couldn't fetch events" }),
        //     { status: 500 }
        // );

        // Membuat response otomatis dengan react router.
        // json adalah fungsi yang dapat di import dari react router dom, sebuah fungsi yang mencitakan objek response yang menyertakan data dalam format JSON. Dan tidak perlu mengonversi JSON nya secara manual.
        throw json({ message: "Couldn't fetch events" }, { status: 500 });
    } else {
        return response;
    }
}
