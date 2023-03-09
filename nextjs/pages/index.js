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

// export async function getServerSideProps(context) {
//     // Request objek dapat membantu misalnya ketika bekerja dengan Authentication dan perlu memeriksa beberapa session cookie
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetup: DUMMY_MEETUPS,
//         },
//     };
// }

export async function getStaticProps() {
    return {
        props: {
            meetup: DUMMY_MEETUPS,
        },
        revalidate: 1, // set ke 1 jika data berubah sepanjang waktu
    };
}
