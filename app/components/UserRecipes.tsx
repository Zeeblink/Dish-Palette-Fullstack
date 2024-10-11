// components/RecipeList.tsx
import React from 'react';

const UserRecipes = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-semibold mb-4">My Recipes</h3>
      <ul className="space-y-4">
        <li className="flex justify-between items-center">
          <div>Recipe Name 1</div>
          <div className="space-x-2">
            <button className="bg-[#F5FAF7] px-4 py-2 rounded-md shadow-md hover:bg-gray-200">Edit</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
          </div>
        </li>
        <li className="flex justify-between items-center">
          <div>Recipe Name 2</div>
          <div className="space-x-2">
            <button className="bg-[#F5FAF7] px-4 py-2 rounded-md shadow-md hover:bg-gray-200">Edit</button>
            <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600">Delete</button>
          </div>
        </li>
        {/* Add logic to dynamically render user recipes */}
      </ul>
      <button className="bg-[#F5FAF7] text-gray-800 px-4 py-2 mt-6 rounded-md shadow-md hover:bg-gray-200 w-full">
        Add New Recipe
      </button>
    </div>
  );
};

export default UserRecipes;
