import React from 'react';

interface CountryCardProps {
  name: string;
  flagCode: string;
  image: string;
  landmark: string;
}

const CountryCard: React.FC<CountryCardProps> = ({ name, flagCode, image, landmark }) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-xl">
      <div className="relative aspect-[4/3]">
        <img
          src={image}
          alt={landmark}
          className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
          <div className="absolute bottom-6 left-6 flex items-center gap-3">
            <img
              src={`https://flagcdn.com/${flagCode}.svg`}
              alt={`${name} flag`}
              className="w-8 h-8 rounded-full border-2 border-white shadow-lg"
            />
            <div>
              <h3 className="text-xl font-bold text-white">{name}</h3>
              <p className="text-gray-300 text-sm">{landmark}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CountryCard;