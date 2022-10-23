import css from './MovieList.module.css';

import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";

import MovieListCard from "../movieListCard/MovieListCard";
import {movieActions} from "../../redux";
import MovieInfo from "../movieInfo/MovieInfo";



function MovieList() {

    const {movies} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState([1]);

    useEffect(() => {
        dispatch(movieActions.getAll(currentPage));
    }, [currentPage]);

    const scrollToUp = () => {
        window.scroll({
            top: 0,
            left: 0,

        });
    };

    const nextPage = (currentPage) => {

        if (currentPage >= 0) {
            setCurrentPage([currentPage[0] + 1]);
            scrollToUp();
        }
    }

    const previousPage = (currentPage) => {
        if (currentPage > 0) {
            setCurrentPage([currentPage[0] - 1]);
            scrollToUp();
        }
    }

    const {id} = useParams();


    useEffect(() => {
        dispatch(movieActions.getOneMovie(id));
    }, [id]);


    return (
        <div>
            <div className={css.genres}>
                <span className={css.decoration}><Link>Action</Link></span>
                <span><Link>Adventure</Link></span>
                <span><Link>Animation</Link></span>
                <span><Link>Comedy</Link></span>
                <span><Link>Crime</Link></span>
                <span><Link>Documentary</Link></span>
                <span><Link>Drama</Link></span>
                <span><Link>Family</Link></span>
                <span><Link>Fantasy</Link></span>
                <span><Link>History</Link></span>
                <span><Link>Horror</Link></span>
                <span><Link>Music</Link></span>
                <span><Link>Mystery</Link></span>
                <span><Link>Romance</Link></span>
                <span><Link>Science Fiction</Link></span>
                <span><Link>TV Movie</Link></span>
                <span><Link>Thriller</Link></span>
                <span><Link>War</Link></span>
                <span><Link>Western</Link></span>
            </div>
            <div>
                {movies && <MovieInfo movies={movies}/>}
            </div>
            <div className={css.grid}>
                {movies?.map(movie => <MovieListCard key={movie.id} movie={movie}/>)}
            </div>
            <div className={css.buttons}>
                <div>
                    <button disabled={currentPage[0] === 1} onClick={() => previousPage(currentPage)}>Prev</button>
                </div>
                <div>
                    <button disabled={currentPage[0] === 500} onClick={() => nextPage(currentPage)}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default MovieList;
