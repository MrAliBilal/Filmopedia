import { useLoaderData } from "react-router";
import { SearchCardList } from "../../components/SearchCardList.jsx";

const PeopleSearch = () => {

    const { results, total_pages, page } = useLoaderData();
    
  return (
    <SearchCardList results = {results} total_pages={total_pages} page={page} type= "People" title="People Search" />
  )
}

export default PeopleSearch