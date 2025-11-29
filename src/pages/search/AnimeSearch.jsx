import { useLoaderData } from "react-router";
import { SearchCardList } from "../../components/SearchCardList.jsx";

const AnimeSearch = () => {

  const { results, total_pages, page } = useLoaderData();

  return (
    <SearchCardList
      results={results}
      total_pages={total_pages}
      page={page}
      type="Anime"
      title="Anime Search"
      placeHolderText="Search for a anime..."
      searchType="anime" />
  )
}

export default AnimeSearch