import { useState, useEffect } from "react";
import Footer from "./Footer.js"
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import classes from "./MovieDetails.module.css"


function MovieDetails(props) {
    const [movies, setMovies] = useState([]);
    const [video, setVideo] = useState([]);
    const [similars, setSimilars] = useState([]);
    const idFromLink = props.match.params.id;
    const [imageIndex, setImageIndex] = useState(0);

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

        fetch(
            `https://api.themoviedb.org/3/movie/${idFromLink}/videos?api_key=af4430648fc96a64afb77bc0dea546b0&language=${props.location.language}`
        )
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setVideo(data.results[0]);
            })

        fetch(
            `https://api.themoviedb.org/3/movie/${idFromLink}/similar?api_key=af4430648fc96a64afb77bc0dea546b0&language=${props.location.language}`
        )
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setSimilars(data.results);
            })

    }, [])

    const NextArrow = ({ onClick }) => {
        return (
            <div className={classes.arrowRight} onClick={onClick}>
                <FaArrowRight />
            </div>
        )
    }
    const PrevArrow = ({ onClick }) => {
        return (
            <div className={classes.arrowLeft} onClick={onClick}>
                <FaArrowLeft />
            </div>
        )
    }

    const carouselSettings = {
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        lazyload: true,
        slidesToShow: 5,

        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };
    console.log(similars)
    return (
        <div className={classes.detailConteiner}>
            <div className={classes.detailVideo}>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${video.key}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                <div className={classes.detailGraduent}></div>
                <div className={classes.detailCard}>
                    <img src={`https://image.tmdb.org/t/p/w300` + movies.poster_path} />
                    
                    <div className={classes.detail}>
                        <h1>{movies.title}</h1>
                        <p>{movies.overview}</p>
                    </div>
                </div>
            </div>



            <h1>Vous aimerez aussi :</h1>

            <div className={classes.similarCarousel}>
                <Slider {...carouselSettings}>
                    {similars.map(similar => {

                        return (
                            <div >
                                <img src={`https://image.tmdb.org/t/p/w200` + similar.poster_path} />
                            </div>
                        )
                    })}
                </Slider>
            </div>

            <Footer />

        </div>
    )
}

export default MovieDetails
