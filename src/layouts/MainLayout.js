import {Outlet} from "react-router-dom";

import MovieList from "../components/movieList/MovieList";
import Header from "../components/header/Header";


function MainLayout() {

    return (
        <div>
            <Header/>
            <Outlet/>
            <MovieList/>
        </div>
    );
}

export default MainLayout;
