import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"
import NewTempNavbar from "../components/NewTempNavbar"

const Anime = () => {
    const { popular, topRated, airingToday, onTheAir } = useLoaderData();
  return (
    <>
        <NewTempNavbar />
        <HeroSection 
            title="Discover Anime"
            description="Explore popular, top-rated, and currently airing anime series."/>
            <DiscoverList results = {popular} cardTitle="Popular Anime" />
            <DiscoverList results = {topRated} cardTitle="Top Rated Anime" />
            <DiscoverList results = {airingToday} cardTitle="Airing Anime" />
            {/* <DiscoverList results = {onTheAir} cardTitle="Up Coming" /> */}
    </>
  )
}

export default Anime