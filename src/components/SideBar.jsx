import { Link, useLocation, useSearchParams } from "react-router";

const SideBar = () => {
    const location = useLocation();
    const isSearchPath = location.pathname === '/search';
    const isMoviesPath = location.pathname === '/search/movie';
    const isTVShowPath = location.pathname === '/search/tv';
    const isAnimePath = location.pathname === '/search/anime';
    const isPeoplePath = location.pathname === '/search/people';
    const isCompanyPath = location.pathname === '/search/company';
    const isCollectionPath = location.pathname === '/search/collection';


    const [searchParams] = useSearchParams();
    const query = searchParams.get('query') || ''
    const pageNumber = searchParams.get('page') || ''

    return (
        <aside className="mr-10 max-md:hidden sticky top-24 h-fit">
            <div className=" w-64">
                <div className="bg-sky-500 rounded-t-lg ">
                    <h1 className="text-white p-5 font-bold">Search Results</h1>
                </div>
                <div className=" rounded-b-lg border-solid border-t-0 border-2 border-gray-200">
                    <ul className="pt-2">
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isSearchPath ? "bg-gray-100" : ""}`}><Link to={isSearchPath ? `/search?query=${query}&page=${pageNumber}` : `/search?query=${query}`}>All</Link></li>
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isMoviesPath ? "bg-gray-100" : ""}`}><Link to={isMoviesPath ? `/search/movie?query=${query}&page=${pageNumber}` : `/search/movie?query=${query}`}>Movies</Link></li>
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isTVShowPath ? "bg-gray-100" : ""}`}><Link to={isTVShowPath ? `/search/tv?query=${query}&page=${pageNumber}` : `/search/tv?query=${query}`}>TV Show</Link></li>
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isCollectionPath ? "bg-gray-100" : ""}`}><Link to={isCollectionPath ? `/search/collection?query=${query}&page=${pageNumber}` : `/search/collection?query=${query}`}>Collection</Link></li>
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isAnimePath ? "bg-gray-100" : ""}`}><Link to={isAnimePath ? `/search/anime?query=${query}&page=${pageNumber}` : `/search/anime?query=${query}`}>Anime</Link></li>
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isPeoplePath ? "bg-gray-100" : ""}`}><Link to={isPeoplePath ? `/search/people?query=${query}&page=${pageNumber}` : `/search/people?query=${query}`}>People</Link></li>
                        <li className={`pl-5 py-2 hover:bg-gray-50 ${isCompanyPath ? "bg-gray-100" : ""}`}><Link to={isCompanyPath ? `/search/company?query=${query}&page=${pageNumber}` : `/search/company?query=${query}`}>Company</Link></li>
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default SideBar