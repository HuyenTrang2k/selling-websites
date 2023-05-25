import React from 'react';
import { Wave } from 'react-animated-text';

const Announcement = () => {
  return (
    <div className="w-full h-10 text-white flex items-center justify-center font-semibold text-lg bg-gradient-to-r from-purple-800 via-indigo-800 to-teal-500 border-1 border-gray-300">
      <Wave
        text="Super Deal! Free Shipping on Orders Over $50"
        effect="jump"
        effectChange={1}
        effectDuration={1.5}
        effectDelay={0.5}
        speed={50}
      />
    </div>
  );
};

export default Announcement;
