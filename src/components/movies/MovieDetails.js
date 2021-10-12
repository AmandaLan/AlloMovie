import React, { useState, useEffect } from "react"

function MovieDetails(props) {
    const [movies, setMovies] = useState([]);
    console.log(props)
    const idFromLink = props.match.params.id
    useEffect(() => {

        fetch(
            `https://api.themoviedb.org/3/movie/${idFromLink}?api_key=af4430648fc96a64afb77bc0dea546b0&language=${props.location.language}`
        )
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setMovies(data);
            })
    }, [])
    return (
        <div>
            <h1>{movies.title}</h1>
        </div>
    )
}

export default MovieDetails
