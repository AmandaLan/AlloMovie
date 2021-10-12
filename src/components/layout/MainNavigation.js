import { useContext } from "react";
import {Link} from "react-router-dom";
import FavoritesContext from "../../store/favorites-contexte";

import classes from "./MainNavigation.module.css"

function MainNavigation() {

    const favoritesCtx = useContext(FavoritesContext);

    return (
        <header className={classes.header}>
            <div className={classes.logo}>
                <h1>Allo Movies</h1>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/favorites">Vos favoris <span>{favoritesCtx.totalFavorites}</span></Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default MainNavigation
