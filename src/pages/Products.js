import { Link } from "react-router-dom";

const PRODUCTS = [
    { id: "p1", title: "Product 1" },
    { id: "p2", title: "Product 2" },
    { id: "p3", title: "Product 3" },
];

function ProductPage() {
    return (
        <>
            <h2>The Products Page</h2>
            <ul>
                {PRODUCTS.map((product) => (
                    <li key={product.id}>
                        {/* Ketika menggunakan komponen Link, juga memiliki props relative yang dapat ditambahkan dan bisa di set ke path atau route. Dengan itu dapat mengontrol apakah segment ini ditambahkan relatif ke route path aktif atau ke path yang sedang aktif di URL. */}
                        <Link to={product.id}>{product.title}</Link>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default ProductPage;
