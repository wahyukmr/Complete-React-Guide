import { Link, useNavigate } from "react-router-dom";

function HomePage() {
    // fungsi navigate ini dapat dipanggil untuk memicu tindakan navigasi dari dalam kode (beralih ke rute berbeda dari dalam kode secara terprogram). Misalnya karena beberapa timer kadaluarsa atau semacamnya
    const navigate = useNavigate();

    function navigateHandler() {
        navigate("/products");
    }

    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/products">products</Link>
            </p>
            <p>
                {/* ini hanya contoh, jangan membuat tombol dan kemudian menavigasi secara terprogram. Cukup gunakan Link saja */}
                <button onClick={navigateHandler}>Navigate</button>
            </p>
        </>
    );
}

export default HomePage;
