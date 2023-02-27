import { Link } from "react-router-dom";

// Yang dilakukan komponen Link dibawah adalah merender anchor element, namun pada dasarnya mencegah browser secara default mengirimkan HTTP Request jika diklik dan sebagai gantinya akan memperbarui halaman dan konten yang dituju.
function HomePage() {
    return (
        <>
            <h1>My Home Page</h1>
            <p>
                Go to <Link to="/products">products</Link>
            </p>
        </>
    );
}

export default HomePage;
