import {getMovies, getMovie, getSuggestions, getSuggestionsCount} from './db'

const resolvers = {
    Query: {
        movies: (_, {limit, rating}) => getMovies(limit, rating),
        movie: (_, {movieId}) => getMovie(movieId),
        suggestions: (_, {movieId}) => getSuggestions(movieId),
        suggestionsCount: (_, {movieId}) => getSuggestionsCount(movieId)
    }
}

export default resolvers