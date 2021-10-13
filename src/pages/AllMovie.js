import { useState, useEffect } from "react"

import Pagination from "../components/layout/Pagination";
import MovieList from "../components/movies/MovieList";
import MovieSearch from "../components/movies/MovieSearch";
import MovieSelect from "../components/movies/MovieSelect";
import MovieUpoming from "../components/movies/MovieUpoming";

import classes from "./AllMovie.module.css"

function AllMovie() {

    // const MOVIE_DATA = [
    //     {
    //         id: "m1",
    //         original_title: "Mortal Kombat",
    //         poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rxw7an9VWIlaEzTB4ETadMWSdym.jpg"
    //     },
    //     {
    //         id: "m2",
    //         original_title: "Mortal Kombat",
    //         poster_path: "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/rxw7an9VWIlaEzTB4ETadMWSdym.jpg"
    //     },
    // ]

    // function handleClick(id) {
    //     history.push(id)
    //   }

    const [movies, setMovies] = useState([]);
    const [page, setPage] = useState(1);
    const [search, setSearch] = useState("");
    const [languageCountry, setLanguageCountry] = useState("");
    const [language, setLanguage] = useState("");

    const optionLanguageCountry = [
        {
            value: "fr",
            name: "France"
        },
        {
            value: "en",
            name: "USA"
        },
        {
            value: "ja",
            name: "Japon"
        },

    ]
    const optionLanguage = [
        {
            value: "fr",
            name: "Fr"
        },
        {
            value: "en",
            name: "En"
        },

    ];

    useEffect(() => {

        fetch(
            // `https://api.themoviedb.org/3/discover/movie?api_key=af4430648fc96a64afb77bc0dea546b0&with_original_language=ja&page=${page}`
            search === "" ? `https://api.themoviedb.org/3/discover/movie?api_key=af4430648fc96a64afb77bc0dea546b0&page=${page}&with_original_language=${languageCountry}&language=${language}` : `https://api.themoviedb.org/3/search/movie?api_key=af4430648fc96a64afb77bc0dea546b0&query=${search}&page=${page}&with_original_language=${languageCountry}&language=${language}`
        )
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setMovies(data.results);
            })
    }, [page, search, languageCountry, language]);

    return (
        <div className={classes.movieTitle}>

            <MovieUpoming/>

            <h1>Tous les films</h1>
            {/* input recherche film */}

            <MovieSearch search={search} setSearch={setSearch} />

            <MovieSelect name="country" value={languageCountry} setValue={setLanguageCountry}>

                <option value="">--Choisissez l'origine du film--</option>
                {optionLanguageCountry.map(optionLanguageCountries => {
                    return (
                        <option key={optionLanguageCountries.value} value={optionLanguageCountries.value}>{optionLanguageCountries.name}</option>
                    )
                })}
                {/*<option value="fr">France</option>
                <option value="ja">Japon</option>
                <option value="en">Anglais</option> */}
            </MovieSelect>
            <MovieSelect name="language" value={language} setValue={setLanguage}>
                <option value="">--Choisissez la langue--</option>
                {optionLanguage.map(optionLanguages => {
                    return (
                        <option key={optionLanguages.value} value={optionLanguages.value}>{optionLanguages.name}</option>
                    )
                })}

            </MovieSelect>
            <Pagination page={page} setPage={setPage} />
            {/* Passer les props language de allmovie a movie liste */}
            <MovieList movies={movies} language={language} />
            {/* <MovieList movies={movies} id={() => handleClick(plant.id)}/> */}
            <Pagination page={page} setPage={setPage} />
        </div>
    )
}

export default AllMovie
