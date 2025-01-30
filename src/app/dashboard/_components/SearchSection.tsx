"use client"

import { Search } from 'lucide-react';
import React from 'react';

interface SearchSectionProps {
  onSearchInput: (value: string) => void;
}

const SearchSection: React.FC<SearchSectionProps> = ({ onSearchInput }) => {
  return (
    <div className="p-10 bg-gradient-to-br flex flex-col from-green-200 items-center justify-center via-purple-600 to-pink-300">
      <h2 className="text-3xl text-white font-bold">Browse All Templates</h2>
      <p className="text-white">What would you like to create today?</p>

      <div className="w-full flex justify-center items-center">
        <div className="flex gap-2 items-center p-2 border rounded-lg bg-white my-5 w-full sm:w-[75%] md:w-[50%]">
          <Search className="text-primary" />
          <input
            type="text"
            placeholder="Search..."
            onChange={(e) => onSearchInput(e.target.value)}
            className="bg-transparent focus:outline-none placeholder-gray-400"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchSection;
