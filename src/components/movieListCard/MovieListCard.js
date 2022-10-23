import css from './MovieListCard.module.css'

import {Link} from "react-router-dom";

function MovieListCard({movie}) {

    return (
        <div>
            <div className={css.cards}>
                <div>
                    <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={`${movie.title}`}/>
                    <div className={css.name}>
                        {movie.title}
                    </div>
                    <div className={css.rating}>
                        Rating: {movie.vote_average}
                    </div>
                    <div>
                        <span><Link to={movie.id.toString()}>More Info</Link></span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieListCard;
