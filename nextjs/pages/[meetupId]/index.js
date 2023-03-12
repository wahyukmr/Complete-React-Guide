import MeetupDetail from "@/components/meetups/MeetupDetail";
import { ObjectId } from "mongodb";
import { mongoClientDatabase } from "../api/new-meetup";

export default function DetailMeetup(props) {
    const { title, image, address, description } = props.meetupData;
    return (
        <MeetupDetail
            title={title}
            image={image}
            address={address}
            description={description}
        />
    );
}

export async function getStaticPaths() {
    const { collection, client } = await mongoClientDatabase();

    const meetupCollection = collection;
    const selectIdMeetup = await meetupCollection
        .find()
        .project({ _id: 1 })
        .toArray(); // Yang berari mengambil objek dokumen yang hanya berisi id
    client.close();

    return {
        fallback: false,
        paths: selectIdMeetup.map((meetup) => ({
            params: { meetupId: meetup._id.toString() },
        })),
    };
}

export async function getStaticProps(context) {
    const getId = context.params.meetupId;
    const { collection, client } = await mongoClientDatabase();

    const meetupCollection = collection;
    const selectIdMeetup = await meetupCollection.findOne({
        _id: new ObjectId(getId),
    }); // Mendapatkan ObjectId yang dipilih
    client.close();

    return {
        props: {
            meetupData: {
                ...selectIdMeetup,
                _id: selectIdMeetup._id.toString(),
            },
        },
    };
}
