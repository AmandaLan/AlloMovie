import { useState, useEffect } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";

import classes from "./MovieUpcoming.module.css"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function MovieUpoming() {
    const [movies, setMovies] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);

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
        autoplay: true,
        autoplaySpeed: 5000,
        speed: 300,
        centerMode: true,
        centerPadding: 0,
        lazyload: true,
        slidesToShow: 3,

        infinite: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        beforeChange: (current, next) => setImageIndex(next)
    };


    useEffect(() => {

        fetch(
            `https://api.themoviedb.org/3/movie/upcoming?api_key=af4430648fc96a64afb77bc0dea546b0`
        )
            .then((response) => {
                return response.json();
            })
            .then(data => {
                setMovies(data);
            })
    }, []);
    console.log(movies)
    return (
        <div className={classes.carousel}>
            <Slider {...carouselSettings} >
                {/* les points d'interrogation ca permet de dire "execute ce qui suit le point d'interrogation uniquement si celui ci est true ou contient de la data */}
                {movies?.results?.map((movie, idx) => {

                    return (
                        <div key={movie.id} >
                            <div className={idx === imageIndex ? classes.upcomingBG : classes.activeUpcomingBG}>
                                <img style={{width: "100%", height:"250px", objectFit: "cover"}} src={`https://image.tmdb.org/t/p/w300` + movie.backdrop_path} alt={movie.title} />
                            </div>

                            <div className={idx === imageIndex ? classes.upcomingSlider : classes.activeUpcomingSlider}>
                                <img src={`https://image.tmdb.org/t/p/w200` + movie.poster_path} alt={movie.title} />
                                <div>
                                    <h3 className={classes.upcommingDetail}>{movie.title}</h3>
                                    <p>{movie.overview}</p>
                                </div>

                            </div>

                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default MovieUpoming
