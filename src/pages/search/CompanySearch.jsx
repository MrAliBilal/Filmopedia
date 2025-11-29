import { useLoaderData } from "react-router";
import { SearchCardList } from "../../components/SearchCardList.jsx";



const CompanySearch = () => {
  const { results, total_pages, page } = useLoaderData();
  return (
    <SearchCardList
      results={results}
      total_pages={total_pages}
      page={page}
      type="Company"
      title="Company Search"
      pathSearch="/search/company"
      placeHolderText="Search for a company"
      searchType="company" />
  )
}

export default CompanySearch