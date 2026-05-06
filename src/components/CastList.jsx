const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const FALLBACK_AVATAR = 'https://via.placeholder.com/200x300?text=No+Image';

export default function CastList({ cast }) {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-white mb-8">Cast</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {cast.map((actor) => (
          <div
            key={actor.id}
            className="group cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <div className="relative overflow-hidden rounded-lg mb-3 shadow-xl">
              <img
                src={
                  actor.profile_path
                    ? `${IMAGE_BASE_URL}/w500${actor.profile_path}`
                    : FALLBACK_AVATAR
                }
                alt={actor.name}
                className="w-full h-64 object-cover group-hover:brightness-75 transition"
              />
            </div>

            <h3 className="text-white font-semibold truncate group-hover:text-red-500 transition">
              {actor.name}
            </h3>
            <p className="text-gray-400 text-sm truncate">
              {actor.character || 'Unknown Character'}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}