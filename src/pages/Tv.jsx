import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"

const Tv = () => {
    const { popular, airingToday, topRated, onTheAir } = useLoaderData();
    return (
        <>
            <HeroSection
                title="Discover TV Shows"
                description="Explore popular, top-rated, and currently airing TV Shows."
                SearchText="Search for a tv show..."
                pathSearch="/search/tv"
                bgLink="/hero_section/tv-hero-section.jpg" />
            <DiscoverList results={popular} cardTitle="Popular TV Shows" type="tv" />
            <DiscoverList results={airingToday} cardTitle="Airing Today TV Shows" type="tv" />
            <DiscoverList results={topRated} cardTitle="Top Rated TV Shows" type="tv" />
            <DiscoverList results={onTheAir} cardTitle="On The Air TV Shows" type="tv" />
        </>
    )
}

export default Tv