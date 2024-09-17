"use client"
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CreateRecipePage: React.FC = () => {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [ingredients, setIngredients] = useState('');
  const [instructions, setInstructions] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to create recipe
    router.push('/profile');
  };

  return (
    <div className="bg-[#f5faf7] min-h-screen p-8">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold text-[#16a34a] mb-6">Create New Recipe</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="ingredients" className="block text-gray-700 font-bold mb-2">Ingredients</label>
            <textarea
              id="ingredients"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
              rows={4}
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="instructions" className="block text-gray-700 font-bold mb-2">Instructions</label>
            <textarea
              id="instructions"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#7bcb99]"
              rows={6}
              required
            ></textarea>
          </div>
          <button type="submit" className="bg-[#16a34a] text-white px-4 py-2 rounded hover:bg-[#7bcb99]">
            Create Recipe
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateRecipePage;