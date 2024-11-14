'use client'

import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { Recipe } from '@/types';
import { Plus, Minus, Upload, ChevronLeft, ChevronRight, Save } from 'lucide-react'

const EditRecipe: React.FC = () => {
  const { userId } = useAuth();
  const router = useRouter();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [recipe, setRecipe] = useState<Recipe>({
    id: 0,
    title: '',
    image: '',
    ingredients: [''],
    instructions: '',
    authorId: ''
  });
  const [step, setStep] = useState(1);

  // Fetch existing recipe data
  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const response = await fetch(`/api/recipes/${params.id}`, {
          method: 'GET'
        });
        if (!response.ok) throw new Error('Failed to fetch recipe');
        const data = await response.json();

        // Verify user is the author
        if (data.authorId !== userId) {
          router.push('/sign-in');
          return;
        }

        setRecipe(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load recipe');
      } finally {
        setIsLoading(false);
      }
    };

    if (userId) {
      fetchRecipe();
    }
  }, [params.id, userId, router]);

  const [hasImage, setHasImage] = useState(recipe.image ? true : false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleIngredientChange = (index: number, value: string) => {
    setRecipe((prev) => {
      const newIngredients = [...prev.ingredients];
      newIngredients[index] = value;
      return { ...prev, ingredients: newIngredients };
    });
  };

  const addIngredient = () => {
    setRecipe((prev) => ({
      ...prev,
      ingredients: [...prev.ingredients, ''],
    }));
  };

  const handleRemoveIngredient = (index: number) => {
    setRecipe((prev) => {
      const newIngredients = [...prev.ingredients];
      newIngredients.splice(index, 1);
      return { ...prev, ingredients: newIngredients };
    });
  };

  const handleImageUpload = (result: any) => {
    setRecipe((prev) => ({ ...prev, image: result.info.secure_url }));
  };

  // PUT request to update recipe
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!userId) {
      alert('You must be logged in to edit this recipe');
      return;
    }

    try {
      const response = await fetch(`/api/recipes/${params.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(recipe),
      });

      if (response.ok) {
        router.push(`/dashboard`);
        router.refresh(); // Refresh the server cache
      } else {
        throw new Error('Failed to update recipe');
      }
    } catch (error) {
      console.error('Error updating recipe:', error);
      alert('Failed to update recipe. Please try again.');
    }
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Basic Information</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                  Recipe Title
                </label>
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={recipe.title}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                  placeholder="Enter your recipe title"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Recipe Image</label>
                <CldUploadWidget uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`} onSuccess={handleImageUpload}>
                  {({ open }) => (
                    <button
                      type="button"
                      onClick={() => open()}
                      className="w-full px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] flex items-center justify-center"
                    >
                      <Upload className="w-5 h-5 mr-2" />
                      Upload Image
                    </button>
                  )}
                </CldUploadWidget>
                {recipe.image && (
                  <div className="mt-4 relative">
                    <Image src={recipe.image} alt="Recipe preview" width={300} height={200} className="rounded-md" />
                    {hasImage && (
                      <button
                        type="button"
                        onClick={() => {
                          setRecipe((prev) => ({ ...prev, image: '' }));
                          setHasImage(false);
                        }}
                        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                    )}
                  </div>
                )}
              </div>
            </div>
          </>
        );
      case 2:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
            <div className="space-y-4">
              {recipe.ingredients.map((ingredient, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <input
                    type="text"
                    value={ingredient}
                    onChange={(e) => handleIngredientChange(index, e.target.value)}
                    className="flex-grow px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                    placeholder={`Ingredient ${index + 1}`}
                  />
                  <button
                    type="button"
                    onClick={() => handleRemoveIngredient(index)}
                    className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                </div>
              ))}
              <button
                type="button"
                onClick={addIngredient}
                className="w-full px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] flex items-center justify-center"
              >
                <Plus className="w-5 h-5 mr-2" />
                Add Ingredient
              </button>
            </div>
          </>
        );
      case 3:
        return (
          <>
            <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
            <div>
              <label htmlFor="instructions" className="block text-sm font-medium text-gray-700 mb-1">
                Cooking Steps
              </label>
              <textarea
                id="instructions"
                name="instructions"
                value={recipe.instructions}
                onChange={handleInputChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md h-64 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
                placeholder="Describe the cooking process step by step..."
              />
            </div>
          </>
        );
      default:
        return null;
    }
  };

  if (isLoading) return (
    <div className="flex justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
    </div>
  );

  if (error) return <div className="min-h-screen bg-[#f5faf7] p-8 flex justify-center items-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#f5faf7] text-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-8 text-center text-[#16A34A]">Edit Recipe</h1>
        <div className="mb-8">
          <div className="flex items-center justify-between">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className={`w-1/3 h-2 ${
                  i <= step ? 'bg-[#16A34A]' : 'bg-gray-200'
                } ${i === 1 ? 'rounded-l-full' : ''} ${i === 3 ? 'rounded-r-full' : ''}`}
              />
            ))}
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-500">
            <span>Basic Info</span>
            <span>Ingredients</span>
            <span>Instructions</span>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          {renderStep()}
          <div className="mt-8 flex justify-between">
            {step > 1 && (
              <button
                type="button"
                onClick={() => setStep((prev) => prev - 1)}
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 flex items-center"
              >
                <ChevronLeft className="w-5 h-5 mr-2" />
                Previous
              </button>
            )}
            {step < 3 ? (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setStep(prev => prev + 1);
                }}
                className="ml-auto px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] flex items-center"
              >
                Next
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
            ) : (
              <button
                type="submit"
                className="ml-auto px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] flex items-center"
              >
                <Save className="w-5 h-5 mr-2" />
                Save Changes
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditRecipe;