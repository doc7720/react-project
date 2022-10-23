import {axiosService} from "./axios.service";
import {urls} from "../configs";


const movieService = {
    getAll: (pageNumber) => axiosService.get(urls.movie + `?page=${pageNumber}`),
    getMovieSearch: (query) => axiosService.get(urls.search + `?query=${query}`),
    getOneMovie: (id) => axiosService.get(urls.filmId + `/${id}`),
}

export {movieService}