import {Routes, Route} from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Genres from "./components/Genres/Genres";
import MoviesList from "./components/MoviesList/MoviesList";
import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
import './App.css';

function App() {

  return (
    <div className="App">
      <Routes>
          <Route path={'/'} element={<HomePage/>}>
              <Route path={'/'} element={<MoviesList/>}/>
          </Route>
          <Route path={'/genres'} element={<Genres/>}/>
          <Route path={'/movie/:id'} element={<MovieDetailsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
