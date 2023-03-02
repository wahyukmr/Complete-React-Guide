import { useParams } from "react-router-dom";

export default function EventDetailPage() {
    const params = useParams();

    return (
        <>
            <h1>Event detail page!</h1>
            <p>{params.eventId}</p>
        </>
    );
}
