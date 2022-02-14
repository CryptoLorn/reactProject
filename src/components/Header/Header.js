import {Link} from "react-router-dom";

import "./Header.css";

const Header = () => {
    const submit = (e) => {
        e.preventDefault();
    }

    return (
        <div className={'header'}>
            <div className={'logo'}><Link to={'/'}><span>TheMovieDB</span></Link></div>
            <div>
                <form onSubmit={submit}>
                    <input type={'text'} name={'search'} placeholder={'Film name'}/>
                    <button>Search</button>
                </form>
            </div>
            <div className={'login'}>Login</div>
        </div>
    )
}

export default Header;