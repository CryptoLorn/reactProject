import React from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getByGenre, getByString, setCurrentPage} from "../../slices/movies.slice/movies.slice";
import {createPages} from "./Pagination";
import "./Pagination.css"

const PagesPaginate = () => {
    const dispatch = useDispatch();
    const {currentPage, totalPages, string} = useSelector(state => state['moviesReducer']);

    const pages = [];
    createPages(pages, totalPages, currentPage);


    return (
        <div className={'pages'}>
            {pages.map((page, index) =>
                <a key={index}
                   onClick={() => {
                       dispatch(setCurrentPage({page}));
                       if (string.length) {
                           dispatch(getByString({string, page}));
                       } else {
                           dispatch(getByGenre({page}));
                       }
                   }}>
                    {page}
                </a>
            )}
        </div>
    );
};

export default PagesPaginate;