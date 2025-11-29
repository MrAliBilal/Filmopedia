
export default function RouteError() {
  const error = useRouteError();

  return (
    <>
        <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-5xl font-bold text-red-600">Oops!</h1>

      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
        Something went wrong while loading this page.
      </p>

      <p className="mt-2 text-gray-500">
        {error?.statusText || error?.message || "Unknown error"}
      </p>

      <Link
        to="/"
        className="mt-6 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
      >
        Go Home
      </Link>
    </main>
    </>
  );
}
