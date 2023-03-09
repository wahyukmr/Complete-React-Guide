// name-domain.com/
import MeetupList from "@/components/meetups/MeetupList.";

// cara memindahkan pengambilan data dari klien ke sisi server (selama proses build)
const DUMMY_MEETUPS = [
    {
        id: "m1",
        title: "A first meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address",
        description: "This is a first meetup",
    },
    {
        id: "m2",
        title: "A second meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg",
        address: "Some address",
        description: "This is a second meetup",
    },
];

export default function HomePage(props) {
    return <MeetupList meetups={props.meetup} />;
}

// Jika perlu menunggu data, manambahkan pengambilan data ke komponen halaman, kita dapat melakukannya dengan mengeksport fungsi khusus dari dalam file komponen halaman. Fungsi tersebut hanya berfungsi di file komponen halaman ini, tidak di komponen lain. Fungsi getStaticProps() akan memastikan memuat data terlebih dahulu kemudian akan mengembalikan props untuk fungsi komponen (HomePage). Sehingga kita dapat memuat data sebelum fungsi komponen dijalankan.
export async function getStaticProps() {
    // Disini dapat menjalankan kode apapun yang biasanya hanya berjalan di server (seperti mengakses data dari API atau terhubung dengan aman ke database) karena kode disini tidak akan pernah berakhir di sisi klien. Dan harus selalu mengembalikan props objek.
    return {
        props: {
            meetup: DUMMY_MEETUPS,
        },
    };
}
