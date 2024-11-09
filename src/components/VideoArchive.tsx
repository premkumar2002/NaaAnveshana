import React, { useState } from "react";
import { Search, Calendar } from "lucide-react";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom"; // Import Link for navigation
import Logo from "./Logo";

interface Video {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
  date: string;
}

const VideoArchive: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPeriod, setFilterPeriod] = useState("all");

  const videos: Video[] = [
    {
      id: "h6yLvBwX0Fc",
      title: "Exploring Jordan",
      thumbnail: "https://i.ytimg.com/vi/h6yLvBwX0Fc/maxresdefault.jpg",
      views: "1.2K",
      duration: "15:40",
      date: "2024-03-01",
    },
    {
      id: "coetEb3cJ6A",
      title: "Adventures in Mexico",
      thumbnail: "https://i.ytimg.com/vi/coetEb3cJ6A/maxresdefault.jpg",
      views: "2.5K",
      duration: "12:20",
      date: "2024-02-15",
    },
    {
      id: "Nz43oMeGVAQ",
      title: "Beautiful Thailand",
      thumbnail: "https://i.ytimg.com/vi/Nz43oMeGVAQ/maxresdefault.jpg",
      views: "3.1K",
      duration: "18:15",
      date: "2024-02-01",
    },
    {
      id: "nXtqDC8D24M",
      title: "Hidden Gems of Asia",
      thumbnail: "https://i.ytimg.com/vi/nXtqDC8D24M/maxresdefault.jpg",
      views: "1.8K",
      duration: "14:30",
      date: "2024-01-20",
    },
    {
      id: "v0wM-46u6vM",
      title: "European Adventure",
      thumbnail: "https://i.ytimg.com/vi/v0wM-46u6vM/maxresdefault.jpg",
      views: "2.1K",
      duration: "16:45",
      date: "2024-01-10",
    },
    {
      id: "mFJHD7alpkU",
      title: "South American Journey",
      thumbnail: "https://i.ytimg.com/vi/mFJHD7alpkU/maxresdefault.jpg",
      views: "1.9K",
      duration: "13:25",
      date: "2023-12-25",
    },
    {
      id: "8Veba3Ep9Cg",
      title: "African Safari Experience",
      thumbnail: "https://i.ytimg.com/vi/8Veba3Ep9Cg/maxresdefault.jpg",
      views: "2.3K",
      duration: "17:50",
      date: "2023-12-15",
    },
  ];

  const filterOptions = [
    { value: "all", label: "All Time" },
    { value: "7", label: "Last 7 Days" },
    { value: "30", label: "Last 30 Days" },
    { value: "2024", label: "2024" },
    { value: "2023", label: "2023" },
  ];

  const filteredVideos = videos.filter((video) => {
    const matchesSearch = video.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    if (filterPeriod === "all") return matchesSearch;

    const videoDate = new Date(video.date);
    const now = new Date();

    if (filterPeriod === "7" || filterPeriod === "30") {
      const days = parseInt(filterPeriod);
      const daysAgo = new Date(now.setDate(now.getDate() - days));
      return matchesSearch && videoDate >= daysAgo;
    }

    return matchesSearch && videoDate.getFullYear().toString() === filterPeriod;
  });

  return (
    <div className="video-archive-background py-20">
      <div className="container mx-auto px-4">
        {/* Header Section with Logo and Home Button */}
        <div className="flex justify-between items-center mb-8">
          <Logo />
          <Link
            to="/"
            className="bg-black text-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
          >
            Home
          </Link>
        </div>

        <h1 className="text-3xl font-bold text-center mb-12">Video Archive</h1>

        {/* Search and Filter Section */}
        <div className="max-w-4xl mx-auto mb-8 flex space-x-3">
          {/* Search Input */}
          <div className="relative w-full flex-grow">
            <input
              type="text"
              placeholder="Search videos..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-300 shadow-lg focus:outline-none focus:ring focus:ring-yellow-500 transition duration-300"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>

          {/* Filter Dropdown */}
          <div className="relative">
            <select
              value={filterPeriod}
              onChange={(e) => setFilterPeriod(e.target.value)}
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded-lg shadow-lg leading-tight focus:outline-none focus:ring focus:ring-yellow-500 transition duration-300"
            >
              {filterOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
            <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* Video Cards Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVideos.map((video) => (
            <VideoCard key={video.id} {...video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoArchive;
