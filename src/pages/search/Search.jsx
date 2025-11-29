import { useSearchParams, useLoaderData, Outlet, useLocation, Link } from "react-router";
import SearchCardList from "../../components/SearchCardList.jsx";
import SideBar from "../../components/SideBar.jsx";

const Search = () => {
  const location = useLocation();
  const isSearchPath = location.pathname === '/search';
  // const isMoviesPath = location.pathname === '/search/movie';
  // const isTVShowPath = location.pathname === '/search/tv';
  // const isAnimePath = location.pathname === '/search/anime';
  // const isPeoplePath = location.pathname === '/search/people';
  // const isCompanyPath = location.pathname === '/search/company';
  // const isCollectionPath = location.pathname === '/search/collection';


  const { results, total_pages, page } = useLoaderData();

  // const [searchParams] = useSearchParams();
  // const query = searchParams.get('query') || ''
  // const pageNumber = searchParams.get('page') || ''


  return (
    <>
      <section className="flex pt-24 sm:px-12 pb-12">
        < SideBar />
        <section className=" ">
          {isSearchPath
            ? <SearchCardList
                results={results}
                total_pages={total_pages}
                page={page}
                title="All Search"
                pathSearch="/search" />
            : <Outlet />}
        </section>
      </section>
    </>
  )
}

export default Search