import React from 'react';
import { Map as MapIcon } from 'lucide-react';

const MapSection: React.FC = () => {
  return (
    <section id="map" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapIcon className="h-8 w-8 text-yellow-500" />
            <h2 className="text-3xl font-bold">Our Travel Map</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore the beautiful destinations we've covered in our videos. From historic monuments to 
            natural wonders, join us in discovering the world's most breathtaking locations.
          </p>
        </div>
        <div className="rounded-xl overflow-hidden shadow-lg max-w-4xl mx-auto">
          <img
            src="https://www.blindsonwindows.com/image/catalog/Maps/Map_10,_didesnis_maketas.jpg"
            alt="World Travel Map"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
}

export default MapSection;