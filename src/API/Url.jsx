export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_MULTI_SEARCH_URL = 'https://api.themoviedb.org/3/search/multi'

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export const API_OPTIONS = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
};


export default API_OPTIONS;