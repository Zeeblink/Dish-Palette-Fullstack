"use client"
import React, { useState, useEffect } from 'react'
import { Recipe } from './CreateRecipe'
import Link from 'next/link'

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch('/api/recipes', {
                    method: 'GET',
                })
                if(!res.ok){
                    throw new Error('Failed to fetch data');
                }
                setRecipes(await res.json());
                console.log(recipes)
            } catch (error) {
                console.log(error)
            }
        }
        fetchRecipes();
    }, []);

    return (
        recipes ? <div className='mb-8 sm:grid sm:grid-cols-3 gap-3 px-4 sm:px-8'>
        //       {recipes.map((recipe) => (
            <div className="px-2 mb-8" key={recipe.id}>
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <img src={recipe.image} alt={recipe.title} className="w-full" />
                    <div className="p-4">
                        <h2 className="text-xl font-medium text-gray-900 mb-2">
                            {recipe.title}
                        </h2>
                    </div>
                    <div className="p-4 bg-gray-100">
                        <Link
                            href={`#`}
                            className="text-white font-medium px-3 py-2 bg-green-600 hover:bg-gray-300 rounded-lg"
                        >
                            View Recipe
                        </Link>
                    </div>
                </div>
            </div>
        ))}
        </div>
            : (
                <p>Loading recipes...</p>
            )
    )
}

export default RecipeList;


























// import React from 'react';
// import Link from 'next/link'; // Assuming you're using Next.js

// interface Recipe {
//   id: number;
//   title: string;
//   image: string;
// }

// interface RecipesType {
//   recipes: Recipe[];
// }


// const RecipesList: React.FC = async () => {
//   let query = "random";
//   let recipes: Recipe[] | undefined;

//   if (query === "random") {
//     try {
//       const res = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=${process.env.API_KEY2}&number=9`);
//       if (!res.ok) throw new Error('Failed to fetch data');
//       const data: RecipesType = await res.json();
//       recipes = data.recipes;
//     } catch (error) {
//       console.error(error);
//     }
//   } else {
//     // Handle other queries (if applicable)
//   }

//   return recipes ? (
//     <div className='mb-8 sm:grid sm:grid-cols-3 gap-3 px-4 sm:px-8'>
//       {recipes.map((recipe) => (
//         <div className="px-2 mb-8" key={recipe.id}>
//           <div className="bg-white rounded-lg shadow-lg overflow-hidden">
//             <img src={recipe.image} alt={recipe.title} className="w-full" />
//             <div className="p-4">
//               <h2 className="text-xl font-medium text-gray-900 mb-2">
//                 {recipe.title}
//               </h2>
//             </div>
//             <div className="p-4 bg-gray-100">
//               <Link
//                 href={`/${recipe.id}`}
//                 className="text-white font-medium px-3 py-2 bg-green-600 hover:bg-gray-300 rounded-lg"
//               >
//                 View Recipe
//               </Link>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   ) : (
//     <p>Loading recipes...</p>
//   );
// };

// export default RecipesList;