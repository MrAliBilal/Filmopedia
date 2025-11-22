import { createBrowserRouter } from "react-router";
import App from "../App";
import MainLayout from "../layouts/MainLayout";
import IndexLayout from "../layouts/IndexLayout";
import Search from "../pages/search/Search";
import MoviesSearch from "../pages/search/MoviesSearch";
import { allSearchLoader, movieSearchLoader, tvSearchLoader, peopleSearchLoader, animeSearchLoader, companySearchLoader, collectionSearchLoader, moviesLoader, tvLoader, animeLoader } from "../API/SearchLoader.jsx";
import TVSearch from "../pages/search/TVSearch.jsx";
import PeopleSearch from "../pages/search/PeopleSearch.jsx";
import AnimeSearch from "../pages/search/AnimeSearch.jsx";
import CollectionSearch from "../pages/search/CollectionSearch.jsx";
import CompanySearch from "../pages/search/CompanySearch.jsx";
import Movie from "../pages/Movie.jsx";
import Tv from "../pages/Tv.jsx";
import Anime from "../pages/Anime.jsx";
import NotFound from "../pages/NotFound.jsx";
import RouteError from "../pages/RouteError.jsx.jsx";


export const router = createBrowserRouter([
  {
    Component: IndexLayout,
    children: [
      { index: true, Component: App },
    ],
  },

  {
    Component: MainLayout,
    children: [
      {
        path: "/search",
        Component: Search,
        loader: allSearchLoader,
        children: [
          { path: "movie?", Component: MoviesSearch, loader: movieSearchLoader, errorElement: <RouteError /> },
          { path: "tv?", Component: TVSearch, loader: tvSearchLoader, errorElement: <RouteError /> },
          { path: "anime?", Component: AnimeSearch, loader: animeSearchLoader, errorElement: <RouteError /> },
          { path: "people?", Component: PeopleSearch, loader: peopleSearchLoader, errorElement: <RouteError /> },
          { path: "collection", Component: CollectionSearch, loader: collectionSearchLoader, errorElement: <RouteError /> },
          { path: "company", Component: CompanySearch, loader: companySearchLoader, errorElement: <RouteError /> },
        ],
      },
      {
        path: "/movie",
        Component: Movie,
        loader: moviesLoader,
        errorElement: <RouteError />
      },
      {
        path: "/tv",
        Component: Tv,
        loader: tvLoader,
        errorElement: <RouteError />
      },
      {
        path: "/anime",
        Component: Anime,
        loader: animeLoader,
        errorElement: <RouteError />
      },

      {
        path: "*",
        Component: NotFound
      }
    ]
  }
]);