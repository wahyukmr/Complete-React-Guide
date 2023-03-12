// name-domain.com/
import MeetupList from "@/components/meetups/MeetupList.";
import { mongoClientDatabase } from "./api/new-meetup";

export default function HomePage({ meetups }) {
    return <MeetupList meetups={meetups} />;
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
