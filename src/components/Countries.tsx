import React from 'react';
import CountryCard from './CountryCard';

const Countries: React.FC = () => {
  const countries = [
    {
      name: 'China',
      flagCode: 'cn',
      image: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=2070',
      landmark: 'Great Wall of China'
    },
    {
      name: 'USA',
      flagCode: 'us',
      image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?q=80&w=2069',
      landmark: 'Statue of Liberty'
    },
    {
      name: 'Mexico',
      flagCode: 'mx',
      image: 'https://images.unsplash.com/photo-1512813195386-6cf811ad3542?q=80&w=2070',
      landmark: 'Chichen Itza'
    },
    {
      name: 'India',
      flagCode: 'in',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071',
      landmark: 'Taj Mahal'
    },
    {
      name: 'Australia',
      flagCode: 'au',
      image: 'https://images.unsplash.com/photo-1624138784614-87fd1b6528f8?q=80&w=2033',
      landmark: 'Sydney Opera House'
    },
    {
      name: 'Qatar',
      flagCode: 'qa',
      image: 'https://images.unsplash.com/photo-1594993877167-a41595e8e41d?q=80&w=2070',
      landmark: 'Museum of Islamic Art'
    }
  ];

  return (
    <section id="countries" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Countries Explored</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country) => (
            <CountryCard key={country.name} {...country} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Countries;