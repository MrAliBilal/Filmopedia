import { useParams, useNavigate } from 'react-router';
import { useEffect, useState } from 'react';
import {
  Star,
  ArrowLeft,
  Clock,
  Tv,
  Calendar,
} from 'lucide-react';

import CastList from '../components/CastList';
import ProductionCompanies from '../components/ProductionCompanies';
import Loader from '../components/Loader';
import { API_OPTIONS } from '../API/Url.jsx';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FALLBACK_POSTER =
  'https://via.placeholder.com/300x450?text=No+Poster';

const FALLBACK_BACKDROP =
  'https://via.placeholder.com/1920x1080?text=No+Image';

export default function TVDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [tv, setTV] = useState(null);
  const [cast, setCast] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTVData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Fetch TV details
        const tvResponse = await fetch(
          `${TMDB_BASE_URL}/tv/${id}`,
          API_OPTIONS
        );

        if (!tvResponse.ok) {
          throw new Error('TV Show not found');
        }

        const tvData = await tvResponse.json();
        setTV(tvData);

        // Fetch cast
        const castResponse = await fetch(
          `${TMDB_BASE_URL}/tv/${id}/credits`,
          API_OPTIONS
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

    if (id) {
      fetchTVData();
    }
  }, [id]);

  if (loading) return <Loader />;

  if (error || !tv) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Error</h1>

          <p className="text-gray-400 mb-6">
            {error || 'TV Show not found'}
          </p>

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

  const backdropUrl = tv.backdrop_path
    ? `${IMAGE_BASE_URL}/original${tv.backdrop_path}`
    : FALLBACK_BACKDROP;

  const posterUrl = tv.poster_path
    ? `${IMAGE_BASE_URL}/w500${tv.poster_path}`
    : FALLBACK_POSTER;

  const formatRuntime = (minutes) => {
    if (!minutes) return 'N/A';

    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`;
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
      {/* Backdrop */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">
        <img
          src={backdropUrl}
          alt={tv.name}
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
              alt={tv.name}
              className="w-full rounded-lg shadow-2xl"
            />
          </div>

          {/* TV Info */}
          <div className="md:col-span-3 text-white">

            {/* Title */}
            <div className="mb-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2">
                {tv.name}
              </h1>

              <p className="text-gray-400 text-lg">
                {tv.status} • {formatDate(tv.first_air_date)}
              </p>
            </div>

            {/* Tagline */}
            {tv.tagline && (
              <p className="italic text-gray-300 mb-4 text-lg">
                "{tv.tagline}"
              </p>
            )}

            {/* Rating */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-lg font-bold">
                <Star size={20} fill="currentColor" />

                {tv.vote_average?.toFixed(1)}/10
              </div>

              <p className="text-gray-400">
                ({tv.vote_count?.toLocaleString()} votes)
              </p>
            </div>

            {/* Genres */}
            <div className="flex flex-wrap gap-2 mb-6">
              {tv.genres?.map((genre) => (
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
              <h2 className="text-2xl font-bold mb-3">
                Overview
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {tv.overview}
              </p>
            </div>

            {/* Info Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">

              {/* Runtime */}
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Episode Runtime
                </h3>

                <p className="text-xl flex items-center gap-2">
                  <Clock size={20} className="text-red-600" />

                  {tv.episode_run_time?.length > 0
                    ? formatRuntime(tv.episode_run_time[0])
                    : 'N/A'}
                </p>
              </div>

              {/* Seasons */}
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Seasons
                </h3>

                <p className="text-xl flex items-center gap-2">
                  <Tv size={20} className="text-blue-500" />

                  {tv.number_of_seasons || 'N/A'}
                </p>
              </div>

              {/* Episodes */}
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Episodes
                </h3>

                <p className="text-xl">
                  {tv.number_of_episodes || 'N/A'}
                </p>
              </div>

              {/* Last Air Date */}
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Last Air Date
                </h3>

                <p className="text-xl flex items-center gap-2">
                  <Calendar
                    size={20}
                    className="text-green-500"
                  />

                  {formatDate(tv.last_air_date)}
                </p>
              </div>

              {/* Language */}
              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Language
                </h3>

                <p className="text-xl">
                  {tv.original_language?.toUpperCase() || 'N/A'}
                </p>
              </div>
            </div>

            {/* Homepage */}
            {tv.homepage && (
              <a
                href={tv.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-6 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
              >
                Visit Official Website
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Cast */}
      {cast.length > 0 && (
        <CastList cast={cast} />
      )}

      {/* Production Companies */}
      {tv.production_companies?.length > 0 && (
        <ProductionCompanies
          companies={tv.production_companies}
        />
      )}
    </div>
  );
}