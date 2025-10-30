import React from 'react'

const NewTempNavbar = () => {
  return (
    <>
        <nav className="flex items-center justify-between px-8 py-4 text-white w-screen">
      {/* Left: Brand */}
      <div className="text-2xl font-bold">Filmopeda</div>

      {/* Center: Navigation Links */}
      <ul className="hidden md:flex space-x-8 text-lg">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Movies</a></li>
        <li><a href="#" className="hover:text-gray-400">TV Show</a></li>
        <li><a href="#" className="hover:text-gray-400">Anime</a></li>
      </ul>

      {/* Right: Documentation */}
      <a
        href="#"
        className="hidden md:block bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-semibold"
      >
        Documentation
      </a>

    </nav>
    </>
  )
}

export default NewTempNavbar