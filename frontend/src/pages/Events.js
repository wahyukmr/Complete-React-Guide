import { Suspense } from "react";
import { Await, defer, json, useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";

// defer data loading yang membuat komponen EventPage dirender sebelum memiliki data. Dengan fitur ini dapat mempercepat halaman dan memastikan bahwa sudah menampilkan beberapa konten sementara menunggu konten lainnya. Sangat berguna ketika memiliki halaman dengan beberapa HTTP request dengan kecepatan yang berbeda.
export default function EventsPage() {
    // key events masih memegang Promise sebagai nilainya.
    const { events } = useLoaderData();

    const fallbacks = <p style={{ textAlign: "center" }}>Loading...</p>;

    // Komponen Await memiliki props kusus (resolve) yang menginginkan salah satu dari defer value sebagai nilainya. Jadi komponen Await akan melakukan atau menangani Promise yang diteruskan dari defer dengan props resolve. Kemudian didalam komponen Await mengelarkan nilai dinamis yang harus berupa fungsi yang akan di eksekusi react router setelah data tersebut ada disana, begitu promise diselesaikan.
    return (
        // Suspense komponen adalah komponen yang dapat digunakan dalam situasi tertentu untuk menampilkan fallback sementara menunggu data diambil.
        <Suspense fallback={fallbacks}>
            <Await resolve={events}>
                {(loadedEvents) => <EventsList events={loadedEvents} />}
            </Await>
        </Suspense>
    );
}

export async function loadEvents() {
    const response = await fetch("http://localhost:8080/events");
    if (!response.ok) {
        throw json({ message: "Couldn't fetch events" }, { status: 500 });
    } else {
        const resData = await response.json();
        return resData.events;
    }
}

export function loader() {
    // defer memberitahu react router bahwa kita ingin merender komponen meskipun datanya belum sepenuhnya ada. defer adalah fungsi yang harus dijalankan dan mengoper sebuah objek, didalam objek ini kita dapat menggabungkan semua HTTP request yang berbeda yang mungkin dimiliki di halaman ini.
    return defer({
        events: loadEvents(),
    });
}
