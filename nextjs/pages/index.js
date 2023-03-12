// name-domain.com/
import MeetupList from "@/components/meetups/MeetupList.";
import Head from "next/head";
import { mongoClientDatabase } from "./api/new-meetup";

export default function HomePage({ meetups }) {
    // Head adalah komponen memungkikan untuk menambahkan elemen head ke bagian halaman head. Semua elemen HTML head dapat ditambahkan ke komponen ini.
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta
                    name="description"
                    content="Browse a huge list of highly active React meetups!"
                />
            </Head>
            <MeetupList meetups={meetups} />
        </>
    );
}

export async function getStaticProps() {
    try {
        const { collection, client } = await mongoClientDatabase();

        const meetupCollection = collection;
        const meetupsResult = await meetupCollection.find({}).toArray();
        client.close();

        return {
            props: {
                meetups: meetupsResult.map((meetup) => ({
                    title: meetup.title,
                    image: meetup.image,
                    address: meetup.address,
                    description: meetup.description,
                    id: meetup._id.toString(),
                })),
            },
            revalidate: 1, // set ke 1 jika data berubah sepanjang waktu
        };
    } catch (error) {
        console.log(error);
    }
}
