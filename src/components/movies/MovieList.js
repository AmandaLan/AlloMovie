import MovieItem from "./MovieItem"

import classes from "./Movie.module.css";
import { Fragment } from "react/cjs/react.production.min";

function MovieList(props) {
    // console.log(props)
    return (
        <div className={classes.movieList}>
            {props.movies.map(movie =>
                <Fragment key={movie.id}>
                    <MovieItem
                        id={movie.id}
                        poster_path={movie.poster_path}
                        title={movie.title}
                        vote_average={movie.vote_average}
                    />
                    {/* passer le props language qui arrive de allMovie à MovieItem */}
                    
                </Fragment>
            )}


        </div>
    )
}

export default MovieList
