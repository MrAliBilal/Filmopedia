import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"

const Anime = () => {
  const { popular, topRated, airingToday, onTheAir } = useLoaderData();
  return (
    <>
      <HeroSection
        title="Discover Anime"
        description="Explore popular, top-rated, and currently airing anime series."
        SearchText="Search through thousands of movies"
        pathSearch="/search/anime" />
      <DiscoverList results={popular} cardTitle="Popular Anime" />
      <DiscoverList results={topRated} cardTitle="Top Rated Anime" />
      <DiscoverList results={airingToday} cardTitle="Airing Anime" />
      {/* <DiscoverList results = {onTheAir} cardTitle="Up Coming" /> */}
    </>
  )
}

export default Anime