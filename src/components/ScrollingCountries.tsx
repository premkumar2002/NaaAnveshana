import React from 'react';

const ScrollingCountries: React.FC = () => {
  const countries = [
    { code: 'us', name: 'United States' },
    { code: 'ca', name: 'Canada' },
    { code: 'es', name: 'Spain' },
    { code: 'fr', name: 'France' },
    { code: 'et', name: 'Ethiopia' },
    { code: 'cn', name: 'China' },
    { code: 'jm', name: 'Jamaica' },
    { code: 'qa', name: 'Qatar' },
    { code: 'ru', name: 'Russia' },
    { code: 'pt', name: 'Portugal' },
    { code: 'lc', name: 'Saint Lucia' },
    { code: 'kn', name: 'Saint Kitts and Nevis' },
    { code: 'kr', name: 'South Korea' },
    { code: 'gb', name: 'United Kingdom' },
    { code: 'jp', name: 'Japan' },
    { code: 'ag', name: 'Antigua and Barbuda' },
    { code: 'bs', name: 'Bahamas' },
    { code: 'bb', name: 'Barbados' },
    { code: 'be', name: 'Belgium' },
    { code: 'mx', name: 'Mexico' },
    { code: 'bz', name: 'Belize' },
    { code: 'co', name: 'Colombia' },
    { code: 'gr', name: 'Greece' },
    { code: 'ht', name: 'Haiti' },
    { code: 'hn', name: 'Honduras' },
    { code: 'hk', name: 'Hong Kong' },
    { code: 'va', name: 'Vatican City' },
    { code: 'ie', name: 'Ireland' },
    { code: 'it', name: 'Italy' },
    { code: 'my', name: 'Malaysia' },
    { code: 'pr', name: 'Puerto Rico' },
    { code: 'ae', name: 'UAE' },
    { code: 'so', name: 'Somalia' },
    { code: 'dj', name: 'Djibouti' },
    { code: 'tr', name: 'Turkey' },
    { code: 'rs', name: 'Serbia' },
    { code: 'xk', name: 'Kosovo' },
    { code: 'me', name: 'Montenegro' },
    { code: 'ba', name: 'Bosnia' },
    { code: 'am', name: 'Armenia' },
    { code: 'pa', name: 'Panama' },
    { code: 'cr', name: 'Costa Rica' },
    { code: 'pe', name: 'Peru' },
    { code: 'br', name: 'Brazil' },
    { code: 'sv', name: 'El Salvador' },
    { code: 'ar', name: 'Argentina' },
    { code: 'py', name: 'Paraguay' },
    { code: 'cu', name: 'Cuba' },
    { code: 'tz', name: 'Tanzania' },
    { code: 'mr', name: 'Mauritania' },
    { code: 'af', name: 'Afghanistan' },
    { code: 'uz', name: 'Uzbekistan' },
    { code: 'jo', name: 'Jordan' },
    { code: 'ge', name: 'Georgia' },
    { code: 'th', name: 'Thailand' },
    { code: 'mu', name: 'Mauritius' },
    { code: 'mg', name: 'Madagascar' },
    { code: 'au', name: 'Australia' },
    { code: 'fj', name: 'Fiji' },
    { code: 'vu', name: 'Vanuatu' },
    { code: 'ws', name: 'Samoa' },
    { code: 'tv', name: 'Tuvalu' },
    { code: 'to', name: 'Tonga' }
  ];

  return (
    <div className="bg-gray-900 py-8 overflow-hidden">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-white mb-6">Countries Visited</h2>
      </div>
      <div className="relative">
        <div className="flex animate-scroll space-x-8 whitespace-nowrap">
          {[...countries, ...countries].map((country, index) => (
            <div
              key={`${country.code}-${index}`}
              className="inline-flex items-center space-x-2 bg-gray-800 rounded-full px-6 py-3"
            >
              <img
                src={`https://flagcdn.com/${country.code}.svg`}
                alt={`${country.name} flag`}
                className="w-6 h-6 rounded-full"
              />
              <span className="text-white text-sm font-medium min-w-[120px]">{country.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ScrollingCountries;