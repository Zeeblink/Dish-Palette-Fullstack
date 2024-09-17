"use client"
import React, { useState } from 'react';
import { GetServerSideProps } from 'next';

interface Recipe {
  id: string;
  title: string;
  description: string;
}

interface SearchResultsProps {
  initialResults: Recipe[];
}

const SearchResultsPage: React.FC<SearchResultsProps> = ({ initialResults }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Recipe[]>(initialResults);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to search recipes
    // Update setResults with the new search results
  };

  return (
    <div className="bg-[#f5faf7] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-[#16a34a] mb-6">Search Recipes</h1>
        <form onSubmit={handleSearch} className="mb-8">
          <div className="flex">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
              placeholder="Search recipes..."
            />
            <button type="submit" className="bg-[#16a34a] text-white px-4 py-2 rounded-r hover:bg-[#7bcb99]">
              Search
            </button>
          </div>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {results.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-lg shadow-md p-4">
              <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
              <p className="text-gray-600">{recipe.description}</p>
              {/* Add more recipe details or a link to the full recipe */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Fetch initial search results or popular recipes
  const initialResults: Recipe[] = [
    // Add some dummy data or fetch from your API
  ];
  return { props: { initialResults } };
};

export default SearchResultsPage;