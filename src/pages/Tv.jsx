import { useLoaderData } from "react-router"
import DiscoverList from "../components/DiscoverList"
import HeroSection from "../components/HeroSection"

const Tv = () => {
    const { popular, airingToday, topRated, onTheAir } = useLoaderData();
    console.log(popular, airingToday, topRated, onTheAir);
    return (
        <>
            <HeroSection
                title="Discover TV Shows"
                description="Explore popular, top-rated, and currently airing TV Shows."
                SearchText="Search through thousands of movies"
                pathSearch="/search/tv" />
            <DiscoverList results={popular} cardTitle="Popular TV Shows" />
            <DiscoverList results={airingToday} cardTitle="Airing Today TV Shows" />
            <DiscoverList results={topRated} cardTitle="Top Rated TV Shows" />
            <DiscoverList results={onTheAir} cardTitle="On The Air TV Shows" />
        </>
    )
}

export default Tv