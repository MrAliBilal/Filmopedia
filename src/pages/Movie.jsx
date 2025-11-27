import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"


export const Movie = () => {

  const { popular, nowPlaying, topRated, upcoming } = useLoaderData();

  console.log(popular, nowPlaying, topRated, upcoming);

  return (
    <>
      <HeroSection
        title="Movies"
        description="Explore popular, top-rated, and currently airing Movies"
        SearchText="Search through thousands of movies"
        pathSearch="/search" />

      <DiscoverList results={popular} cardTitle="Popular Movies" />
      <DiscoverList results={nowPlaying} cardTitle="Now Playing Movies" />
      <DiscoverList results={topRated} cardTitle="Top Rated Movies" />
      <DiscoverList results={upcoming} cardTitle="Up Coming Movies" />
    </>
  )
}

export default Movie