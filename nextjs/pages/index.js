// name-domain.com/
import MeetupList from "@/components/meetups/MeetupList.";

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

// Jika data berubah terlalu sering, ada property tambahan yang perlu ditambahkan ke objek. Revalidate property. berapapun nilainya akan memastikan bahwa halaman ini akan re-generated di server setelah deployment, sehingga kita tidak perlu re-deploy dan re-generation sepanjang waktu hanya karena beberapa data berubah.
export async function getStaticProps() {
    return {
        props: {
            meetup: DUMMY_MEETUPS,
        },
        revalidate: 1, // set ke 1 jika data berubah sepanjang waktu
    };
}
