import './App.css';

import {Route, Routes} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";
import MovieInfo from "./components/movieInfo/MovieInfo";


function App() {
    return (
        <div>
            <Routes>
                <Route index element={<MainLayout/>}/>
                    <Route path={':id'} element={<MovieInfo/>}/>
            </Routes>
        </div>
    );
}

export default App;
