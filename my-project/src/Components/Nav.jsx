import React from 'react'

const Nav = () => {
  return (
    <>
    <nav className="bg-slate-800 shadow-md">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-xl font-bold text-white">Entertainment</div>
        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <a href="#" className=" text-white hover:text-blue-600">
            Movies
          </a>
          <a href="#" className=" text-white hover:text-blue-600">
            Sports
          </a>
          <a href="#" className=" text-white hover:text-blue-600">
            TV Serial
          </a>
          <a href="#" className=" text-white hover:text-blue-600">
            Gaana
          </a>
        </div>
        {/* Mobile Toggle */}
        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none cursor-pointer text-white text-xl">
              ☰
            </summary>
            <div className="absolute right-0 mt-2 w-40 bg-white shadow-lg rounded-md py-2 z-10">
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Movies
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Sports
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                TV Serials
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-gray-700 hover:text-blue-600"
              >
                Gaana
              </a>
            </div>
          </details>
        </div>
      </div>
    </div>
  </nav>

    </>
  )
}

export default Nav