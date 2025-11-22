import { useLoaderData } from "react-router";
import { SearchCardList } from "../../components/SearchCardList.jsx";



const MoviesSearch = () => {
    const { results, total_pages, page } = useLoaderData();
  return (
    <SearchCardList results = {results} total_pages={total_pages} page={page} type= "Movie" title="Movie Search" />
  )
}

export default MoviesSearch