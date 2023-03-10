export default function handler(req, res) {
    if (req.method === "POST") {
        const body = req.body;
        const { title, image, address, description } = body;
    }
}
