import axios from "axios"
import fetch from "node-fetch";

const BASE_URL = "https://yts.am/api/v2/";
const LIST_MOVIES_URL = `${BASE_URL}list_movies.json`;
const MOVIE_DETAILS_URL = `${BASE_URL}movie_details.json`;
const MOVIE_SUGGESTIONS_URL = `${BASE_URL}movie_suggestions.json`;

export const getMovies = async (limit, rating) => {
    const {data: {data: {movies}}} = await axios(LIST_MOVIES_URL, {
        params: {limit, minimum_rating: rating}
    });
    return movies
}

export const getMovie = async movieId => {
    const {data: {data: {movie}}} = await axios(MOVIE_DETAILS_URL, {
        params: {movie_id: movieId}
    })
    return movie
}

export const getSuggestionsCount = async movieId => {
    const {data: {data: {movie_count}}} = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {movie_id: movieId}
    })
    return movie_count
}

export const getSuggestions = async (movieId) => {
    const {data: {data: {movies}}} = await axios(MOVIE_SUGGESTIONS_URL, {
        params: {movie_id: movieId}
    })
    return movies
}

// export const getById = id => {
//     const filteredMovies = movies.filter(movie => id === movie.id)
//     return filteredMovies[0]
// }

// export const getMovies = () => movies;

// export const deleteMovie = id => {
//     const cleanedMovies = movies.filter(movie => movie.id !== id)
//     if (cleanedMovies.length < movies.length) {
//         movies = cleanedMovies
//         return true
//     } else {
//         return false
//     }
// }

// export const addMovie = (name, score) => {
//     const newMovie = {
//         id: `${movies.length + 1}`,
//         name: name,
//         score: score
//     }
//     movies.push(newMovie)
//     return newMovie
// }