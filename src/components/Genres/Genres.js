import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import Genre from "../Genre/Genre";
import {getAllGenres} from "../../slices/genres.slice/genres.slice";

const Genres = () => {
    const {genres, status, error} = useSelector(state => state['genresReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllGenres());
    }, [])

    return (
        <div>
            {genres.map(genre => <Genre key={genre.id} genre={genre}/>)}
        </div>
    )
}

export default Genres;