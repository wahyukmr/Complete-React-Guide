import { useParams } from "react-router-dom";

export default function ProductDetailPage() {
    // useParams adalah hook yang memberi kita object params jika kita memanggilnya seperti ini. Object params ini adalah object JavaScript sederhana yang berisi setiap path Dynamic Segments yang didefinisikan dalam root sebagai properti.
    const params = useParams();

    return (
        <>
            <h1>Product Details!</h1>
            <p>{params.productId}</p>
        </>
    );
}
