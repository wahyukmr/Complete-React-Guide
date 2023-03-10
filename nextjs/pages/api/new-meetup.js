import { MongoClient } from "mongodb";

const URL =
    "mongodb+srv://maryu:r6FufU9AdWty5Otn@cluster0.gn6lijv.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(URL);

export default async function handler(req, res) {
    if (req.method === "POST") {
        const dataBody = req.body;

        try {
            // membuat database
            const dataBase = client.db("meetups_data");
            // mendapatkan collection dari database
            const meetupCollection = dataBase.collection("meetup");
            // menyisipkan satu dokumen(objek) baru ke collection dari database
            const result = await meetupCollection.insertOne(dataBody);
            console.log(result);
        } catch (err) {
            // kode status 201 untuk menunjukkan bahwa sesuatu telah berhasil dimasukkan.
            res.status(201).json({ message: "Meetup inserted!" });
            console.log(err.message);
        } finally {
            // Memastikan bahwa klien akan ditutup koneksi database setelah selesai/error
            await client.close();
        }
    }
}
