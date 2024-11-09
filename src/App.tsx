import { Link } from "react-router-dom";
import { Youtube } from "lucide-react";
import Logo from "./components/Logo";
import VideoCard from "./components/VideoCard";
import MapSection from "./components/MapSection";
import About from "./components/About";
import ScrollingCountries from "./components/ScrollingCountries";

function App() {
  const featuredVideos = [
    {
      id: "h6yLvBwX0Fc",
      title: "Exploring Jordan",
      thumbnail: "https://i.ytimg.com/vi/h6yLvBwX0Fc/maxresdefault.jpg",
      views: "1.2K",
      duration: "15:40",
    },
    {
      id: "coetEb3cJ6A",
      title: "Adventures in Mexico",
      thumbnail: "https://i.ytimg.com/vi/coetEb3cJ6A/maxresdefault.jpg",
      views: "2.5K",
      duration: "12:20",
    },
    {
      id: "Nz43oMeGVAQ",
      title: "Beautiful Thailand",
      thumbnail: "https://i.ytimg.com/vi/Nz43oMeGVAQ/maxresdefault.jpg",
      views: "3.1K",
      duration: "18:15",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <header
        className="relative h-[70vh] bg-cover bg-center"
        style={{
          backgroundImage: 'url("src/hq720-Photoroom.png")',
        }}
      >
        <div className="absolute inset-0 bg-black/50">
          <nav className="container mx-auto px-4 py-6 flex items-center justify-between text-white">
            <Logo />
            <div className="flex items-center gap-6">
              <a href="#videos" className="hover:text-yellow-400 transition">
                Videos
              </a>
              <a href="#about" className="hover:text-yellow-400 transition">
                About
              </a>
              <a
                href="https://www.youtube.com/@NaaAnveshana"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 px-4 py-2 rounded-full hover:bg-red-700 transition flex items-center gap-2"
              >
                <Youtube className="h-5 w-5" />
                Subscribe
              </a>
            </div>
          </nav>
          <div className="container mx-auto px-4 h-full flex items-center">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-bold text-white mb-6">
                Explore the World Through My Eyes
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Join me on an incredible journey as we discover hidden gems,
                breathtaking landscapes, and unforgettable experiences across
                the globe.
              </p>
              <a
                href="/videos"
                className="bg-yellow-500 text-black px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
              >
                Watch Videos
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Scrolling Countries */}
      <ScrollingCountries />

      {/* Featured Videos Section */}
      <section id="videos" className="py-20 container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Featured Adventures
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
        <div className="text-center mt-12">
          <Link
            to="/videos"
            className="inline-block bg-gray-900 text-white px-8 py-3 rounded-full hover:bg-gray-800 transition"
          >
            View All Videos
          </Link>
        </div>
      </section>

      {/* Map Section */}
      <MapSection />

      {/* About Section */}
      <section id="about">
        <About />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <Logo />
              <p className="text-gray-400 mt-4">
                Exploring the world one adventure at a time. Join us on our
                journey to discover the most beautiful places on Earth.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#videos"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    Videos
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">
                  Email: NaaAnveshanaaa@gmail.com
                </li>
                <li className="text-gray-400">Phone: +91 70754 26329</li>
                <li className="flex gap-4 mt-4">
                  <a
                    href="https://instagram.com/naa_anveshana"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://facebook.com/NaaAnveshana007"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-yellow-400 transition"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            © {new Date().getFullYear()} Naa Anveshana. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
