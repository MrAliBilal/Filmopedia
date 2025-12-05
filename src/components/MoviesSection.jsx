import React from 'react'

const MoviesSection = ({ type }) => {

    let imageLinks = {};


      switch (type) {
    case 1:
      imageLinks = {
        first: '/movie_section/movie-light-of-mine.jpg',
        second: '/movie_section/movie-brilliant-lies.jpg',
        third: '/movie_section/movie-about-age.jpg',
        fourth: '/movie_section/movie-the-lost-viking.jpg',
        fifth: '/movie_section/movie-brilliant-lies.jpg',
        sixth: '/movie_section/movie-brilliant-lies.jpg',
      };
      break;
    case 2:
      imageLinks = {
        first: 'movie_section/cobby-the-other-side-of-cute.jpg',
        second: 'movie_section/the-fandom.jpg',
        third: 'movie_section/cobby-the-other-side-of-cute.jpg',
        fourth: 'movie_section/cobby-the-other-side-of-cute.jpg',
        fifth: 'movie_section/cobby-the-other-side-of-cute.jpg',
        sixth: 'movie_section/the-fandom.jpg',
      };
      break;
    case 3:
      imageLinks = {
        first: 'movie_section/the-edge-of-the-possible.jpg',
        second: 'movie_section/cobby-the-other-side-of-cute.jpg',
        third: 'movie_section/tv-flunk-season-1.jpg',
        fourth: 'movie_section/tv.jpg',
        fifth: 'movie_section/tv-robbery-under-arms.jpg',
        sixth: 'movie_section/tv-nancy-wake.jpg',

      };
      break;
    default:
      imageLinks = {
        first: '/no-movie.png',
        second: '/no-movie.png',
        third: '/no-movie.png',
        fourth: '/no-movie.png',
        fifth: '/no-movie.png',
        sixth: '/no-movie.png',
      };
  }


    return (
        <section className='relative z-10 text-white flex'>
            <div className='flex flex-col'>
                <div className='flex flex-row'>
                    <img
                        src={imageLinks.first}
                        className='max-[400px]:w-19 max-[400px]:m-0.5 w-25 m-1 sm:w-36 md:w-48 lg:w-62 object-cover transition-transform duration-300 hover:scale-110 '
                    ></img>
                    <img
                        src={imageLinks.second}
                        className='max-[400px]:w-19 max-[400px]:m-0.5 w-25 m-1 sm:w-36 md:w-48 lg:w-62 object-cover transition-transform duration-300 hover:scale-110'
                    ></img>
                </div>
                <div>
                    <img
                        src={imageLinks.third}
                        className='max-[400px]:w-39  max-[400px]:m-0.5 w-52 m-1 sm:w-74 md:w-98 lg:w-126 object-cover transition-transform duration-300 hover:scale-105'
                    ></img>
                </div>
            </div>
            <div>
                <div>
                    <img
                        src={imageLinks.fourth}
                        className='max-[400px]:w-39  max-[400px]:m-0.5 w-52 m-1 sm:w-74 md:w-98 lg:w-126 object-cover transition-transform duration-300 hover:scale-105'
                    ></img>
                </div>
                <div className='flex flex-row'>
                    <img
                        src={imageLinks.fifth}
                        className='max-[400px]:w-19 max-[400px]:m-0.5 w-25 m-1 sm:w-36 md:w-48 lg:w-62 object-cover transition-transform duration-300 hover:scale-110'
                    ></img>
                    <img
                        src={imageLinks.sixth}
                        className='max-[400px]:w-19 max-[400px]:m-0.5 w-25 m-1 sm:w-36 md:w-48 lg:w-62 object-cover transition-transform duration-300 hover:scale-110'
                    ></img>
                </div>
            </div>
        </section>
    )
}

export default MoviesSection