import { useParams, useNavigate, Link } from 'react-router';
import { useEffect, useState } from 'react';
import { ArrowLeft, Star, Calendar } from 'lucide-react';

import Loader from '../components/Loader';
import { API_OPTIONS } from '../API/Url.jsx';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FALLBACK_BACKDROP =
  'https://via.placeholder.com/1920x1080?text=No+Backdrop';

const FALLBACK_POSTER =
  'https://via.placeholder.com/300x450?text=No+Poster';

export default function CollectionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [collection, setCollection] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCollection = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `${TMDB_BASE_URL}/collection/${id}`,
          API_OPTIONS
        );

        if (!response.ok) {
          throw new Error('Collection not found');
        }

        const data = await response.json();

        // Sort movies by release date
        data.parts = data.parts?.sort(
          (a, b) =>
            new Date(a.release_date) -
            new Date(b.release_date)
        );

        setCollection(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCollection();
    }
  }, [id]);

  if (loading) return <Loader />;

  if (error || !collection) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Error
          </h1>

          <p className="text-gray-400 mb-6">
            {error || 'Collection not found'}
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

  const backdropUrl = collection.backdrop_path
    ? `${IMAGE_BASE_URL}/original${collection.backdrop_path}`
    : FALLBACK_BACKDROP;

  const posterUrl = collection.poster_path
    ? `${IMAGE_BASE_URL}/w500${collection.poster_path}`
    : FALLBACK_POSTER;

  const formatDate = (date) => {
    if (!date) return 'N/A';

    return new Date(date).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Backdrop */}
      <div className="relative h-96 md:h-[500px] overflow-hidden">

        <img
          src={backdropUrl}
          alt={collection.name}
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/60 to-gray-900" />

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-6 left-6 flex items-center gap-2 px-4 py-2 bg-black/50 hover:bg-black/70 rounded-lg backdrop-blur-sm transition z-10"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20 pb-16">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">

          {/* Poster */}
          <div className="md:col-span-1">
            <img
              src={posterUrl}
              alt={collection.name}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>

          {/* Collection Info */}
          <div className="md:col-span-3">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {collection.name}
            </h1>

            <p className="text-gray-300 leading-relaxed mb-6">
              {collection.overview || 'No overview available.'}
            </p>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 mb-8">

              <div className="bg-gray-800 px-4 py-2 rounded-lg">
                <span className="text-gray-400 text-sm">
                  Movies
                </span>

                <p className="text-xl font-bold">
                  {collection.parts?.length || 0}
                </p>
              </div>
            </div>

            {/* Movies List */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Movies in Collection
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">

                {collection.parts?.map((movie) => {
                  const moviePoster = movie.poster_path
                    ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
                    : FALLBACK_POSTER;

                  return (
                    <Link
                      key={movie.id}
                      to={`/movie/${movie.id}`}
                      className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
                    >
                      {/* Poster */}
                      <div className="relative overflow-hidden">
                        <img
                          src={moviePoster}
                          alt={movie.title}
                          className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                        />

                        {/* Rating */}
                        <div className="absolute top-2 right-2 bg-black/80 px-2 py-1 rounded flex items-center gap-1 text-sm">
                          <Star
                            size={14}
                            className="text-yellow-400"
                            fill="currentColor"
                          />

                          {movie.vote_average?.toFixed(1)}
                        </div>
                      </div>

                      {/* Info */}
                      <div className="p-4">

                        <h3 className="font-bold text-lg line-clamp-2 mb-2">
                          {movie.title}
                        </h3>

                        <div className="flex items-center gap-2 text-gray-400 text-sm mb-2">
                          <Calendar size={14} />

                          {formatDate(movie.release_date)}
                        </div>

                        <p className="text-sm text-gray-300 line-clamp-3">
                          {movie.overview || 'No overview available.'}
                        </p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}