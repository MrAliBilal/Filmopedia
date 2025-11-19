export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_MULTI_SEARCH_URL = 'https://api.themoviedb.org/3/search/multi'
export const TMDB_MOVIE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
export const TMDB_TV_SEARCH_URL = 'https://api.themoviedb.org/3/search/tv'
export const TMDB_PEOPLE_SEARCH_URL = 'https://api.themoviedb.org/3/search/person'
export const TMDB_COMPANY_SEARCH_URL = 'https://api.themoviedb.org/3/search/company'
export const TMDB_COLLECTION_SEARCH_URL = 'https://api.themoviedb.org/3/search/collection'

export const TMDB_ANIME_SEARCH_URL = 'https://api.jikan.moe/v4/anime' // Using Jikan API for anime search

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};


export default API_OPTIONS;