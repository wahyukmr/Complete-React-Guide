import { MongoClient } from "mongodb";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const requestData = req.body;

        const client = await MongoClient.connect(
            `mongodb+srv://${process.env.NEXT_PUBLIC_USER}:${process.env.NEXT_PUBLIC_PASSWORD}@cluster0.gn6lijv.mongodb.net/${process.env.NEXT_PUBLIC_COLLECTION}?retryWrites=true&w=majority`
        );

        // membuat database
        const dataBase = client.db();
        // mendapatkan collection dari database
        const meetupCollection = dataBase.collection("meetups");
        // menyisipkan satu dokumen(objek) baru ke collection dari database
        const result = await meetupCollection.insertOne(requestData);
        console.log(result);

        // Memastikan bahwa klien akan ditutup koneksi database setelah selesai/error
        client.close();

        // kode status 201 untuk menunjukkan bahwa sesuatu telah berhasil dimasukkan.
        res.status(201).json({ message: "Meetup inserted!" });
    }
}
