

const DiscoverList = ({ results, total_pages, page, type, cardTitle }) => {
 
    
  return (
    <section className='relative z-10 rounded-sm border-solid border-2 border-gray-200 m-8 '>
        <h1 className='text-3xl font-bold p-8'>{cardTitle}</h1>
        {results.length > 0 ? (
        <ul className='flex flex-cols p-8 divide-x-1 divide-gray-200  overflow-x-auto'>
          {results.map((searchItem) => (
            <li key={searchItem.id} className='px-8 flex flex-col'>
              <div className="flex-shrink-0 ">
                <img
                  className="h-60 max-w-[300px] shadow-md rounded-md object-contain center mx-auto"
                  src={searchItem.poster_path || searchItem.profile_path || searchItem.logo_path
                    ? `https://image.tmdb.org/t/p/w200${searchItem.poster_path || searchItem.profile_path || searchItem.logo_path}` : '/no-movie.png'}></img>
              </div>
              <div className="mt-1">
                <h3 className='text-yellow-400 font-bold my-1 text-center line-clamp-1'>{searchItem.title || searchItem.name}</h3>
                <h3 className='text-blue-400 my-1 text-center'>
                  <span className="">{searchItem.first_air_date || searchItem.release_date || searchItem.gender ? searchItem.release_date || searchItem.first_air_date || getGender(searchItem.gender) : 'Not Available'}</span>
                  <span className="ml-1 relative before:content-[url(/star.svg)] before:mr-1 before:relative before:top-[3px]">{searchItem.vote_average ? searchItem.vote_average.toFixed(1) : 'N/A'}</span></h3>
              </div>
            </li>
          ))}

        </ul>
      ) : (
        <p className='text-center text-gray-400 relative z-10'>Search for movies to see results...</p>
      )}

    </section>
  )



}

export default DiscoverList