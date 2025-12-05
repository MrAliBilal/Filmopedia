
const Documentation = () => {
  return (
    <section className="px-6 md:px-20 py-10 pt-22 text-white bg-[#0B0F17] min-h-screen">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-bold text-amber-400">
        Filmopedia Documentation
      </h1>
      <p className="mt-3 text-gray-300 max-w-3xl">
        A modern entertainment discovery platform built with React, React Router,
        Vite, Tailwind CSS, and powered by The Movie Database (TMDB) API.
      </p>

      {/* Links */}
      <div className="mt-6 flex flex-col md:flex-row gap-4">
        <a
          href="https://filmopedia-demo.vercel.app"
          target="_blank"
          className="px-4 py-2 bg-amber-500 hover:bg-amber-600 rounded-lg font-medium"
        >
          🔗 Live Demo
        </a>
        <a
          href="https://github.com/MrAliBilal/Filmopedia"
          target="_blank"
          className="px-4 py-2 bg-gray-700 hover:bg-gray-800 rounded-lg font-medium"
        >
          💻 GitHub Repository
        </a>
      </div>

      {/* About */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-amber-300">📌 About Filmopedia</h2>
        <p className="mt-3 text-gray-300 max-w-4xl leading-relaxed">
          Filmopedia is a fast, responsive, and elegant entertainment app for
          discovering Movies, TV Shows, and Anime. Using TMDB’s powerful API, Filmopedia
          delivers dynamic content with a clean UI, smooth navigation, and optimized
          performance. Built with React + Vite + Tailwind, it provides a modern,
          lightweight, and cinematic browsing experience.
        </p>
      </div>

      {/* Features */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-amber-300">🎬 Core Features</h2>

        <ul className="list-disc list-inside text-gray-300 mt-3 space-y-2">
          <li>🔍 Search movies, TV shows, anime, companies, collections & people</li>
          <li>🎞️ Browse categories: Popular, Trending, Top Rated, Now Playing, Upcoming</li>
          <li>⭐ Detailed pages for Movies & TV (Overview, Genres, Cast, Trailers & More)</li>
          <li>🧑‍🎤 Actor profiles with biography & filmography</li>
          <li>📺 TV Show details with seasons & episodes</li>
        </ul>
      </div>

      {/* Tech Stack */}
      <div className="mt-10">
        <h2 className="text-2xl font-semibold text-amber-300">🛠️ Tech Stack</h2>

        <div className="mt-4 border border-gray-800 rounded-xl overflow-hidden w-fit">
          <table className="table-auto text-left text-gray-300">
            <thead className="bg-gray-800 text-gray-200">
              <tr>
                <th className="px-4 py-2">Category</th>
                <th className="px-4 py-2">Technology</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Frontend</td>
                <td className="px-4 py-2">React (Vite)</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Routing</td>
                <td className="px-4 py-2">React Router</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">UI Styling</td>
                <td className="px-4 py-2">Tailwind CSS</td>
              </tr>
              <tr className="border-b border-gray-700">
                <td className="px-4 py-2">Movie/TV Data</td>
                <td className="px-4 py-2">TMDB API</td>
              </tr>
              <tr>
                <td className="px-4 py-2">Deployment</td>
                <td className="px-4 py-2">Vercel</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

    </section>
  );
};

export default Documentation;
