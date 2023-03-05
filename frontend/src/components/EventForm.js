import {
    Form,
    json,
    redirect,
    useActionData,
    useNavigate,
    useNavigation,
} from "react-router-dom";
import classes from "./EventForm.module.css";

export default function EventForm({ method, event }) {
    console.log(event);
    const dataAction = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    function cancelHandler() {
        navigate("..");
    }

    const isSubmitting = navigation.state === "submitting";

    return (
        // Method "post" untuk membuat event baru dan Method "patch" untuk mengedit event
        // method disini hanya digunakan untuk mengatur method request di sisi klien yang dihasilkan react router kemudian akan diteruskan ke action
        <Form method={method} className={classes.form}>
            {dataAction && dataAction.errors && (
                <ul>
                    {Object.values(dataAction.errors).map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            <p>
                <label htmlFor="title">Title</label>
                <input
                    id="title"
                    type="text"
                    name="title"
                    required
                    defaultValue={event ? event.title : ""}
                />
            </p>
            <p>
                <label htmlFor="image">Image</label>
                <input
                    id="image"
                    type="url"
                    name="image"
                    required
                    defaultValue={event ? event.image : ""}
                />
            </p>
            <p>
                <label htmlFor="date">Date</label>
                <input
                    id="date"
                    type="date"
                    name="date"
                    required
                    defaultValue={event ? event.date : ""}
                />
            </p>
            <p>
                <label htmlFor="description">Description</label>
                <textarea
                    id="description"
                    name="description"
                    rows="5"
                    required
                    defaultValue={event ? event.description : ""}
                />
            </p>
            <div className={classes.actions}>
                <button
                    type="button"
                    onClick={cancelHandler}
                    disabled={isSubmitting}
                >
                    Cancel
                </button>
                <button disabled={isSubmitting}>
                    {isSubmitting ? "Submitting..." : "Save"}
                </button>
            </div>
        </Form>
    );
}

// Membuat action function dinamic agar dapat mengirim request untuk menambahkan event baru dan mengedit event yang sudah ada.
export async function action({ request, params }) {
    const method = request.method;
    const dataForm = await request.formData();

    const newEventData = {
        title: dataForm.get("title"),
        image: dataForm.get("image"),
        date: dataForm.get("date"),
        description: dataForm.get("description"),
    };

    let URL = "http://localhost:8080/events";
    // mengirim request menggunakan huruf besar.
    if (method === "PATCH") {
        const eventId = params.eventId;
        URL = `http://localhost:8080/events/${eventId}`;
    }

    const response = await fetch(URL, {
        method: method,
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
