import { useContext } from "react";
import MovieList from "../components/movies/MovieList";
import FavoritesContext from "../store/favorites-contexte";

import classes from "./Favorites.module.css"

function Favorites() {
    const favoritesCtx = useContext(FavoritesContext);

    let content;
    if (favoritesCtx.totalFavorites === 0) {
        content = <p>Vous n'avez pas de favoris</p>
    } else {
        content = <MovieList movies={favoritesCtx.favorites} />
    }

    return (
        <div>
            <h1 className={classes.favoriteTitle}>Votre liste de favoris</h1>
            <div className={classes.favoriteContent}>{content}</div>
        </div>
    )
}

export default Favorites
