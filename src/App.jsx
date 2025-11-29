import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import './App.css'
import { TMDB_MULTI_SEARCH_URL, API_OPTIONS as options } from './API/Url.jsx';

function App() {

  const [searchQuery, setSearchQuery] = useState('');
  const [searchList, setSearchList] = useState([]);
  const navigate = useNavigate();

  const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(searchQuery)}`

  const fetchSearchResults = async () => {
    try {
      if (searchQuery.length > 0) {
        const response = await fetch(searchUrl, options)
        const data = await response.json()
        setSearchList(data.results);
        console.log(data);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchSearchResults();
  }, [searchQuery]);

    const handleSearch = (e) => {
    e.preventDefault();
    
    if (searchQuery.trim().length > 0) {
      // Navigate to search page with query parameter
      navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
    }
  }

  return (
    <div className="relative min-h-screen bg-black">
      {/* Background layer */}
      <div className="bg-[url('/index-bg.jpg')] bg-center bg-cover h-svh bg-no-repeat absolute inset-0 z-0">
        {/* Optional overlay for better text contrast */}
        <div className="absolute inset-0 bg-[#000000a6] bg-[linear-gradient(180deg,#000_0,#0000_15%,#0000_60%,#000_90%)]" />
      </div>


      <section className='relative z-10 text-amber-50 h-[80vh] pt-16 flex flex-col items-center justify-center text-center px-4'>
        <h2 className='font-extrabold sm:text-5xl mb-3 text-4xl'>Welcome.</h2>
        <h3 className='font-semibold sm:text-4xl mb-3 text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</h3>
        <form onSubmit={handleSearch} className='relative'>
          <input id='temp1' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} className='min-[500px]:min-w-md min-w-[320px] h-12 my-4 px-6 bg-amber-50 text-black  rounded-4xl focus:outline-none max-[500px]:placeholder:text-xs placeholder:text-center placeholder:pr-18' placeholder="Search through thousands of movies" type="text"></input>
          <button dir="rtl" className='absolute rtl start-0 top-0 min-w-22 h-12 my-4 bg-linear-to-r from-emerald-300 to-cyan-400 text-while  rounded-4xl' type="submit" >Search</button>
        </form>
      </section>

          <section className='relative z-10'>
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

    </div>
  )
}

export default App
