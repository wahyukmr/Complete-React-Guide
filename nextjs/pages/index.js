// name-domain.com/
import MeetupList from "@/components/meetups/MeetupList.";
import { MongoClient } from "mongodb";

export default function HomePage({ meetup }) {
    return <MeetupList meetups={meetup} />;
}

export async function getStaticProps() {
    try {
        const client = await MongoClient.connect(
            "mongodb+srv://maryu:r6FufU9AdWty5Otn@cluster0.gn6lijv.mongodb.net/meetups?retryWrites=true&w=majority"
        );
        const dataBase = client.db("meetups");
        const meetupCollection = dataBase.collection("meetups");
        const meetups = await meetupCollection.find().toArray();
        client.close();

        return {
            props: {
                meetup: meetups.map((meetup) => ({
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
