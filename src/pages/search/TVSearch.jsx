import { useLoaderData } from "react-router";
import { SearchCardList } from "../../components/SearchCardList.jsx";

const TVSearch = () => {

  const { results, total_pages, page } = useLoaderData();

  return (
    <SearchCardList
      results={results}
      total_pages={total_pages}
      page={page}
      type="TV"
      title="TV Show Search"
      pathSearch="/search/tv" />
  )
}

export default TVSearch