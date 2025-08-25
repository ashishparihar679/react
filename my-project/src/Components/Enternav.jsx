import React from 'react'

const Enternav = () => {
  return (
    <>
    <nav className="bg-gray-800 shadow-md">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between h-16 items-center">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center">
        <span className="text-2xl font-bold text-red-500 tracking-wide">
          MyOTT
        </span>
      </div>
      {/* Menu Items */}
      <div className="hidden md:flex space-x-8 text-lg font-medium">
        <a
          href="#"
          className="hover:text-red-400 transition-colors duration-300"
        >
          🎥 Video
        </a>
        <a
          href="#"
          className="hover:text-blue-400 transition-colors duration-300"
        >
          🎧 Audio
        </a>
        <a
          href="#"
          className="hover:text-green-400 transition-colors duration-300"
        >
          🍿 Movies
        </a>
        <a
          href="#"
          className="hover:text-yellow-400 transition-colors duration-300"
        >
          🎵 Songs
        </a>
      </div>
      {/* Right Side (Search + Profile) */}
      <div className="flex items-center space-x-4">
        {/* Search Box */}
        <input
          type="text"
          placeholder="Search..."
          className="px-3 py-1 rounded-lg bg-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-red-400"
        />
        {/* Profile Icon */}
        <div className="w-9 h-9 rounded-full bg-red-500 flex items-center justify-center cursor-pointer hover:scale-110 transition">
          <span className="font-bold">U</span>
        </div>
      </div>
    </div>
  </div>
</nav>

    </>
  )
}

export default Enternav