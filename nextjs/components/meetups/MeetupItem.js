import { useRouter } from "next/router";
import Card from "../ui/Card";
import classes from "./MeetupItem.module.css";

export default function MeetupItem(props) {
    // Dengan useRouter akan mendapatkan akses objek router yang dapat digunakan untuk menunjukkan detail handler untuk menavigasi secara terprogram.
    const router = useRouter();

    function showDetailHandler() {
        // push method akan mendorong halaman baru ke tumpukan halaman dan itu seperti komponen Link, tetapi untuk menavigasi secara terprogram.
        router.push(`/${props.id}`);
    }

    return (
        <li className={classes.item}>
            <Card>
                <div className={classes.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={classes.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                </div>
                <div className={classes.actions}>
                    <button onClick={showDetailHandler}>Show Details</button>
                </div>
            </Card>
        </li>
    );
}
