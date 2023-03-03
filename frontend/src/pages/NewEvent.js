import { json, redirect } from "react-router-dom";
import EventForm from "../components/EventForm";

export default function NewEventPage() {
    return <EventForm />;
}

// Cara mengekstrak data form yang dikirimkan dengan bantuan request yang diteruskan ke fungsi action oleh react router.
// Sama seperti loader, action function dijalankan oleh react router (bukan kode backend) dan menerima objek yang mencakup beberapa properti yang sama. Jadi dapat mengakses API browser apapun disini.
export async function action({ request, params }) {
    // Objek request berisi data form dan untuk mendapatkan datanya menggunakan method formData();
    const data = await request.formData();

    // Pada vaiabel data dapat memanggil method get() untuk mendapatkan akses ke berbagai nilai bidang input yang dikirimkan.
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
    if (!response.ok) {
        throw json({ message: "Error creating event" }, { status: 500 });
    }

    // Redirect adalah fungsi khusus dari react route dom seperti json yang menciptakan objek response, objek response hanya mengarahkan user ke halaman berbeda.
    return redirect("/events");
}
