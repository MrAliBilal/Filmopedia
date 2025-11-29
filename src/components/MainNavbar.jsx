import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router"

const MainNavbar = () => {

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const location = useLocation();
  const isRootPath = location.pathname === '/';
  const closeMenu = () => setIsMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20); // change color after 20px scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-20 top-0 start-0 sm:px-6 transition-colors duration-300 
      ${isScrolled
        ? "bg-primary-500 shadow-md"
        : isRootPath
          ? "bg-transparent"
          : "bg-primary-500"
      }`}>
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-3.5">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src="/logo.png" className="h-8" alt="Flowbite Logo" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-white max-[450px]:hidden">Filmopedia</span>
        </Link>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Documentation</button>
          <button data-collapse-toggle="navbar-sticky" type="button" onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              // X (Close)
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" className="w-5 h-5"
                viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              // Hamburger icon
              <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg"
                fill="none" viewBox="0 0 17 14" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>
        </div>
        <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? "block" : "hidden"
          }`} id="navbar-sticky">
          <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 ${isMenuOpen ? "bg-primary-500" : ""} `}>
            <li>
              <NavLink
                to="/"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 transition ${isActive ? "text-blue-500" : "text-white hover:text-blue-700"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movie"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 hover:text-blue-700 ${isActive ? "text-blue-500" : "text-white hover:text-blue-700"
                  }`
                }
              >
                Movies
              </NavLink>
            </li>
            <li>
                            <NavLink
                to="/tv"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0  ${isActive ? "text-blue-500" : "text-white hover:text-blue-700"
                  }`
                }
              >
                TV Show
              </NavLink>
              </li>
            <li>
                            <NavLink
                to="/anime"
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block py-2 px-3 md:p-0 transition ${isActive ? "text-blue-500" : "text-white hover:text-blue-700"
                  }`
                }
              >
                Anime
              </NavLink>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default MainNavbar