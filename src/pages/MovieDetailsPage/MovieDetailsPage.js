import {useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";

import {movieService} from "../../services/movie.service";
import Header from "../../components/Header/Header";
import baseURL from "../../configs/poster.urls";
import "./MovieDetailsPage.css";
import Footer from "../../components/Footer/Footer";

const MovieDetailsPage = () => {
    const {id} = useParams();
    const [filmDetails, setFilmDetails] = useState({});

    useEffect(() => {
        movieService.getMovieDetails(id).then(value => setFilmDetails({...value}))

    }, [id])

    return (
        <>
            <div><Header/></div>

            <div className={'wrapper'}>
                <div className={'movie_details'}>
                    <div><img src={`${baseURL}${filmDetails.poster_path}`} alt={`${filmDetails.title}`}/></div>
                    <div className={'info'}>
                        <div><h2>{filmDetails.original_title}</h2></div>
                        <div><span><b>Release date:</b> {filmDetails.release_date}</span></div>
                        {filmDetails.genres && <div><span><b>Genres:</b></span> {filmDetails.genres.map(value => <span
                            key={value.id}> {value.name},</span>)}</div>}
                        {filmDetails.production_countries &&
                            <div><span><b>Counties:</b></span> {filmDetails.production_countries.map(value => <span
                                key={value.iso_3166_1}> {value.name},</span>)}</div>}
                        <div><span><b>Language:</b> {filmDetails.original_language}</span></div>
                        <div><span><b>Rating:</b> {filmDetails.vote_average}</span></div>
                        <div><span><b>Vote Count:</b> {filmDetails.vote_count}</span></div>
                        <div><span><b>Popularity:</b> {filmDetails.popularity}</span></div>
                        <div><span><b>Runtime:</b> {filmDetails.runtime}</span></div>
                    </div>
                </div>

                <div className={'description'}>
                    <p><b>Description:</b></p>
                    <span>{filmDetails.overview}</span>
                </div>
            </div>

            <div><Footer/></div>
        </>
    )
}

export default MovieDetailsPage;