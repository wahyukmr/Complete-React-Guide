import { json, useRouteLoaderData } from "react-router-dom";
import EventItem from "../components/EventItem";

export default function EventDetailPage() {
    const data = useRouteLoaderData("event-detail");

    return (
        <>
            <EventItem event={data.event} />
        </>
    );
}

// Mendapatkan id di loader. React router yang memanggil fungsi loader sebenarnya mengoper objek ke fungsi loader ketika menjalankannya untuk kita, objek itu menandung dua bagian data request (berisi objek request) dan params (berisi objek dengan parameter route)
export async function loader({ request, params }) {
    // request dalam loader dapat digunakan untuk mengakses url, misalnya untuk mengekstrak query parameter atau semacamnya. DALAM KASUS INI TIDAK MEMBUTUHKANNYA.
    // request.url

    // Dengan params dapat mendapatkan akses ke semua nilai parameter root sepeti yang dilakukan useParams.
    const id = params.eventId;
    // react router secara otomatis melakukan await Promise dan memberikan akses data yang diselesaikan. jadi bisa langsung mereturnnya jika ingin langsung mendapatkan hasil datanya.
    // return fetch("http://localhost:8080/events/" + id)

    const response = await fetch("http://localhost:8080/events/" + id);
    if (!response.ok) {
        throw json({ message: "Error fetching event" }, { status: 500 });
    } else {
        return response;
    }
}
