import { createBrowserRouter } from "react-router";
import App from "../App";
import IndexLayout from "../layouts/IndexLayout";
import Search from "../pages/search/Search";
import MoviesSearch from "../pages/search/MoviesSearch";
import { allSearchLoader, movieSearchLoader, tvSearchLoader, peopleSearchLoader, animeSearchLoader, companySearchLoader, collectionSearchLoader, moviesLoader } from "../API/SearchLoader.jsx";
import TVSearch from "../pages/search/TVSearch.jsx";
import PeopleSearch from "../pages/search/PeopleSearch.jsx";
import AnimeSearch from "../pages/search/AnimeSearch.jsx";
import CollectionSearch from "../pages/search/CollectionSearch.jsx";
import CompanySearch from "../pages/search/CompanySearch.jsx";
import Movie from "../pages/Movie.jsx";


export const router = createBrowserRouter([
  { Component: IndexLayout,
    children: [
      {index: true, Component: App},
    ],
  },
  { path: "/search",
    Component: Search,
    loader: allSearchLoader,
    children: [
      {path: "movie?", Component: MoviesSearch, loader: movieSearchLoader,},
      {path: "tv?", Component: TVSearch, loader: tvSearchLoader,},
      {path: "anime?", Component: AnimeSearch, loader: animeSearchLoader, },
      {path: "people?", Component: PeopleSearch, loader: peopleSearchLoader,},
      {path: "collection", Component: CollectionSearch, loader: collectionSearchLoader,},
      {path: "company", Component: CompanySearch, loader: companySearchLoader,},
    ],
  },
  {
    path: "/movie",
    Component: Movie,
    loader: moviesLoader,
  }
]);