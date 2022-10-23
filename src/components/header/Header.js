import css from './Header.module.css';

import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";

import {movieActions} from "../../redux";


function Header() {


    const {movies, query} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    const {handleSubmit, register} = useForm();

    useEffect(() => {
        dispatch(movieActions.getSearchMovie(query));
    }, [query]);

    const search = (data) => {
        if ((data.query[0] === ' ' || '') && (data.query[1] !== ' ' || '')) {
            data.query = data.query.substr(1);
            dispatch(movieActions.makeQuery({data}));
        } else if (data.query.length === 0 || data.query[0] === ' ') {
            alert('Хибний запит');
        } else if (data.query[0] !== ' ' || '') {
            dispatch(movieActions.makeQuery({data}));
        }
    }

    return (

        <div className={css.header}>
            <div className={css.logo}></div>
            <div>
                <form onSubmit={handleSubmit(search)}>
                    <label>
                        <input {...register('query')} type="search" className={css.search} placeholder={"Search..."}/>
                    </label>
                </form>
            </div>
            <div className={css.photo}>
                <h1>doc</h1>
            </div>
        </div>
    );
}

export default Header;
