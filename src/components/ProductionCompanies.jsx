import { Link } from 'react-router';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

const FALLBACK_LOGO =
  'https://via.placeholder.com/500x300?text=No+Logo';

export default function ProductionCompanies({
  companies,
}) {
  return (
    <div className="max-w-7xl mx-auto px-4 pb-16">
      <h2 className="text-3xl font-bold text-white mb-6">
        Production Companies
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">

        {companies.map((company) => {
          const logo = company.logo_path
            ? `${IMAGE_BASE_URL}/w500${company.logo_path}`
            : FALLBACK_LOGO;

          return (
            <Link
              key={company.id}
              to={`/company/${company.id}`}
              className="bg-gray-800 rounded-xl p-4 hover:bg-gray-700 transition duration-300 flex flex-col items-center justify-center"
            >
              <div className="bg-white rounded-lg p-4 w-full h-32 flex items-center justify-center mb-4">
                <img
                  src={logo}
                  alt={company.name}
                  className="max-h-full object-contain"
                />
              </div>

              <h3 className="text-white font-semibold text-center line-clamp-2">
                {company.name}
              </h3>

              <p className="text-gray-400 text-sm mt-1">
                {company.origin_country || 'N/A'}
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}