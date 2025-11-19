import { useSearchParams, useLocation } from 'react-router';


export const SearchCardList = ({ results, total_pages, page, type }) => {

  const location = useLocation();
  const isSearchPath = location.pathname === '/search';
  const [searchParams, setSearchParams] = useSearchParams();

  const getGender = (gender) => {
    switch (gender) {
      case 1: return "Female";
      case 2: return "Male";
      case 3: return "Non-Binary";
      default: return "Unknown";
    }
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > total_pages) return;
    setSearchParams({ query: searchParams.get('query') || '', page: String(newPage) });
  };

  return (
    <section className='relative z-10 rounded-sm border-solid border-2 border-gray-200'>
      {results.length > 0 ? (
        <ul className='flex flex-col gap-4 p-8 '>
          {results.map((searchItem) => (
            <li key={searchItem.id} className='p-4 border-b-1 border-gray-200 flex flex-row'>
              <div className="flex-shrink-0">
                <img
                  className="h-40 max-w-[100px] shadow-md rounded-md mr-4 object-contain"
                  src={searchItem.poster_path || searchItem.profile_path || searchItem.logo_path
                    ? `https://image.tmdb.org/t/p/w200${searchItem.poster_path || searchItem.profile_path || searchItem.logo_path}` : '/no-movie.png'}></img>
              </div>
              <div className="mt-1">
                <h3 className='text-yellow-400 font-bold my-1'>{searchItem.title || searchItem.name}</h3>
                <h3 className='text-blue-400 my-1'>
                  <span>{isSearchPath ? searchItem.media_type.charAt(0).toUpperCase() + searchItem.media_type.slice(1) : type}</span>
                  <span className="ml-4">{searchItem.release_date || searchItem.gender || searchItem.first_air_date ? searchItem.release_date || getGender(searchItem.gender) || searchItem.first_air_date : 'Not Available'}</span>
                  <span className="ml-1 relative before:content-[url(/star.svg)] before:mr-1 before:relative before:top-[3px]">{searchItem.vote_average ? searchItem.vote_average.toFixed(1) : 'N/A'}</span></h3>
                <p className='text-yellow-400 font-bold line-clamp-3'>{searchItem.overview}</p>
              </div>
            </li>
          ))}

        </ul>
      ) : (
        <p className='text-center text-gray-400 relative z-10'>Search for movies to see results...</p>
      )}

      {total_pages > 1 && (
        <div className="flex justify-center items-center pb-8 gap-4">
          <button
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
            className="px-4 text-blue-500 rounded disabled:opacity-50 disabled:text-gray-500"
          >
            Previous
          </button>
          <span>
            Page {page} of {total_pages}
          </span>
          <button
            onClick={() => handlePageChange(page + 1)}
            disabled={page === total_pages}
            className="px-4 text-blue-500 rounded disabled:opacity-50 disabled:text-gray-500"
          >
            Next
          </button>
        </div>
      )}
    </section>
  )
}

export default SearchCardList