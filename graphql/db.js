import axios from "axios";
const BASE_URI = "https://yts.mx/api/v2/";
const LIST_MOVIES_URI = `${BASE_URI}list_movies.json`;
const MOVIE_DETAILS_URI =`${BASE_URI}movie_details.json`;
const MOVIE_SUGGESTIONS_URI = `${BASE_URI}movie_suggestions.json`;

export const getMovies = async (limit,rating) => {
    const{
        data:{
            data:{movies}
        }
    } = await axios(LIST_MOVIES_URI,{
        params:{
            limit,
            minimum_rating : rating
        }
    });
    
    return movies;
};

export const getMovie = async id => {
    const {
        data:{
            data:{ movie } 
        }
    } = await axios(MOVIE_DETAILS_URI, {
        params: {
            movie_id : id
        }
    });
    return movie;
};

export const getSuggestions = async id => {
    const {
        data: {
            data: {movies}
        }
    } = await axios(MOVIE_SUGGESTIONS_URI, {
        params: {
            movie_id: id
        }
    });
    return movies;
};