import { useSearchParams, useLoaderData, Outlet, useLocation, Link } from "react-router";
import { useState, useEffect } from 'react'
import { TMDB_MULTI_SEARCH_URL, API_OPTIONS as options } from '../../API/Url.jsx';
import NewTempNavbar from "../../components/NewTempNavbar.jsx";
import SearchCardList  from "../../components/SearchCardList.jsx";

const Search = () => {
  const location = useLocation();
  const isSearchPath = location.pathname === '/search';
  const isMoviesPath = location.pathname === '/search/movie';
  const isTVShowPath = location.pathname === '/search/tv';
  const isAnimePath = location.pathname === '/search/anime';
  const isPeoplePath = location.pathname === '/search/people';
  const isCompanyPath = location.pathname === '/search/company';
  const isCollectionPath = location.pathname === '/search/collection';


  const { results, total_pages, page } = useLoaderData();

  const [searchParams] = useSearchParams();
  const query = searchParams.get('query') || ''
  const pageNumber = searchParams.get('page') || ''

  // const [searchParams] = useSearchParams()
  // const query = searchParams.get('query') || ''
  // const page = parseInt(searchParams.get('page') || '1', 10)

  // console.log("Current Query:", page);
  // const searchUrl = `${TMDB_MULTI_SEARCH_URL}?query=${encodeURIComponent(query)}&page=${page}`
  // console.log("Search URL:", searchUrl);
  // const [searchList, setSearchList] = useState([]);



  // const fetchSearchResults = async () => {
  //   try {
  //     if (query.length > 0) {
  //       const response = await fetch(searchUrl, options)
  //       const data = await response.json()
  //       setSearchList(data.results);
  //       console.log("Search Results (from response):", data.results);
  //     }
  //   } catch (error) {
  //     console.error('Error fetching data:', error);
  //   }
  // }

  // useEffect(() => {
  //   fetchSearchResults();
  // }, [query, page]);



  return (
    <>
      <NewTempNavbar />

      <section className="flex pt-24 px-12 pb-12">
        <aside className="mr-10 max-md:hidden">
          <div className="rounded-lg border-solid border-2 border-gray-200 w-64">
            <div className="bg-sky-500 rounded-t-lg">
              <h1 className="text-white p-5 font-bold">Search Results</h1>
            </div>
            <div className="">
              <ul className="pt-2">
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isSearchPath ? "bg-gray-100" : ""}`}><Link to={ isSearchPath ? `/search?query=${query}&page=${pageNumber}` : `/search?query=${query}`}>All</Link></li>
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isMoviesPath ? "bg-gray-100" : ""}`}><Link to={ isMoviesPath ? `/search/movie?query=${query}&page=${pageNumber}` : `/search/movie?query=${query}`}>Movies</Link></li>
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isTVShowPath ? "bg-gray-100" : ""}`}><Link to={ isTVShowPath ? `/search/tv?query=${query}&page=${pageNumber}` : `/search/tv?query=${query}`}>TV Show</Link></li>
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isCollectionPath ? "bg-gray-100" : ""}`}><Link to={ isCollectionPath ? `/search/collection?query=${query}&page=${pageNumber}` : `/search/collection?query=${query}`}>Collection</Link></li>
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isAnimePath ? "bg-gray-100" : ""}`}><Link to={ isAnimePath ? `/search/anime?query=${query}&page=${pageNumber}` : `/search/anime?query=${query}`}>Anime</Link></li>
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isPeoplePath ? "bg-gray-100" : ""}`}><Link to={ isPeoplePath ? `/search/people?query=${query}&page=${pageNumber}` : `/search/people?query=${query}`}>People</Link></li>
                <li className={`pl-5 py-2 hover:bg-gray-50 ${isCompanyPath ? "bg-gray-100" : ""}`}><Link to={ isCompanyPath ? `/search/company?query=${query}&page=${pageNumber}` : `/search/company?query=${query}`}>Company</Link></li>
              </ul>
            </div>
          </div>
        </aside>
        <section className=" w-full">
          { isSearchPath ? <SearchCardList results = {results} total_pages={total_pages} page={page}  /> : <Outlet /> }
        </section>
      </section>
    </>
  )
}

export default Search