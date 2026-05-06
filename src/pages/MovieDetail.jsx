import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import { Star, ArrowLeft, Clock, DollarSign } from 'lucide-react';
import CastList from '../components/CastList';
import ProductionCompanies from '../components/ProductionCompanies';
import Loader from '../components/Loader';
import { API_OPTIONS } from '../API/Url.jsx';


const TMDB_API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const FALLBACK_POSTER = 'https://via.placeholder.com/300x450?text=No+Poster';
const FALLBACK_BACKDROP = 'https://via.placeholder.com/1920x1080?text=No+Image';

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch movie details
        const movieResponse = await fetch(
          `${TMDB_BASE_URL}/movie/${id}`, API_OPTIONS
        );
        if (!movieResponse.ok) throw new Error('Movie not found');
        const movieData = await movieResponse.json();
        setMovie(movieData);

        // Fetch cast
        const castResponse = await fetch(
          `${TMDB_BASE_URL}/movie/${id}/credits`, API_OPTIONS
        );
        if (castResponse.ok) {
          const castData = await castResponse.json();
          setCast(castData.cast?.slice(0, 10) || []);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) fetchMovieData();
  }, [id]);

  if (loading) return <Loader />;

  if (error || !movie) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Error</h1>
          <p className="text-gray-400 mb-6">{error || 'Movie not found'}</p>
          <button
            onClick={() => navigate(-1)}
            className="px-6 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  const backdropUrl = movie.backdrop_path
    ? `${IMAGE_BASE_URL}/original${movie.backdrop_path}`
    : FALLBACK_BACKDROP;

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
    : FALLBACK_POSTER;

  const formatRuntime = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours}h ${mins}m`;
  };

  const formatBudget = (num) => {
    if (!num || num === 0) return 'N/A';
    return `$${num.toLocaleString()}`;
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'N/A';
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Backdrop Section */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={backdropUrl}
          alt={movie.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 rounded-lg text-white transition backdrop-blur-sm z-10"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Poster */}
          <div className="md:col-span-1">
            <img
              src={posterUrl}
              alt={movie.title}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* Movie Info */}
          <div className="md:col-span-3 text-white">
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {movie.title}
              </h1>
              <p className="text-gray-400 text-lg">
                {movie.status} • {formatDate(movie.release_date)}
              </p>
            </div>

            {/* Tagline */}
            {movie.tagline && (
              <p className="italic text-gray-300 mb-4 text-lg">
                "{movie.tagline}"
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
                <Star size={20} fill="currentColor" />
                {movie.vote_average?.toFixed(1)}/10
              </div>
              <p className="text-gray-400">
                ({movie.vote_count?.toLocaleString()} votes)
              </p>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {movie.genres?.map((genre) => (
                <span
                  key={genre.id}
                  className="px-3 py-1 bg-red-600 text-white rounded-full text-sm font-medium"
                >
                  {genre.name}
                </span>
              ))}
            </div>

            {/* Overview */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3">Overview</h2>
              <p className="text-gray-300 leading-relaxed">
                {movie.overview}
              </p>
            </div>

            {/* Key Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Runtime
                </h3>
                <p className="text-xl flex items-center gap-2">
                  <Clock size={20} className="text-red-600" />
                  {movie.runtime ? formatRuntime(movie.runtime) : 'N/A'}
                </p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Language
                </h3>
                <p className="text-xl">
                  {movie.original_language?.toUpperCase() || 'N/A'}
                </p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Budget
                </h3>
                <p className="text-xl flex items-center gap-2">
                  <DollarSign size={20} className="text-green-500" />
                  {formatBudget(movie.budget)}
                </p>
              </div>

              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Revenue
                </h3>
                <p className="text-xl flex items-center gap-2">
                  <DollarSign size={20} className="text-green-500" />
                  {formatBudget(movie.revenue)}
                </p>
              </div>
            </div>

            {/* IMDb Link */}
            {movie.imdb_id && (
              <a
                href={`https://www.imdb.com/title/${movie.imdb_id}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-yellow-500 text-black font-bold rounded-lg hover:bg-yellow-600 transition"
              >
                View on IMDb
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Cast Section */}
      {cast.length > 0 && <CastList cast={cast} />}

      {/* Production Companies */}
      {movie.production_companies?.length > 0 && (
        <ProductionCompanies companies={movie.production_companies} />
      )}
    </div>
  );
}