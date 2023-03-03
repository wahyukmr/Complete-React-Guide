import { Link, useSubmit } from "react-router-dom";
import classes from "./EventItem.module.css";

export default function EventItem({ event }) {
    // useSubmit() memicu action dan mengirim beberapa data secara terprogram. Dengan Hook ini dapat memberi kita fungsi submit yang bisa disimpan dalam sebuah konstanta.
    const submit = useSubmit();

    function startDeleteHandler() {
        const proceed = window.confirm("Are you sure you want to delete?");

        if (proceed) {
            // di submit fuction dapat melewatkan dua argument, pertama adalah data yang ingin kita kirimkan yang dibungkus dalam objek data form dan dapat diekstrak dengan method formData(), argumen kedua memungkikan untuk menetapkan nilai yang sama dengan yang ditetapkan pada form (juga dapat menambahkan action key ke path yang berbeda jika ingin action kita didefinisikan pada path route yang berbeda)
            submit(null, { method: "delete" });
        }
    }

    return (
        <article className={classes.event}>
            <img src={event.image} alt={event.title} />
            <h1>{event.title}</h1>
            <time>{event.date}</time>
            <p>{event.description}</p>
            <menu className={classes.actions}>
                <Link to="edit">Edit</Link>
                <button onClick={startDeleteHandler}>Delete</button>
            </menu>
        </article>
    );
}
