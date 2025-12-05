import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router';
import { TMDB_MULTI_SEARCH_URL, API_OPTIONS as options } from '../API/Url.jsx';
import IndexCard from '../components/IndexCard.jsx';
import MoviesSection from '../components/MoviesSection.jsx';



const Index = () => {

    const [searchQuery, setSearchQuery] = useState('');
    const [searchList, setSearchList] = useState([]);
    const [moviesSectionSwitch, setmoviesSectionSwitch] = useState(1);
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
            navigate(`/search?query=${encodeURIComponent(searchQuery)}`);
        }
    }

    return (
        <main>
            <div className="relative min-h-screen bg-black">
                <div className="bg-[url('/index-bg.jpg')] bg-center bg-cover h-svh bg-no-repeat absolute inset-0 z-0">
                    <div className="absolute inset-0 bg-[#000000a6] bg-[linear-gradient(180deg,#000_0,#0000_15%,#0000_60%,#000_90%)]" />
                </div>


                <section className='relative z-10 text-amber-50 h-[80vh] pt-16 flex flex-col items-center justify-center text-center px-4'>
                    <h2 className='font-extrabold sm:text-5xl mb-3 text-4xl'>Welcome.</h2>
                    <h3 className='font-semibold sm:text-4xl mb-3 text-2xl'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    <form onSubmit={handleSearch} className='relative'>
                        <input id='temp1' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}
                            className='min-[500px]:min-w-md min-w-[320px] h-12 my-4 px-6 bg-gray-200 text-black  rounded-4xl focus:outline-none 
          max-[500px]:placeholder:text-xs placeholder:text-center placeholder:pr-18 placeholder:text-black'
                            placeholder="Search for a movie, anime, tv show, person..."
                            type="text"></input>
                        <button dir="rtl"
                            className='absolute rtl start-0 top-0 min-w-22 h-12 my-4 
          bg-linear-to-r from-emerald-300 to-cyan-400 text-while rounded-4xl text-black'
                            type="submit" >Search</button>
                    </form>
                </section>

                <section className='flex justify-center mb-20'>
                    <div className='relative z-10 flex flex-col'>
                        <section className='text-white flex m-2 gap-10 justify-center'>
                            <h1 className={`m-1 cursor-pointer ${moviesSectionSwitch === 1 ? "text-cyan-400 underline underline-offset-4" : ""}`}
                                onClick={() => setmoviesSectionSwitch(1)}>
                                Movies
                            </h1>

                            <h1 className={`m-1 cursor-pointer ${moviesSectionSwitch === 2 ? "text-cyan-400 underline underline-offset-4" : ""}`}
                                onClick={() => setmoviesSectionSwitch(2)}>
                                Anime
                            </h1>

                            <h1 className={`m-1 cursor-pointer ${moviesSectionSwitch === 3 ? "text-cyan-400 underline underline-offset-4" : ""}`}
                                onClick={() => setmoviesSectionSwitch(3)}>
                                TV Show
                            </h1>
                        </section>
                        <div>
                            < MoviesSection type={moviesSectionSwitch} />
                        </div>
                    </div>
                </section>


                <section className='flex flex-row sm:gap-4 md:gap-25 mx-2 sm:mx-10 relative z-10 text-white justify-center my-8 mb-10'>
                    <IndexCard
                        title="Extensive collection"
                        subtitle="Choose from the vast catalogue of highly acclaimed international, local and independent films, with new titles added on a regular basis."
                        color="card-primary-1"
                        icon="M224 288l0-72 224 0 0 72 0 80-224 0 0-80zm0-88l0-72 0-80 224 0 0 80 0 72-224 0zm240 80l0-64 96 0 0 64-96 0zm0-144l96 0 0 64-96 0 0-64zm112 72l0-8 0-64 0-8 0-8 0-24c0-35.3-28.7-64-64-64l-48 0-8 0-8 0L224 32l-8 0-8 0-48 0c-35.3 0-64 28.7-64 64l0 24 0 8 0 8 0 64 0 8 0 8 0 64 0 8 0 8 0 24c0 35.3 28.7 64 64 64l48 0 8 0 8 0 224 0 8 0 8 0 48 0c35.3 0 64-28.7 64-64l0-24 0-8 0-8 0-64 0-8zM560 96l0 24-96 0 0-72 48 0c26.5 0 48 21.5 48 48zM160 48l48 0 0 72-96 0 0-24c0-26.5 21.5-48 48-48zm-48 88l96 0 0 64-96 0 0-64zm96 80l0 64-96 0 0-64 96 0zM112 320l0-24 96 0 0 72-48 0c-26.5 0-48-21.5-48-48zm400 48l-48 0 0-72 96 0 0 24c0 26.5-21.5 48-48 48zM0 192L0 416c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16c-35.3 0-64 28.7-64 64z"
                    />
                    <IndexCard
                        title="Beamafilm blog"
                        subtitle="Take a step behind the camera with our exclusive interview series, or relish our regular film watchlists and film-related blog articles."
                        color="card-primary-1"
                        icon="M8 88c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 88zM136 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0zm-8 168c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0c-4.4 0-8 3.6-8 8zM0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 440z"
                    />
                    <IndexCard
                        title="Support for independent filmmakers"
                        subtitle="Beamafilm aids in promoting diverse voices and perspectives by providing a platform for independent films to reach a wider audience."
                        color="card-primary-1"
                        icon="M16 192l0 224c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-224L16 192zm339.3-16L496 176l0-80c0-16.5-8.3-31-21-39.7L355.3 176zm-22.6 0l5.7-5.7 121-121c-3.6-.9-7.4-1.3-11.3-1.3L331.3 48l-5.7 5.7L203.3 176l129.4 0zm-152 0l5.7-5.7L308.7 48 179.3 48l-5.7 5.7L51.3 176l129.4 0zm-152 0l5.7-5.7L156.7 48 64 48C37.5 48 16 69.5 16 96l0 80 12.7 0zM512 96l0 80 0 8 0 8 0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192l0-8 0-8L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64z"
                    />
                </section>

            </div>
        </main>
    )
}

export default Index