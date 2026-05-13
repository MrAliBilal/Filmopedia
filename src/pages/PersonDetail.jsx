import { useParams, useNavigate, Link } from 'react-router';
import { useEffect, useState } from 'react';

import {
  ArrowLeft,
  Star,
  Calendar,
  MapPin,
  Film,
} from 'lucide-react';

import Loader from '../components/Loader';
import { API_OPTIONS } from '../API/Url.jsx';

const TMDB_BASE_URL = 'https://api.themoviedb.org/3';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FALLBACK_PROFILE =
  'https://via.placeholder.com/500x750?text=No+Image';

export default function PersonDetail() {
  const { id } = useParams();

  const navigate = useNavigate();

  const [person, setPerson] = useState(null);

  const [credits, setCredits] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPersonData = async () => {
      try {
        setLoading(true);

        setError(null);

        const personResponse = await fetch(
          `${TMDB_BASE_URL}/person/${id}`,
          API_OPTIONS
        );

        if (!personResponse.ok) {
          throw new Error('Person not found');
        }

        const personData = await personResponse.json();

        setPerson(personData);


        const creditsResponse = await fetch(
          `${TMDB_BASE_URL}/person/${id}/combined_credits`,
          API_OPTIONS
        );

        if (creditsResponse.ok) {
          const creditsData =
            await creditsResponse.json();


          const sortedCredits =
            creditsData.cast
              ?.sort(
                (a, b) =>
                  b.popularity - a.popularity
              )
              .slice(0, 20) || [];

          setCredits(sortedCredits);
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchPersonData();
    }
  }, [id]);

  if (loading) return <Loader />;

  if (error || !person) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            Error
          </h1>

          <p className="text-gray-400 mb-6">
            {error || 'Person not found'}
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

  const profileImage = person.profile_path
    ? `${IMAGE_BASE_URL}/w500${person.profile_path}`
    : FALLBACK_PROFILE;

  const formatDate = (date) => {
    if (!date) return 'N/A';

    return new Date(date).toLocaleDateString(
      'en-US',
      {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }
    );
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">


      <div className="max-w-7xl mx-auto px-4 pt-6">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg transition"
        >
          <ArrowLeft size={20} />
          Back
        </button>
      </div>


      <div className="max-w-7xl mx-auto px-4 py-10">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">


          <div className="md:col-span-1">
            <img
              src={profileImage}
              alt={person.name}
              className="w-full rounded-xl shadow-2xl"
            />
          </div>


          <div className="md:col-span-3">

            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              {person.name}
            </h1>


            <div className="flex flex-wrap gap-4 mb-6">

              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                <Film size={18} className="text-red-500" />

                {person.known_for_department}
              </div>

              <div className="flex items-center gap-2 bg-gray-800 px-4 py-2 rounded-lg">
                <Star size={18} className="text-yellow-400" />

                Popularity:
                {person.popularity?.toFixed(1)}
              </div>
            </div>


            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-3">
                Biography
              </h2>

              <p className="text-gray-300 leading-relaxed whitespace-pre-line">
                {person.biography ||
                  'No biography available.'}
              </p>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Birthday
                </h3>

                <p className="text-xl flex items-center gap-2">
                  <Calendar
                    size={18}
                    className="text-blue-500"
                  />

                  {formatDate(person.birthday)}
                </p>
              </div>


              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Place of Birth
                </h3>

                <p className="text-xl flex items-center gap-2">
                  <MapPin
                    size={18}
                    className="text-green-500"
                  />

                  {person.place_of_birth || 'N/A'}
                </p>
              </div>


              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Gender
                </h3>

                <p className="text-xl">
                  {person.gender === 1
                    ? 'Female'
                    : person.gender === 2
                    ? 'Male'
                    : 'Not Specified'}
                </p>
              </div>


              <div>
                <h3 className="text-gray-400 text-sm uppercase tracking-wide mb-2">
                  Known Credits
                </h3>

                <p className="text-xl">
                  {credits.length}
                </p>
              </div>
            </div>
          </div>
        </div>


        {credits.length > 0 && (
          <div className="mt-16">

            <h2 className="text-3xl font-bold mb-8">
              Known For
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

              {credits.map((item) => {
                const poster = item.poster_path
                  ? `${IMAGE_BASE_URL}/w500${item.poster_path}`
                  : FALLBACK_PROFILE;

                const title =
                  item.title || item.name;

                const mediaType =
                  item.media_type;

                return (
                  <Link
                    key={`${mediaType}-${item.id}`}
                    to={
                      mediaType === 'movie'
                        ? `/movie/${item.id}`
                        : `/tv/${item.id}`
                    }
                    className="group bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300"
                  >

                    <div className="overflow-hidden">
                      <img
                        src={poster}
                        alt={title}
                        className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>


                    <div className="p-4">

                      <h3 className="font-bold line-clamp-2 mb-2">
                        {title}
                      </h3>

                      <p className="text-sm text-gray-400 capitalize">
                        {mediaType}
                      </p>

                      <p className="text-sm text-gray-500 mt-1">
                        {item.character ||
                          item.job}
                      </p>
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