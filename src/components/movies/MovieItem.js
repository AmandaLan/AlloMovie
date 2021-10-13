import { useContext } from "react";
import { Link } from "react-router-dom";
import FavoritesContext from "../../store/favorites-contexte";

import classes from "./Movie.module.css"

function MovieItem(props) {
    const favoriteCtx = useContext(FavoritesContext);

    const itemIsFavorite = favoriteCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatueHandler() {
        if (itemIsFavorite) {
            favoriteCtx.removeFavorite(props.id);
        } else {
            favoriteCtx.addFavorite({
                id: props.id,
                poster_path: props.poster_path,
                original_title: props.original_title,
            })
        }
    }

    return (
        <li className={classes.movieItem}>
            <div>
                <img src={`https://image.tmdb.org/t/p/w200` + props.poster_path} alt={props.original_title} />
            </div>
            <div>
                <p>{props.title}</p>
            </div>
            <div>
                <button onClick={toggleFavoriteStatueHandler}>{itemIsFavorite ? "Supprimer des favoris" : "Ajouter au favoris"}</button>
                <Link to={{ pathname: `/movie-details/${props.id}`, language: props.language }}>
                    {props.language === "en" ? <button>Detail</button> : <button>Détail</button>}
                </Link>
            </div>

        </li>
    )
}

export default MovieItem
