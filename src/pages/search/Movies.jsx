import { useSearchParams } from "react-router";
import { useState, useEffect } from 'react'
import { TMDB_MULTI_SEARCH_URL, API_OPTIONS as options } from '../../API/Url.jsx';

const Movies = () => {

     const [searchParams] = useSearchParams()
  const query = searchParams.get('query') || ''
  const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(query)}`

  const [searchList, setSearchList] = useState([]);



  const fetchSearchResults = async () => {
    try {
      if (query.length > 0) {
        const response = await fetch(searchUrl, options)
        const data = await response.json()
        setSearchList(data.results);
        console.log("Search Results (from response):", data.results);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchSearchResults();
  }, [query]);
    
  return (
              <section className='relative z-10 bg-gray-200'>
        {searchList.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-8'>
            {searchList.map((movie) => (
              <div key={movie.id} className='bg-gray-800 p-4 rounded'>
                <h3 className='text-yellow-400 font-bold'>{movie.title || movie.name}</h3>
                <h3 className='text-blue-400'>{movie.media_type.charAt(0).toUpperCase() + movie.media_type.slice(1)}</h3>
              </div>
            ))}
          </div>
        ) : (
          <p className='text-center text-gray-400 relative z-10'>Search for movies to see results...</p>
        )}
      </section>
  )


}

export default Movies