import React from 'react';
import Image from 'next/image';

type Recipe = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const RecipeCard = ({ recipe }: { recipe: Recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Image src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{recipe.title}</h3>
        <p className="text-gray-600 mb-4">{recipe.description}</p>
        <button className="bg-[#F5FAF7] text-gray-800 px-4 py-2 rounded-md shadow-md hover:bg-gray-200">
          View Recipe
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
