'use client'
import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useAuth } from '@clerk/nextjs';
import { useRouter, useParams } from 'next/navigation';
import Image from 'next/image';
import { CldUploadWidget } from 'next-cloudinary';
import { Recipe } from '@/app/types';



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

  if (isLoading) return 
  <div className="flex justify-center items-center h-screen">
    <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
  </div>;

  if (error) return <div className="min-h-screen bg-[#f5faf7] p-8 flex justify-center items-center text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#f5faf7] text-gray-800 p-8">
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6 text-[#16A34A]">Edit Recipe</h1>

        {/* Title input */}
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2 font-semibold">Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={recipe.title}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
          />
        </div>

        {/* Image upload */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Recipe Image</label>
          <div className="flex items-center gap-4">
            <CldUploadWidget uploadPreset={`${process.env.NEXT_PUBLIC_UPLOAD_PRESET}`} onSuccess={handleImageUpload}>
              {({ open }) => (
                <button
                  type="button"
                  onClick={() => open()}
                  className="px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e]"
                >
                  Change Image
                </button>
              )}
            </CldUploadWidget>
            {recipe.image && (
              <div className="mt-2">
                <Image src={recipe.image} alt="Recipe preview" width={200} height={200} className="rounded-md" />
              </div>
            )}
            {hasImage && (
              <button
                type="button"
                onClick={() => {
                  setRecipe((prev) => ({ ...prev, image: '' }));
                  setHasImage(false);
                }}
                className="ml-2 px-2 py-1 text-red-500"
              >
                X
              </button>
            )}
          </div>
        </div>

        {/* Ingredients */}
        <div className="mb-4">
          <label className="block mb-2 font-semibold">Ingredients</label>
          {recipe.ingredients.map((ingredient, index) => (
            <div className="flex items-center mb-2" key={index}>
              <input
              key={index}
              type="text"
              value={ingredient}
              onChange={(e) => handleIngredientChange(index, e.target.value)}
              className="w-full px-3 py-2 border rounded-md mb-2 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
              placeholder={`Ingredient ${index + 1}`}
            />
            <button
                type="button"
                onClick={() => handleRemoveIngredient(index)}
                className="ml-2 px-2 py-1 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:ring-opacity-50"
              >
                X
              </button>
            </div>
          ))}
          <button
            type="button"
            onClick={addIngredient}
            className="mt-2 px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:ring-opacity-50"
          >
            Add Ingredient
          </button>
        </div>

        {/* Instructions */}
        <div className="mb-4">
          <label htmlFor="instructions" className="block mb-2 font-semibold">Instructions</label>
          <textarea
            id="instructions"
            name="instructions"
            value={recipe.instructions}
            onChange={handleInputChange}
            required
            className="w-full px-3 py-2 border rounded-md h-32 focus:outline-none focus:ring-2 focus:ring-[#16A34A]"
          />
        </div>

          {/* Save and Cancel Buttons */}
        <div className="flex gap-4">
          <button
            type="button"
            onClick={() => router.back()}
            className="w-1/2 px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-1/2 px-4 py-2 bg-[#16A34A] text-white rounded-md hover:bg-[#138a3e] focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditRecipe;