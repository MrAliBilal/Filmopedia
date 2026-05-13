import { Link } from 'react-router';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FALLBACK_PROFILE =
  'https://via.placeholder.com/300x450?text=No+Image';

export default function CastList({ cast }) {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-12">
      <h2 className="text-3xl font-bold text-white mb-6">
        Cast
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">

        {cast.map((actor) => {
          const profileImage = actor.profile_path
            ? `${IMAGE_BASE_URL}/w500${actor.profile_path}`
            : FALLBACK_PROFILE;

          return (
            <Link
              key={actor.id}
              to={`/person/${actor.id}`}
              className="bg-gray-800 rounded-xl overflow-hidden hover:scale-105 transition duration-300 group"
            >
              <img
                src={profileImage}
                alt={actor.name}
                className="w-full h-[320px] object-cover group-hover:scale-110 transition duration-500"
              />

              <div className="p-4">
                <h3 className="text-white font-bold line-clamp-1">
                  {actor.name}
                </h3>

                <p className="text-gray-400 text-sm line-clamp-1">
                  {actor.character}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}