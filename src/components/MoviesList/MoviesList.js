import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovies} from "../../slices/movies.slice/movies.slice";
import MovieCard from "../MovieCard/MovieCard";
import Paginator from "../Pagination/Paginator";
import "./MoviesList.css";

const MoviesList = ({items, onFilmClick}) => {
    const {moviesPage, currentPage, status} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies({page: currentPage}));
    }, [])

    return (
        <>
            <div className={'movies_list'}>
                {status === 'fulfilled' && moviesPage.map((movie, index) => <div key={index} onClick={() => onFilmClick(movie)}> <MovieCard movie={movie}/></div>)}
            </div>
            <div className={'paginator'}>{status === 'fulfilled' && <Paginator/>}</div>
        </>

    );
};

export default MoviesList;