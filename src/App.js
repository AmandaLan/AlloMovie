import { Route, Switch } from "react-router-dom"

import AllMovie from "./pages/AllMovie";
import Favorites from "./pages/Favorites";
import MainNavigation from "./components/layout/MainNavigation";
import MovieDetails from "./components/movies/MovieDetails"

import "./index.css"

function App() {
  return (
    <div className="container">
      <MainNavigation />
        <Switch>
          <Route path="/" exact component={AllMovie} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/movie-details/:id" component={MovieDetails}/>
        </Switch>      
    </div>
  );
}

export default App;
