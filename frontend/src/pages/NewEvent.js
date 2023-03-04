import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return <EventForm />;
}

export async function action({ request, params }) {
    const data = await request.formData();

    const newEventData = {
        title: data.get("title"),
        image: data.get("image"),
        date: data.get("date"),
        description: data.get("description"),
    };

    const response = await fetch("http://localhost:8080/events", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newEventData),
    });

    if (response.status === 422) {
        return response;
    }
    if (!response.ok) {
        throw json({ message: "Error creating event" }, { status: 500 });
    }
    return redirect("/events");
}
