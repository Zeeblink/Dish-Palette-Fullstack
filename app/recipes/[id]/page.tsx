"use client"
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Recipe } from "../../types";

export default function RecipePage() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    const fetchRecipe = async () => {
      const response = await fetch(`/api/recipes/${id}`);
      const recipe = await response.json();
      setRecipe(recipe);
    };
    fetchRecipe();
  }, [id]);

  return (
    <main className="min-h-screen pt-4">
            <div className="bg-green-50 rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                <div className="md:col-span-1">
                  <img
                    src={recipe?.image}
                    alt={recipe?.title}
                    className="w-full rounded-lg"
                  />
                </div>
                <div className="md:col-span-2">
                  <h1 className="text-3xl font-bold text-green-800 mb-4">
                    {recipe?.title}
                  </h1>
                  <div className="mb-6">
                    <h2 className="text-xl font-semibold text-green-700 mb-2">
                      Ingredients
                    </h2>
                    <ul className="list-disc list-inside">
                      {recipe?.ingredients.map((ingredient, index) => (
                        <li key={index} className="text-green-600">
                          {ingredient}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-green-700 mb-2">
                      Instructions
                    </h2>
                    {recipe?.instructions}
                  </div>
                </div>
              </div>
            </div>
    </main>
  );
}