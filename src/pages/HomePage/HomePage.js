import {useNavigate} from "react-router-dom";

import Header from "../../components/Header/Header";
import MoviesList from "../../components/MoviesList/MoviesList";
import Genres from "../../components/Genres/Genres";
import "./HomePage.css";
import Footer from "../../components/Footer/Footer";

const HomePage = () => {
    const navigate = useNavigate();

    const onFilmClick = (film) => {
        navigate(`/movie/${film.id}`);
    }

    return (
        <div>
            <div><Header/></div>
            <div className={'home_page'}>
                <div><Genres/></div>
                <div className={'layout'}>
                    <div className={'movies_block'}><MoviesList onFilmClick={onFilmClick}/></div>
                </div>
            </div>
            <div><Footer/></div>
        </div>
    )
}

export default HomePage;