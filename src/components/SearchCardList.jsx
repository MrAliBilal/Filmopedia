import { useSearchParams, useLocation, useNavigate } from 'react-router';
import { useState } from 'react';

export const SearchCardList = ({ results, total_pages, page, type, title, pathSearch,placeHolderText, searchType }) => {

  const location = useLocation();
  const isSearchPath = location.pathname === '/search';
  const [searchParams, setSearchParams] = useSearchParams();

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const getGender = (gender) => {
    switch (gender) {
      case 1: return "Female";
      case 2: return "Male";
      case 3: return "Non-Binary";
      default: return "Unknown";
    }
  };

  console.log(results);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query) return;
    navigate(`${pathSearch}?query=${encodeURIComponent(query)}`);
  };

  const handlePageChange = (newPage) => {
    if (newPage < 1 || newPage > total_pages) return;
    setSearchParams({ query: searchParams.get('query') || '', page: String(newPage) });
  };

  return (
    <section className='relative z-10 sm:rounded-sm sm:border-solid sm:border-2 sm:border-gray-200 max-sm:m-2' >


      <section className="sm:px-8 sm:pt-10">
        <div className="sm:px-4 border-b-1 border-gray-200 mx-auto text-center lg:py-16 z-10 relative ">
          <h1 className="sm:mb-6 mb-4 text-4xl font-bold tracking-tighter text-heading md:text-5xl lg:text-6xl">{title}</h1>
          <form className='relative flex flex-col px-12 max-sm:mb-4 sm:pb-8' onSubmit={handleSearch}>
            <input id='temp1'
              className='sm:min-w-md h-12 my-4 px-6 bg-gray-100 text-black  rounded-4xl focus:outline-none 
              placeholder:text-center placeholder:pr-18 border-gray-200'
              placeholder={placeHolderText}
              type="text"
              onChange={(e) => setQuery(e.target.value)}></input>
            <button dir="rtl" 
            className='absolute rtl start-0 top-0 min-w-22 h-12 my-4 mr-12
            bg-linear-to-r from-emerald-300 to-cyan-400 text-while rounded-4xl' 
            type="submit" >Search</button>
          </form>
        </div>
      </section>


      {results.length > 0 ? (
        <ul className='flex flex-col sm:p-8 '>
          {results.map((searchItem) => (
            <li key={searchItem.id} className='p-4 border-b-1 border-gray-200 flex flex-row'>
              <div className="flex-shrink-0 ">
                <img
                  className="h-40 max-w-[300px] shadow-md rounded-md mr-4 object-contain"
                  src={searchItem.poster_path || searchItem.profile_path || searchItem.logo_path
                    ? `https://image.tmdb.org/t/p/w200${searchItem.poster_path || searchItem.profile_path || searchItem.logo_path}` : '/no-movie.png'}></img>
              </div>
              <div className="mt-1">
                <h3 className='text-black-200 font-bold my-1'>{searchItem.title || searchItem.name}</h3>
                <h3 className='text-blue-400 my-1'>
                  <span>{isSearchPath ? searchItem.media_type.charAt(0).toUpperCase() + searchItem.media_type.slice(1) : type}</span>
                  <span className="ml-4">{searchItem.first_air_date || searchItem.release_date || searchItem.gender ? searchItem.release_date || searchItem.first_air_date || getGender(searchItem.gender) : 'Not Available'}</span>
                  <span className="ml-4 relative before:content-[url(/star.svg)] before:mr-1 before:relative before:top-[3px]">{searchItem.vote_average ? searchItem.vote_average.toFixed(1) : 'N/A'}</span></h3>
                <p className='text-gray-600 font-bold max-sm:line-clamp-2 min-sm:line-clamp-3'>{searchItem.overview}</p>
              </div>
            </li>
          ))}

        </ul>
      ) : (
        <p className='text-center text-gray-400 relative z-10 tracking-tighter text-heading text-4xl py-10 max-sm:border-b-1 border-gray-200'>{!searchParams.get('query') ? `Search for ${searchType} to see results...` : `No ${searchType} is available...`}</p>
      )}

      {total_pages > 1 && (
        <div className="flex justify-center items-center min-sm:pb-8 max-sm:py-4 gap-4 max-sm:border-b-1 border-gray-200">
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