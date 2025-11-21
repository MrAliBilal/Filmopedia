export const TMDB_BASE_URL = 'https://api.themoviedb.org/3'
export const TMDB_MULTI_SEARCH_URL = 'https://api.themoviedb.org/3/search/multi'
export const TMDB_MOVIE_SEARCH_URL = 'https://api.themoviedb.org/3/search/movie'
export const TMDB_TV_SEARCH_URL = 'https://api.themoviedb.org/3/search/tv'
export const TMDB_PEOPLE_SEARCH_URL = 'https://api.themoviedb.org/3/search/person'
export const TMDB_COMPANY_SEARCH_URL = 'https://api.themoviedb.org/3/search/company'
export const TMDB_COLLECTION_SEARCH_URL = 'https://api.themoviedb.org/3/search/collection'
export const TMDB_POPULAR_MOVIES_URL = 'https://api.themoviedb.org/3/movie/popular'
export const TMDB_NOW_PLAYING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/now_playing'
export const TMDB_TOP_RATED_MOVIES_URL = 'https://api.themoviedb.org/3/movie/top_rated'
export const TMDB_UPCOMING_MOVIES_URL = 'https://api.themoviedb.org/3/movie/upcoming'
export const TMDB_POPULAR_TV_URL = 'https://api.themoviedb.org/3/tv/popular'
export const TMDB_AIRING_TODAY_TV_URL = 'https://api.themoviedb.org/3/tv/airing_today'
export const TMDB_TOP_RATED_TV_URL = 'https://api.themoviedb.org/3/tv/top_rated'
export const TMDB_ON_THE_AIR_TV_URL = 'https://api.themoviedb.org/3/tv/on_the_air'
export const TMDB_POPULAR_ANIME_URL =
  'https://api.themoviedb.org/3/discover/tv?with_genres=16&with_origin_country=JP&include_adult=false&sort_by=popularity.desc';

export const TMDB_TOP_RATED_ANIME_URL =
  'https://api.themoviedb.org/3/discover/tv?with_genres=16&with_origin_country=JP&sort_by=vote_average.desc&vote_count.gte=200';

export const TMDB_AIRING_TODAY_ANIME_URL =
  'https://api.themoviedb.org/3/discover/tv?with_genres=16&with_origin_country=JP&with_status=3&sort_by=first_air_date.desc';

export const TMDB_ON_THE_AIR_ANIME_URL =
  'https://api.themoviedb.org/3/discover/tv?with_genres=16&with_origin_country=JP&first_air_date.gte=2025-01-24&sort_by=first_air_date.asc';

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