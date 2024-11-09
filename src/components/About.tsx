import React from 'react';
import { Globe2, Map, Camera, Heart } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8">About Naa Anveshana</h1>
          
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="h-64 bg-cover bg-center" style={{
              backgroundImage: 'url("https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=2070")'
            }} />
            
            <div className="p-8">
              <p className="text-xl text-gray-600 mb-8">
                Welcome to Naa Anveshana! I'm passionate about exploring the world and sharing 
                incredible stories through my lens. From bustling cities to remote landscapes, 
                every journey is an opportunity to discover something new.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                <div className="flex items-start gap-4">
                  <Globe2 className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Global Explorer</h3>
                    <p className="text-gray-600">
                      Visited 75 countries and counting, each destination brings new perspectives 
                      and cultural insights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Camera className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Visual Storytelling</h3>
                    <p className="text-gray-600">
                      Capturing moments and sharing experiences through engaging video content.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Map className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Travel Guide</h3>
                    <p className="text-gray-600">
                      Providing practical tips and insights for fellow travelers.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Heart className="w-8 h-8 text-yellow-500 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Community</h3>
                    <p className="text-gray-600">
                      Building a community of travel enthusiasts and cultural explorers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <a
                  href="https://www.youtube.com/@NaaAnveshana"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
                >
                  Join the Journey
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;