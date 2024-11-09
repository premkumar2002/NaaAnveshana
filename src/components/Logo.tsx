import React from 'react';
import { Compass } from 'lucide-react';

const Logo: React.FC = () => (
  <div className="flex items-center gap-2">
    <div className="relative">
      <Compass className="h-8 w-8 text-yellow-500" />
      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-blue-500 rounded-full border-2 border-white" />
    </div>
    <span className="text-2xl font-bold">Naa Anveshana</span>
  </div>
);

export default Logo;