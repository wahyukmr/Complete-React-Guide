import { Await, useRouteLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function EditEventPage() {
    const { event } = useRouteLoaderData("event-detail");

    return (
        <Await resolve={event}>
            {(loadedEvent) => <EventForm method="patch" event={loadedEvent} />}
        </Await>
    );
}
