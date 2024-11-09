import React from 'react';
import { Play } from 'lucide-react';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  views: string;
  duration: string;
}

const VideoCard: React.FC<VideoCardProps> = ({ id, title, thumbnail, views, duration }) => {
  return (
    <a
      href={`https://www.youtube.com/watch?v=${id}`}
      target="_blank"
      rel="noopener noreferrer"
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl">
        <img
          src={thumbnail}
          alt={title}
          className="w-full aspect-video object-cover transform group-hover:scale-105 transition duration-300"
        />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Play className="w-16 h-16 text-white" />
        </div>
        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
          {duration}
        </div>
      </div>
      <div className="mt-4">
        <h3 className="text-lg font-semibold group-hover:text-yellow-600 transition">{title}</h3>
        <p className="text-gray-900 text-sm">{views} views</p>
      </div>
    </a>
  );
}

export default VideoCard;