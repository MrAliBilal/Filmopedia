import { Link, useNavigate } from "react-router";


export default function NotFound() {
  const navigate = useNavigate();

  return (
    <>
        <main className="min-h-screen flex items-center justify-center bg-gray-50 dark: p-6">
      <div className="text-center">
        <h1 className="text-7xl font-extrabold text-indigo-600">404</h1>
        <h2 className="mt-4 text-2xl font-semibold text-gray-900 dark:text-white">
          Page Not Found
        </h2>
        <p className="mt-2 text-gray-500 dark:text-gray-400 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-100"
          >
            ← Go Back
          </button>

          <Link
            to="/"
            className="px-4 py-2 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white"
          >
            Go Home
          </Link>
        </div>
      </div>
    </main>
    </>
  );
}
