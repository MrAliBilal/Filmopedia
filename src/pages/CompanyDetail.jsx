import { useParams, useNavigate, Link } from 'react-router';
import { useEffect, useState } from 'react';

import {
  ArrowLeft,
  MapPin,
  Building2,
  Star,
} from 'lucide-react';

import Loader from '../components/Loader';
import { API_OPTIONS } from '../API/Url.jsx';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FALLBACK_LOGO =
  'https://via.placeholder.com/500x300?text=No+Logo';

const FALLBACK_POSTER =
  'https://via.placeholder.com/300x450?text=No+Poster';

export default function CompanyDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [company, setCompany] = useState(null);

  const [movies, setMovies] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCompanyData = async () => {
      try {
        setLoading(true);

        setError(null);

        // Company Details
        const companyResponse = await fetch(
          `${TMDB_BASE_URL}/company/${id}`,
          API_OPTIONS
        );

        if (!companyResponse.ok) {
          throw new Error('Company not found');
        }

        const companyData =
          await companyResponse.json();

        setCompany(companyData);

        // Movies By Company
        const moviesResponse = await fetch(
          `${TMDB_BASE_URL}/discover/movie?with_companies=${id}&sort_by=popularity.desc`,
          API_OPTIONS
        );

        if (moviesResponse.ok) {
          const moviesData =
            await moviesResponse.json();

          setMovies(
            moviesData.results?.slice(0, 20) || []
          );
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchCompanyData();
    }
  }, [id]);

  if (loading) return <Loader />;

  if (error || !company) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Error
          </h1>

          <p className="text-gray-400 mb-6">
            {error || 'Company not found'}
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

  const logoUrl = company.logo_path
    ? `${IMAGE_BASE_URL}/w500${company.logo_path}`
    : FALLBACK_LOGO;

  return (
    <div className="min-h-screen bg-gray-900 text-white">

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 pt-6">

        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Logo */}
          <div className="md:col-span-1">

            <div className="bg-white rounded-xl p-6 shadow-2xl">
              <img
                src={logoUrl}
                alt={company.name}
                className="w-full object-contain"
              />
            </div>
          </div>

          {/* Company Info */}
          <div className="md:col-span-3">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              {company.name}
            </h1>

            {/* Info Cards */}
            <div className="flex flex-wrap gap-4 mb-8">

              {/* Headquarters */}
              {company.headquarters && (
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-lg">
                  <MapPin
                    size={18}
                    className="text-green-500"
                  />

                  {company.headquarters}
                </div>
              )}

              {/* Country */}
              {company.origin_country && (
                <div className="flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-lg">
                  <Building2
                    size={18}
                    className="text-blue-500"
                  />

                  {company.origin_country}
                </div>
              )}

              {/* Movies Count */}
              <div className="flex items-center gap-2 bg-gray-800 px-4 py-3 rounded-lg">
                <Star
                  size={18}
                  className="text-yellow-400"
                />

                {movies.length} Popular Movies
              </div>
            </div>

            {/* Description */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h2 className="text-2xl font-bold mb-4">
                About
              </h2>

              <p className="text-gray-300 leading-relaxed">
                {company.description ||
                  `${company.name} is a production company listed on TMDB.`}
              </p>
            </div>

            {/* Homepage */}
            {company.homepage && (
              <a
                href={company.homepage}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-bold transition"
              >
                Visit Official Website
              </a>
            )}
          </div>
        </div>

        {/* Movies */}
        {movies.length > 0 && (
          <div className="mt-16">

            <h2 className="text-3xl font-bold mb-8">
              Popular Movies
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {movies.map((movie) => {
                const poster = movie.poster_path
                  ? `${IMAGE_BASE_URL}/w500${movie.poster_path}`
                  : FALLBACK_POSTER;

                return (
                  <Link
                    key={movie.id}
                    to={`/movie/${movie.id}`}
                    className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
                  >
                    {/* Poster */}
                    <div className="overflow-hidden">
                      <img
                        src={poster}
                        alt={movie.title}
                        className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>

                    {/* Info */}
                    <div className="p-4">

                      <h3 className="font-bold line-clamp-2 mb-2">
                        {movie.title}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-yellow-400">
                        <Star
                          size={14}
                          fill="currentColor"
                        />

                        {movie.vote_average?.toFixed(1)}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}