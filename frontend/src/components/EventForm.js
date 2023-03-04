import {
    Form,
    useActionData,
    useNavigate,
    useNavigation,
} from "react-router-dom";
import classes from "./EventForm.module.css";

// useActionData() melakukan hal yang sama seperti useLoaderData(), yang memberi kita akses ke data yang dikembalikan oleh action terdekat. Jadi dapat menggunakan data tersebut pada komponen ini meskipun ini bukan halaman komponen.
export default function EventForm({ method, event }) {
    const dataAction = useActionData();
    const navigate = useNavigate();
    const navigation = useNavigation();

    function cancelHandler() {
        navigate("..");
    }

    const isSubmitting = navigation.state === "submitting";

    return (
        // Object.values method yang dibangun kedalam javascript utuk loop semua key pada objek dan mengembalikan nilainya kedalam array.
        <Form method="post" className={classes.form}>
            {dataAction && dataAction.errors && (
                <ul>
                    {Object.values(dataAction.errors).map((err) => (
                        <li key={err}>{err}</li>
                    ))}
                </ul>
            )}
            {console.log(dataAction)}
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
