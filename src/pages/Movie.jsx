import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"


export const Movie = () => {

  const { popular, nowPlaying, topRated, upcoming } = useLoaderData();

  return (
    <>
      <HeroSection
        title="Movies"
        description="Explore popular, top-rated, and currently airing Movies"
        SearchText="Search for a movie..."
        pathSearch="/search"
        bgLink="/hero_section/movie-hero-section.webp" />

      <DiscoverList results={popular} cardTitle="Popular Movies" type="movie" />
      <DiscoverList results={nowPlaying} cardTitle="Now Playing Movies" type="movie" />
      <DiscoverList results={topRated} cardTitle="Top Rated Movies" type="movie" />
      <DiscoverList results={upcoming} cardTitle="Up Coming Movies" type="movie" />
    </>
  )
}

export default Movie