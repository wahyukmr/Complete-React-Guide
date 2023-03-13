import MeetupDetail from "@/components/meetups/MeetupDetail";
import { ObjectId } from "mongodb";
import Head from "next/head";
import { mongoClientDatabase } from "../api/new-meetup";

export default function DetailMeetup(props) {
    const { title, image, address, description } = props.meetupData;
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={description} />
            </Head>
            <MeetupDetail
                title={title}
                image={image}
                address={address}
                description={description}
            />
        </>
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
        // Ssat mengatur fallback ke true atau blocking, nextjs tidak akan menanggapi dengan 404 jika halaman tidak ditemukan, sebaliknya halaman tersebut akan dibuat sesuai request dan setelah itu menyimpannya dalam cache sehingga akan dibuat sebelumnya saat diperlukan. Perbedaannya, jika true akan mengembalikan halaman kosong dan kemudian menarik konten yang dihasilkan secara dinamis setelah selesai, jadi perlu menangani kasus bahwa halaman tersebut belum memiliki data. Sedangkan jika blocking user tidak akan melihat apapun sampai halaman tersebut selesai dibuat
        fallback: "blocking",
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
