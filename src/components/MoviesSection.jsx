import React, { useState, useEffect } from 'react';

const MoviesSection = ({ type }) => {
    const movieImages = {
        1: [
            '/movie_section/movie-light-of-mine.jpg',
            '/movie_section/movie-brilliant-lies.jpg',
            '/movie_section/movie-about-age.jpg',
            '/movie_section/movie-the-lost-viking.jpg',
            '/movie_section/movie-brilliant-lies.jpg',
            '/movie_section/movie-brilliant-lies.jpg',
        ],
        2: [
            'movie_section/cobby-the-other-side-of-cute.jpg',
            'movie_section/the-fandom.jpg',
            'movie_section/cobby-the-other-side-of-cute.jpg',
            'movie_section/cobby-the-other-side-of-cute.jpg',
            'movie_section/cobby-the-other-side-of-cute.jpg',
            'movie_section/the-fandom.jpg',
        ],
        3: [
            'movie_section/the-edge-of-the-possible.jpg',
            'movie_section/cobby-the-other-side-of-cute.jpg',
            'movie_section/tv-flunk-season-1.jpg',
            'movie_section/tv.jpg',
            'movie_section/tv-robbery-under-arms.jpg',
            'movie_section/tv-nancy-wake.jpg',
        ],
        default: Array(6).fill('/no-movie.png'),
    };

    const images = movieImages[type] || movieImages.default;

    // State to track if the screen is small
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 640); // sm breakpoint
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // For small screens, show only first 3 images
    const displayImages = isSmallScreen ? images.slice(0, 3) : images;

    return (
        <section className="relative z-10 text-white flex flex-col md:flex-row gap-2 md:gap-4 px-4 sm:px-20">

            {/* Left Column */}
            <div className="flex flex-col gap-2 flex-1">
                {/* Show only first image on small screens */}
                <img
                    src={images[2]}
                    alt="movie-3"
                    className="w-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                />
                <div className="flex gap-2">
                    <img
                        src={images[0]}
                        alt="movie-1"
                        className="w-1/2 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={images[1]}
                        alt="movie-2"
                        className="w-1/2 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

            {/* Right Column - hidden on small screens */}
            <div className="hidden md:flex flex-col gap-2 flex-1">

                <div className="flex gap-2">
                    <img
                        src={images[4]}
                        alt="movie-5"
                        className="w-1/2 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                    <img
                        src={images[5]}
                        alt="movie-6"
                        className="w-1/2 object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                </div>

                                <div>
                    <img
                        src={images[3]}
                        alt="movie-4"
                        className="w-full object-cover rounded-md hover:scale-105 transition-transform duration-300"
                    />
                </div>
            </div>

        </section>
    );
};

export default MoviesSection;