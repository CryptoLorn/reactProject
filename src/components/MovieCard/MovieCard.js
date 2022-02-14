import React from 'react';

import baseURL from "../../configs/poster.urls";
import "./Movie.css";

const Movie = ({movie}) => {
    const {poster_path, title, vote_average, release_date} = movie;

    return (
        <div className={'movie_card'}>
            <div>
                <img src={`${baseURL}${poster_path}`} alt={`${title}`}/>
            </div>
            <div className={'title'}>
                <h3>{title}</h3>
            </div>
            <div className={'release_data'}>
                <span><b>Release date:</b></span> {release_date}
            </div>
            <div className={'rating'}>
                <span>Rating: {vote_average}</span>
            </div>
        </div>
    );
};

export default Movie;