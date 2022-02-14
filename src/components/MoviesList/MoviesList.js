import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getMovies} from "../../slices/movies.slice/movies.slice";
import Movie from "../Movie/Movie";
import Paginator from "../Pagination/Paginator";
import "./Movies.css";

const Movies = ({items, onFilmClick}) => {
    const {moviesPage, currentPage, status} = useSelector(state => state['moviesReducer']);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMovies({page: currentPage}));
    }, [])

    return (
        <>
            <div className={'movies_list'}>
                {status === 'fulfilled' && moviesPage.map((movie, index) => <div key={index} onClick={() => onFilmClick(movie)}> <Movie movie={movie}/></div>)}
            </div>
            <div className={'paginator'}>{status === 'fulfilled' && <Paginator/>}</div>
        </>

    );
};

export default Movies;