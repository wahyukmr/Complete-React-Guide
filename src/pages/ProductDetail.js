import { Link, useParams } from "react-router-dom";

export default function ProductDetailPage() {
    // useParams adalah hook yang memberi kita object params jika kita memanggilnya seperti ini. Object params ini adalah object JavaScript sederhana yang berisi setiap path Dynamic Segments yang didefinisikan dalam root sebagai properti.
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
            {/* ini adalah pengenal khusus yang secara sederhana berarti naik satu tingkat atau kembali ke route aktif sebelumnya. Dalam kasus ini akan kembali ke parent route (root path). untuk mengubah perilaku ini bisa dengan menambahkan props relative. relative props hanya bekerja dengan relative path */}
            <p>
                <Link to=".." relative="path">
                    Back
                </Link>
            </p>
        </>
    );
}
