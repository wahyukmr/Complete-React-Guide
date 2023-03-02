import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

export function EventsPage() {
    const dataEvents = useLoaderData(); // Using data from loader

    return <EventsList events={dataEvents} />;
}

// Menempatkan kode loader pada file komponen yang membutuhkannya.
export async function fetchingEvents() {
    const response = await fetch("http://localhost:8080/events");

    if (!response.ok) {
        // setError("Fetching events failed.");
    } else {
        const resData = await response.json();
        return resData.events; // Data event ini akan tersedia untuk komponen EventPage dan komponen lain yang memerlukannya. Setiap menggunakan async await data yang direturn akan mengembalikan sebuah promise.
    }
}
