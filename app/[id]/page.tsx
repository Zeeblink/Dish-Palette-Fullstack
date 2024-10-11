// import { FC } from "react"

// interface ingredient {
//     name: string,
//     amount: 2,
//     unit: "cups"
//   }

// interface Recipe {
//     id: number,
//     title: string,
//     image: string,
//     extendedIngredients: ingredient[],
//     instructions: string
// }

// const recipeInfo: FC<{params: {id: string}}> = async ({params}) => {
//     const res = await fetch(
//         `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.API_KEY1}`,
//         {next: {revalidate: 3600}}
//     );
//     if(!res.ok){
//         throw new Error('Failed to fetch recipe')
//     }
//     const recipe: Recipe = await res.json()


//     const renderInstructions = (instructions: string) => {
//         if (!instructions) return null;
      
//         const instructionSteps = instructions.split('<li>').map((step, index) => {
//           if (index === 0) {
//             // Handle plain text instructions
//             if (!step.includes('<ol>') && !step.includes('<ul>')) {
//               // Split the plain text instruction by newline characters
//               const lines = step.trim().split('\n');
      
//               return (
//                 <div key={index} className="mb-4">
//                   <ul className="list-disc list-inside">
//                     {lines.map((line, index) => (
//                       <li key={index} className="text-green-600 mb-2">
//                         {line.trim()}
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               );
//             }
//             return null; // Skip the first element (before the first <li> tag)
//           }
      
//           const trimmedStep = step.trim().replace('</li>', '');
      
//           if (trimmedStep.startsWith('<ol>')) {
//             // Step with ordered list
//             const [stepNumber, stepText] = trimmedStep.split('</ol><li>');
//             return (
//               <div key={index} className="mb-4">
//                 <h3 className="text-lg font-semibold text-green-700">{stepNumber}</h3>
//                 <p
//                   className="text-green-600"
//                   dangerouslySetInnerHTML={{ __html: stepText }}
//                 />
//               </div>
//             );
//           } else if (trimmedStep.includes('<ul>')) {
//             // Step with unordered list
//             const stepText = trimmedStep.replace('<ul>', '').replace('</ul>', '');
//             return (
//               <div key={index} className="mb-4">
//                 <ul className="list-disc list-inside">
//                   {stepText.split('<li>').map((bullet, index) => (
//                     <li
//                       key={index}
//                       className="text-green-600"
//                       dangerouslySetInnerHTML={{ __html: bullet.replace('</li>', '') }}
//                     />
//                   ))}
//                 </ul>
//               </div>
//             );
//           } else {
//             // Plain text step
//             return (
//               <div key={index} className="mb-4">
//                 <p
//                   className="text-green-600"
//                   dangerouslySetInnerHTML={{ __html: trimmedStep }}
//                 />
//               </div>
//             );
//           }
//         });
      
//         return <div className="mt-4">{instructionSteps}</div>;
//       };
    
//     return (
//         <div>{recipe ? (
//             <div className="container mx-auto py-8">
//               <div className="bg-green-50 rounded-lg shadow-md p-8">
//                 <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//                   <div className="md:col-span-1">
//                     <img
//                       src={recipe.image}
//                       alt={recipe.title}
//                       className="w-full rounded-lg"
//                     />
//                   </div>
//                   <div className="md:col-span-2">
//                     <h1 className="text-3xl font-bold text-green-800 mb-4">
//                       {recipe.title}
//                     </h1>
//                     <div className="mb-6">
//                       <h2 className="text-xl font-semibold text-green-700 mb-2">
//                         Ingredients
//                       </h2>
//                       <ul className="list-disc list-inside">
//                         {recipe.extendedIngredients.map((ingredient, index) => (
//                           <li key={index} className="text-green-600">
//                             {ingredient.name}
//                           </li>
//                         ))}
//                       </ul>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-green-700 mb-2">
//                         Instructions
//                       </h2>
//                       {renderInstructions(recipe.instructions)}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ) : (
//             <div className="flex justify-center items-center h-screen">
//               <p className="text-green-500 text-xl">RecipeInfo not found</p>
//             </div>
//           )}</div>
//     )
// }

// export default recipeInfo;