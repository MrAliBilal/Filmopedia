import { TMDB_MULTI_SEARCH_URL, TMDB_MOVIE_SEARCH_URL, TMDB_TV_SEARCH_URL,TMDB_PEOPLE_SEARCH_URL,TMDB_COMPANY_SEARCH_URL, TMDB_COLLECTION_SEARCH_URL,
  TMDB_POPULAR_MOVIES_URL,TMDB_NOW_PLAYING_MOVIES_URL, TMDB_TOP_RATED_MOVIES_URL, TMDB_UPCOMING_MOVIES_URL, 
  TMDB_POPULAR_TV_URL, TMDB_AIRING_TODAY_TV_URL, TMDB_TOP_RATED_TV_URL, TMDB_ON_THE_AIR_TV_URL, 
  TMDB_POPULAR_ANIME_URL ,TMDB_TOP_RATED_ANIME_URL ,TMDB_AIRING_TODAY_ANIME_URL, TMDB_ON_THE_AIR_ANIME_URL,
  API_OPTIONS as options } from '../API/Url.jsx';

export async function allSearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const page = url.searchParams.get('page') || '1';

  if (!query) return { results: [], total_pages: 1 };

  const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });
  const data = await res.json();
  return { results: data.results || [], total_pages: data.total_pages || 1, page: parseInt(page, 10) };
}

export async function movieSearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const page = url.searchParams.get('page') || '1';

  if (!query) return { results: [], total_pages: 1 };

  const searchUrl = `${TMDB_MOVIE_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });
  const data = await res.json();
  return { results: data.results || [], total_pages: data.total_pages || 1, page: parseInt(page, 10) };
}

export async function tvSearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const page = url.searchParams.get('page') || '1';

  if (!query) return { results: [], total_pages: 1 };

  const searchUrl = `${TMDB_TV_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });
  const data = await res.json();
  return { results: data.results || [], total_pages: data.total_pages || 1, page: parseInt(page, 10) };
}

export async function peopleSearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const page = url.searchParams.get('page') || '1';

  if (!query) return { results: [], total_pages: 1 };

  const searchUrl = `${TMDB_PEOPLE_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });
  const data = await res.json();
  return { results: data.results || [], total_pages: data.total_pages || 1, page: parseInt(page, 10) };
}

export async function animeSearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get("query") || "";
  const page = url.searchParams.get("page") || "1";

  // If no query, return empty list
  if (!query) return { results: [], total_pages: 1, page: 1 };

  const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response("Failed to fetch", { status: res.status });

  const data = await res.json();

  // ⭐ FILTER FOR ANIME ⭐
  const animeResults = (data.results || []).filter((item) => {
    // Anime is usually animation (16) + Japanese origin
    const isTVOrMovie = item.media_type === "tv" || item.media_type === "movie";
    const isAnimation = item.genre_ids?.includes(16);
    const isJapanese = item.origin_country?.includes("JP");

    return isTVOrMovie && (isAnimation || isJapanese);
  });

  return {
    results: animeResults,
    total_pages: data.total_pages || 1,
    page: parseInt(page, 10),
  };
}

export async function collectionSearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const page = url.searchParams.get('page') || '1';

  if (!query) return { results: [], total_pages: 1 };

  const searchUrl = `${TMDB_COLLECTION_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });
  const data = await res.json();
  return { results: data.results || [], total_pages: data.total_pages || 1, page: parseInt(page, 10) };
}

export async function companySearchLoader({ request }) {
  const url = new URL(request.url);
  const query = url.searchParams.get('query') || '';
  const page = url.searchParams.get('page') || '1';

  if (!query) return { results: [], total_pages: 1 };

  const searchUrl = `${TMDB_COMPANY_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`;

  const res = await fetch(searchUrl, options);
  if (!res.ok) throw new Response('Failed to fetch', { status: res.status });
  const data = await res.json();
  return { results: data.results || [], total_pages: data.total_pages || 1, page: parseInt(page, 10) };
}

export async function moviesLoader() {
  const urls = {
    popular: TMDB_POPULAR_MOVIES_URL,
    nowPlaying: TMDB_NOW_PLAYING_MOVIES_URL,
    topRated: TMDB_TOP_RATED_MOVIES_URL,
    upcoming: TMDB_UPCOMING_MOVIES_URL,
  };

  // Execute all fetch requests in parallel
  const responses = await Promise.all([
    fetch(urls.popular, options),
    fetch(urls.nowPlaying, options),
    fetch(urls.topRated, options),
    fetch(urls.upcoming, options),
  ]);

  // Check if any failed
  responses.forEach((res) => {
    if (!res.ok) throw new Response("Failed to fetch movies", { status: res.status });
  });

  // Parse JSON in parallel
  const [popular, nowPlaying, topRated, upcoming] = await Promise.all(
    responses.map((r) => r.json())
  );

  // Return structured data
  return {
    popular: popular.results,
    nowPlaying: nowPlaying.results,
    topRated: topRated.results,
    upcoming: upcoming.results,
  };
}

export async function tvLoader() {
  const urls = {
    popular: TMDB_POPULAR_TV_URL,
    airingToday: TMDB_AIRING_TODAY_TV_URL,
    topRated: TMDB_TOP_RATED_TV_URL,
    onTheAir: TMDB_ON_THE_AIR_TV_URL,
  };

  // Fetch all TV endpoints in parallel
  const responses = await Promise.all([
    fetch(urls.popular, options),
    fetch(urls.airingToday, options),
    fetch(urls.topRated, options),
    fetch(urls.onTheAir, options),
  ]);

  // Check for any errors
  responses.forEach((res) => {
    if (!res.ok) {
      throw new Response("Failed to fetch TV shows", {
        status: res.status,
      });
    }
  });

  // Parse all responses together
  const [
    popular,
    airingToday,
    topRated,
    onTheAir
  ] = await Promise.all(responses.map((r) => r.json()));

  // Return structured object
  return {
    popular: popular.results,
    airingToday: airingToday.results,
    topRated: topRated.results,
    onTheAir: onTheAir.results,
  };
}

export async function animeLoader() {
  const urls = {
    popular: TMDB_POPULAR_ANIME_URL,
    topRated: TMDB_TOP_RATED_ANIME_URL,
    airingToday: TMDB_AIRING_TODAY_ANIME_URL,
    onTheAir: TMDB_ON_THE_AIR_ANIME_URL,
  };

  // Fetch all Anime categories in parallel
  const responses = await Promise.all([
    fetch(urls.popular, options),
    fetch(urls.topRated, options),
    fetch(urls.airingToday, options),
    fetch(urls.onTheAir, options),
  ]);

  // Validation
  responses.forEach((res) => {
    if (!res.ok) {
      throw new Response("Failed to fetch Anime", { status: res.status });
    }
  });

  // Parse JSON
  const [
    popular,
    topRated,
    airingToday,
    onTheAir
  ] = await Promise.all(responses.map((res) => res.json()));

  // Return structured Anime data
  return {
    popular: popular.results,
    topRated: topRated.results,
    airingToday: airingToday.results,
    onTheAir: onTheAir.results,
  };
}

export default allSearchLoader