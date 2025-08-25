import React from 'react'

const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white py-10 mt-16">
  <div className="max-w-7xl mx-auto px-6 sm:px-12">
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Brand */}
      <div>
        <h2 className="text-2xl font-bold text-purple-400 mb-4">StreamFlix</h2>
        <p className="text-sm text-gray-400">
          Your ultimate destination for movies, series, and original shows.
          Watch anytime, anywhere.
        </p>
      </div>
      {/* Links */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Explore</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Movies
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              TV Shows
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Originals
            </a>
          </li>
        </ul>
      </div>
      {/* Support */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Support</h3>
        <ul className="space-y-2 text-sm text-gray-400">
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Help Center
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Contact Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Privacy Policy
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-purple-400 transition">
              Terms of Use
            </a>
          </li>
        </ul>
      </div>
      {/* Social Media */}
      <div>
        <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
        <div className="flex space-x-4 mt-2">
          <a
            href="#"
            className="hover:text-purple-400 transition"
            aria-label="Facebook"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.01 3.66 9.16 8.44 9.93v-7.03h-2.54v-2.9h2.54v-2.21c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.62.77-1.62 1.56v1.89h2.77l-.44 2.9h-2.33V22c4.78-.77 8.44-4.92 8.44-9.93z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-purple-400 transition"
            aria-label="Twitter"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M22.46 6c-.77.35-1.6.59-2.46.7a4.26 4.26 0 001.87-2.36c-.82.49-1.73.84-2.7 1.03a4.26 4.26 0 00-7.26 3.89c-3.54-.17-6.68-1.87-8.78-4.43a4.23 4.23 0 001.32 5.68 4.26 4.26 0 01-1.93-.53v.05a4.26 4.26 0 003.42 4.18 4.3 4.3 0 01-1.92.07 4.26 4.26 0 003.97 2.95A8.55 8.55 0 012 19.54a12.06 12.06 0 006.52 1.91c7.84 0 12.13-6.5 12.13-12.13l-.01-.55A8.56 8.56 0 0022.46 6z" />
            </svg>
          </a>
          <a
            href="#"
            className="hover:text-purple-400 transition"
            aria-label="Instagram"
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm0 1.5h8.5A4.25 4.25 0 0120.5 7.75v8.5a4.25 4.25 0 01-4.25 4.25h-8.5A4.25 4.25 0 013.5 16.25v-8.5A4.25 4.25 0 017.75 3.5zm4.25 3.25a5.5 5.5 0 100 11 5.5 5.5 0 000-11zm0 1.5a4 4 0 110 8 4 4 0 010-8zm5.25-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z" />
            </svg>
          </a>
        </div>
      </div>
    </div>
    {/* Bottom */}
    <div className="mt-10 text-center text-sm text-gray-500 border-t border-gray-700 pt-6">
      © 2025 StreamFlix. All rights reserved.
    </div>
  </div>
</footer>

    </>
  )
}

export default Footer