import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"
import NewTempNavbar from "../components/NewTempNavbar"

export const Movie = () => {
  
    const { popular, nowPlaying, topRated, upcoming } = useLoaderData();

    console.log(popular, nowPlaying, topRated, upcoming);

  return (
    <>
        <NewTempNavbar />
        <HeroSection />
        <DiscoverList results = {popular} cardTitle="Popular Movies" />
        <DiscoverList results = {nowPlaying} cardTitle="Now Playing Movies" />
        <DiscoverList results = {topRated} cardTitle="Top Rated Movies" />
        <DiscoverList results = {upcoming} cardTitle="Up Coming Movies" />
    </>
  )
}

export default Movie