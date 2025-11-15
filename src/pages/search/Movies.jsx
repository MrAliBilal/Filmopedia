import { useSearchParams } from "react-router";
import { useState, useEffect } from 'react'
import { TMDB_MULTI_SEARCH_URL, API_OPTIONS as options } from '../../API/Url.jsx';

const Movies = () => {

  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const page = parseInt(searchParams.get('page') || '1', 10)
  const [totalPages, setTotalPages] = useState(1);

  const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`

  const [searchList, setSearchList] = useState([]);



  useEffect(() => {
  const fetchSearchResults = async () => {
    if (!query) return;

    const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(
      query
    )}&page=${page}`;

    try {
      const response = await fetch(searchUrl, options);
      const data = await response.json();
      setSearchList(data.results);
      setTotalPages(data.total_pages); // <-- NEW
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  fetchSearchResults();
}, [query, page]);

const handlePageChange = (newPage) => {
  if (newPage >= 1 && newPage <= totalPages) {
    setSearchParams({ query, page: newPage });
  }
};

  return (
    <section className='relative z-10 rounded-sm border-solid border-2 border-gray-200'>
      {searchList.length > 0 ? (
        <ul className='flex flex-col gap-4 p-8 '>
          {searchList.map((searchItem) => (
            <li key={searchItem.id} className='p-4 border-b-1 border-gray-200 flex flex-row'>
              <div className="flex-shrink-0">
                <img
                  className="h-40 shadow-md rounded-md mr-4"
                  src={searchItem.poster_path
                    ? `https://image.tmdb.org/t/p/w200${searchItem.poster_path}` : '/no-movie.png'}></img>
              </div>
              <div className="mt-1">
              <h3 className='text-yellow-400 font-bold my-1'>{searchItem.title || searchItem.name}</h3>
              <h3 className='text-blue-400 my-1'>
                <span>{searchItem.media_type.charAt(0).toUpperCase() + searchItem.media_type.slice(1)}</span>
                <span className="ml-4">{searchItem.release_date ? searchItem.release_date : 'Not Available'}</span>
                <span className="ml-1 relative before:content-[url(/star.svg)] before:mr-1 before:relative before:top-[3px]">{searchItem.vote_average ? searchItem.vote_average.toFixed(1) : 'N/A'}</span></h3>
              <p className='text-yellow-400 font-bold line-clamp-3'>{searchItem.overview}</p>
              </div>
            </li>
          ))}

        </ul>
        // <div className='flex flex-col gap-4 p-8 '>
        //   {searchList.map((searchItem) => (
        //     <div key={searchItem.id} className='bg-gray-800 p-4 rounded'>
        //       <h3 className='text-yellow-400 font-bold '>{searchItem.title || searchItem.name}</h3>
        //       <h3 className='text-blue-400'>{searchItem.media_type.charAt(0).toUpperCase() + searchItem.media_type.slice(1)}</h3>
        //     </div>
        //   ))}
        // </div>
      ) : (
        <p className='text-center text-gray-400 relative z-10'>Search for movies to see results...</p>
      )}
      {totalPages > 1 && (
            <div className="flex justify-center items-center mt-6 gap-4">
              <button
                onClick={() => handlePageChange(page - 1)}
                disabled={page === 1}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Previous
              </button>
              <span>
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => handlePageChange(page + 1)}
                disabled={page === totalPages}
                className="px-4 py-2 bg-gray-300 rounded disabled:opacity-50"
              >
                Next
              </button>
            </div>
          )}
    </section>
  )


}

export default Movies