import Footer from "./Footer";
import Nav from "./Nav";
function App() {
  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-600 text-white p-4 shadow">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">MyApp</h1>
          <ul className="flex space-x-4">
            <li>
              <a href="/" className="hover:text-gray-200">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-gray-200">
                About
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-gray-200">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {/* Content */}
      <div className="p-4">
        <h2 className="text-2xl font-semibold">Welcome to MyApp</h2>
        <p>This is a demo of a Tailwind CSS navbar in HTML.</p>
      </div>

      <h1 className="underline">main ccccc</h1>
      <h1>hello</h1>
      <Footer/>
      <Nav/>
    </>
  );
}

export default App;
