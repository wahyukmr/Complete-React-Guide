import React, { useCallback, useEffect, useState } from "react";

import "./App.css";
import AddMovie from "./components/AddMovie";
import MoviesList from "./components/MoviesList";

function App() {
    const [movie, setMovie] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorhandler, setErrorhendler] = useState(null);

    // Mengirim permintaan GET HTTP Requests (mengambil data) dari React App ke Beckend
    const getMovie = useCallback(async () => {
        setIsLoading(true);
        setErrorhendler(null);
        try {
            const response = await fetch(
                "https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json"
            );
            if (!response.ok) {
                throw Error("Something went wrong");
            }

            const moviesData = await response.json();
            console.log(moviesData);

            const loadedMovies = [];

            for (const key in moviesData) {
                loadedMovies.push({
                    id: key,
                    title: moviesData[key].title,
                    releaseDate: moviesData[key].releaseDate,
                    openingText: moviesData[key].openingText,
                });
            }
            setMovie(loadedMovies);
        } catch (error) {
            setErrorhendler(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        getMovie();
    }, [getMovie]);

    // Mengirim permintaan POST HTTP Requests (membuat data baru) dari React App ke Beckend
    async function addMovieHandler(movie) {
        try {
            const response = await fetch(
                "https://react-project1-4c0ab-default-rtdb.asia-southeast1.firebasedatabase.app/movies.json",
                {
                    method: "POST",
                    body: JSON.stringify(movie),
                    headers: {
                        "content-type": "application/json",
                    },
                }
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            setErrorhendler(error.message);
        }
    }

    let content = <h2>Found no movies</h2>;
    if (movie.length > 0) {
        content = <MoviesList movies={movie} />;
    }
    if (errorhandler) {
        content = <p>{errorhandler}</p>;
    }
    if (isLoading) {
        content = <p>Loading...</p>;
    }

    return (
        <React.Fragment>
            <section>
                <AddMovie onAddMovie={addMovieHandler} />
            </section>
            <section>
                <button onClick={getMovie}>Fetch Movies</button>
            </section>
            <section>{content}</section>
        </React.Fragment>
    );
}

export default App;
