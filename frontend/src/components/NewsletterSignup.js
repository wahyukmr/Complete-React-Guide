import { useEffect } from "react";
import { useFetcher } from "react-router-dom";
import classes from "./NewsletterSignup.module.css";

export default function NewsletterSignup() {
    // useFetcher Hook yang ketika dieksekusi memberi sebuah objek, objek ini mencakup property dan method. Hook ini pada dasarnya adalah alat yang harus digunakan jika ingin berinteraksi dengan beberapa action atau loader tanpa melakukan tansisi (tanpa harus secara otomatis menavigasi ke halaman tempat loader atau halaman tempat action berada). jadi jika ingin mengirim request tanpa memicu perubahan route apapun.
    const fetcher = useFetcher();

    // Mendapatkan feedback dan memperbarui UI dengan itu. state untuk mengetahui status fetcher, data untuk tempat data yang direturn dari action atau loadder
    const { data, state } = fetcher;
    useEffect(() => {
        // Jika state idle yang bearti tidak lagi mengeksekusi action atau loader.
        if (state === "idle" && data && data.message) {
            window.alert(data.message);
        }
    }, [data, state]);

    return (
        // Dengan fetcher.Form tidak akan bertransisi, tidak berpindah ke route yang berbeda.
        <fetcher.Form
            method="post"
            action="/newsletter"
            className={classes.newsletter}
        >
            <input
                name="email"
                type="email"
                placeholder="Sign up for newsletter..."
                aria-label="Sign up for newsletter"
            />
            <button>Sign up</button>
        </fetcher.Form>
    );
}
