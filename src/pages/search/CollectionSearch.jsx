import { useLoaderData } from "react-router";
import { SearchCardList } from "../../components/SearchCardList.jsx";



const CollectionSearch = () => {
    const { results, total_pages, page } = useLoaderData();
  return (
    <SearchCardList results = {results} total_pages={total_pages} page={page} type= "Collection" />
  )
}

export default CollectionSearch