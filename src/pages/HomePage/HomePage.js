import Header from "../../components/Header/Header";
import Movies from "../../components/Movies/Movies";
import "./Layout.css";

const Layout = () => {

    return (
        <div>
            <div><Header/></div>
            <div className={'layout'}>
                <div className={'movies_block'}><Movies/></div>
            </div>
        </div>
    )
}

export default Layout;