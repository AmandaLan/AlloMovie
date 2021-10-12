import MovieItem from "./MovieItem"
import { Link } from "react-router-dom";
import classes from "./Movie.module.css";
import { Fragment } from "react/cjs/react.production.min";

function MovieList(props) {
    // console.log(props)
    return (
        <ul className={classes.movieList}>
            {props.movies.map(movie =>
                <Fragment key={movie.id}>
                    <MovieItem
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                    />
                    {/* passer le props language qui arrive de allMovie à MovieItem */}
                    <Link to={{ pathname: `/movie-details/${movie.id}`, language: props.language }}>
                        {props.language === "en" ? <button>Detail</button> : <button>Détail</button>}
                    </Link>
                </Fragment>
            )}


        </ul>
    )
}

export default MovieList
