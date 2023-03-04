import { Form, useNavigate, useNavigation } from "react-router-dom";
import classes from "./EventForm.module.css";

// useNavigation hook yang disediakan react router dan memberikan kita akses ke objek navigasi dan kita dapat mengekstrak berbagai informasi dari objek tersebut, misalnya semua data yang dikirimkan. Tetapi kita juga dapat mengetahui keadaan transisi yang sedang aktif saat ini. Jadi dapat mendapatkan informasi tentang proses pengiriman data form lalu memicu sebuah tindakan setelah proses itu selesai.
export default function EventForm({ method, event }) {
    const navigate = useNavigate();
    const navigation = useNavigation();

    function cancelHandler() {
        navigate("..");
    }

    const isSubmitting = navigation.state === "submitting";
    // const isLoading = navigation.state === "loading";

    // const textButton = isSubmitting
    //     ? "Submitting"
    //     : isLoading
    //     ? "Saved!"
    //     : "Save";

    return (
        <Form method="post" className={classes.form}>
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
