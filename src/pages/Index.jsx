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


                <section className='relative z-10 text-amber-50 h-[87vh] sm:h-[80vh] pt-16 flex flex-col items-center justify-center text-center px-4'>
                    <h2 className='font-extrabold sm:text-5xl mb-3 text-3xl'>Welcome.</h2>
                    <h3 className='font-semibold text-base sm:text-4xl mb-3'>Millions of movies, TV shows and people to discover. Explore now.</h3>
                    <form onSubmit={handleSearch} className='relative'>
                        <input id='temp1' value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)}
                            className='min-[500px]:min-w-md min-w-[320px] h-12 my-4 px-6 bg-gray-200 text-black  rounded-4xl focus:outline-none 
          max-[500px]:placeholder:text-xs placeholder:text-center placeholder:pr-18 placeholder:text-black'
                            placeholder="Search Movies, Anime or Series"
                            type="text"></input>
                        <button dir="rtl"
                            className='absolute rtl start-0 top-0 min-w-22 h-12 my-4 
          bg-linear-to-r from-emerald-300 to-cyan-400 text-while rounded-4xl text-black'
                            type="submit" >Search</button>
                    </form>
                </section>

                <section className='flex justify-center mb-20'>
                    <div className='relative z-10 flex flex-col items-center'>

                        <section className='text-white flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10'>

                            <h1
                                className={`font-[Sora] tracking-wider cursor-pointer uppercase transition-all duration-300 text-xs sm:text-2xl 
                                        ${moviesSectionSwitch === 1
                                        ? "text-secondary-color-2-500 underline font-semibold underline-offset-8 scale-105"
                                        : "hover:text-secondary-color-2-400"}`}
                                onClick={() => setmoviesSectionSwitch(1)}
                            >
                                <span className="sm:hidden">Movies</span>
                                <span className="hidden sm:block">Popular Movies</span>
                            </h1>

                            <h1
                                className={`font-[Sora] tracking-wider cursor-pointer uppercase transition-all duration-300 text-xs sm:text-2xl 
                                        ${moviesSectionSwitch === 2
                                        ? "text-secondary-color-2-500 underline font-semibold underline-offset-8 scale-105"
                                        : "hover:text-secondary-color-2-400"}`}
                                onClick={() => setmoviesSectionSwitch(2)}
                            >
                                <span className="sm:hidden">Anime</span>
                                <span className="hidden sm:block">Featured Anime</span>
                            </h1>

                            <h1
                                className={`font-[Sora] tracking-wider cursor-pointer uppercase transition-all duration-300 text-xs sm:text-2xl 
                                        ${moviesSectionSwitch === 3
                                        ? "text-secondary-color-2-500 underline font-semibold underline-offset-8 scale-105"
                                        : "hover:text-secondary-color-2-400"}`}
                                onClick={() => setmoviesSectionSwitch(3)}
                            >
                                <span className="sm:hidden">Series</span>
                                <span className="hidden sm:block">Trending Series</span>
                            </h1>

                        </section>

                        <div className='mt-4 sm:mt-8'>
                            <MoviesSection type={moviesSectionSwitch} />
                        </div>

                    </div>
                </section>


                <section className='flex flex-col sm:flex-col md:flex-row flex-wrap justify-center gap-6 md:gap-10 mx-2 sm:mx-4 md:mx-10 relative z-10 text-white my-8'>
                    <IndexCard
                        title="Extensive collection"
                        subtitle="Choose from a vast catalogue of highly acclaimed films, TV shows, and anime. You can also search for people and companies."
                        color="text-secondary-color-2-500"
                        icon="M224 288l0-72 224 0 0 72 0 80-224 0 0-80zm0-88l0-72 0-80 224 0 0 80 0 72-224 0zm240 80l0-64 96 0 0 64-96 0zm0-144l96 0 0 64-96 0 0-64zm112 72l0-8 0-64 0-8 0-8 0-24c0-35.3-28.7-64-64-64l-48 0-8 0-8 0L224 32l-8 0-8 0-48 0c-35.3 0-64 28.7-64 64l0 24 0 8 0 8 0 64 0 8 0 8 0 64 0 8 0 8 0 24c0 35.3 28.7 64 64 64l48 0 8 0 8 0 224 0 8 0 8 0 48 0c35.3 0 64-28.7 64-64l0-24 0-8 0-8 0-64 0-8zM560 96l0 24-96 0 0-72 48 0c26.5 0 48 21.5 48 48zM160 48l48 0 0 72-96 0 0-24c0-26.5 21.5-48 48-48zm-48 88l96 0 0 64-96 0 0-64zm96 80l0 64-96 0 0-64 96 0zM112 320l0-24 96 0 0 72-48 0c-26.5 0-48-21.5-48-48zm400 48l-48 0 0-72 96 0 0 24c0 26.5-21.5 48-48 48zM0 192L0 416c0 35.3 28.7 64 64 64l352 0c35.3 0 64-28.7 64-64l-16 0c0 26.5-21.5 48-48 48L64 464c-26.5 0-48-21.5-48-48l0-224c0-26.5 21.5-48 48-48l0-16c-35.3 0-64 28.7-64 64z"
                    />
                    <IndexCard
                        title="Ultimate Movie, TV & Anime Hub"
                        subtitle="All-in-one destination to explore movies, TV shows, and anime. Discover Popular, Trending, Top Rated, Now Playing, and Upcoming titles with ease."
                        color="text-secondary-color-2-500"
                        icon="M8 88c-4.4 0-8 3.6-8 8s3.6 8 8 8l432 0c4.4 0 8-3.6 8-8s-3.6-8-8-8L8 88zM136 248c-4.4 0-8 3.6-8 8s3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0zm-8 168c0 4.4 3.6 8 8 8l304 0c4.4 0 8-3.6 8-8s-3.6-8-8-8l-304 0c-4.4 0-8 3.6-8 8zM0 440c0 4.4 3.6 8 8 8s8-3.6 8-8l0-208c0-4.4-3.6-8-8-8s-8 3.6-8 8L0 440z"
                    />
                    <IndexCard
                        title="Modern & Responsive"
                        subtitle="Offers a modern, clean, and fully responsive design for seamless browsing. Enjoy exploring movies, TV shows, and anime anytime, on any device."
                        color="text-secondary-color-2-500"
                        icon="M16 192l0 224c0 26.5 21.5 48 48 48l384 0c26.5 0 48-21.5 48-48l0-224L16 192zm339.3-16L496 176l0-80c0-16.5-8.3-31-21-39.7L355.3 176zm-22.6 0l5.7-5.7 121-121c-3.6-.9-7.4-1.3-11.3-1.3L331.3 48l-5.7 5.7L203.3 176l129.4 0zm-152 0l5.7-5.7L308.7 48 179.3 48l-5.7 5.7L51.3 176l129.4 0zm-152 0l5.7-5.7L156.7 48 64 48C37.5 48 16 69.5 16 96l0 80 12.7 0zM512 96l0 80 0 8 0 8 0 224c0 35.3-28.7 64-64 64L64 480c-35.3 0-64-28.7-64-64L0 192l0-8 0-8L0 96C0 60.7 28.7 32 64 32l384 0c35.3 0 64 28.7 64 64z"
                    />
                </section>

                <section className="relative z-10 sm:h-[80vh] flex flex-col items-center justify-center text-center px-4 text-white">

                    <div className="mb-6 sm:mb-10 max-w-4xl">
                        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold mb-3">
                            Enjoy seamless browsing on your favorite screen, anytime, anywhere.
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-300">
                            Experience a modern, clean, and fully responsive design built for smooth performance.
                        </p>
                    </div>

                    <div className="w-full max-w-5xl flex justify-center">
                        <img
                            src="/responsive-screen.png"
                            alt="Multi Device Preview"
                            className="w-full h-auto max-h-[50vh] object-contain"
                        />
                    </div>

                </section>

            </div>
        </main>
    )
}

export default Index