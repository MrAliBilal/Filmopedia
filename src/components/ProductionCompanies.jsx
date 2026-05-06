const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';

export default function ProductionCompanies({ companies }) {
  const companiesWithLogos = companies.filter((c) => c.logo_path);

  if (companiesWithLogos.length === 0) {
    return null;
  }

  return (
    <section className="max-w-7xl mx-auto px-4 py-12 border-t border-gray-700">
      <h2 className="text-3xl font-bold text-white mb-8">Production Companies</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {companiesWithLogos.map((company) => (
          <div
            key={company.id}
            className="flex flex-col items-center justify-center p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition group"
          >
            <img
              src={`${IMAGE_BASE_URL}/w200${company.logo_path}`}
              alt={company.name}
              className="h-24 object-contain mb-3 group-hover:brightness-125 transition"
            />
            <p className="text-white text-sm text-center truncate hover:text-red-500 transition">
              {company.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}