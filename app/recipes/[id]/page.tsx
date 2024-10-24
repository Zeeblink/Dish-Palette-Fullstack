"use client"
import { useRouter, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Recipe } from "../../types";
import Image from "next/image";

export default function RecipePage() {
  const router = useRouter();
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
    <main className="min-h-screen bg-custom-gray-100 py-12 px-6">
      <div className="container mx-auto">
        <div className="bg-custom-gray-100 p-6 rounded-lg shadow-md flex flex-col lg:flex-row">
          {/* Image Section */}
          <div className="lg:w-1/3 mb-6 lg:mb-0">
            <Image
              src="/tiramisu.jpg" // Replace with your actual image path
              alt="Tiramisu Recipe"
              width={600}
              height={400}
              className="rounded-lg"
              layout="responsive"
              objectFit="cover"
            />
          </div>

          {/* Recipe Details Section */}
          <div className="lg:w-2/3 lg:pl-8">
            <h1 className="text-3xl font-bold text-custom-green mb-4">
              Lick-Your-Plate Amazing Tiramisu
            </h1>

            {/* Ingredients */}
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-custom-green mb-2">Ingredients</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-1">
                <li>Chocolate</li>
                <li>Egg whites</li>
                <li>Egg yolks</li>
                <li>Pavisini ladyfingers</li>
              </ul>
            </div>

            {/* Instructions */}
            <div>
              <h2 className="text-2xl font-semibold text-custom-green mb-2">Instructions</h2>
              <p className="text-gray-700 leading-7 mb-2">
                Make your pot of coffee & let cool.
              </p>
              <p className="text-gray-700 leading-7 mb-2">
                Beat the egg yolks with the sugar in a bowl until light, pale & "ribbons." Then mix in the mascarpone.
              </p>
              <p className="text-gray-700 leading-7 mb-2">
                Stiffly whisk the egg whites in a different grease-free bowl. Gently fold in the egg whites in thirds to the mascarpone mix.
              </p>
              <p className="text-gray-700 leading-7 mb-2">
                Make a single layer of ladyfingers on the base of a deep serving dish making sure they fit tightly together on the bottom. Then brush the ladyfingers evenly with coffee.
              </p>
              <p className="text-gray-700 leading-7 mb-2">
                Make a nice even layer of the mascarpone cream/egg mixture and sprinkle/cover with grated chocolate.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}