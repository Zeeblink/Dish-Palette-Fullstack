import { Recipe } from "../../types";

export default async function RecipePage({ params }: { params: { id: string } }) {
  const { id } = params;

  try {
    // In development, we need absolute URL, in production we can use relative
    const url = process.env.NODE_ENV === 'development' 
      ? `http://localhost:3000/api/recipes/${id}`
      : `/api/recipes/${id}`;

    const response = await fetch(url, {
      headers: {
        'Content-Type': 'application/json'
      },
      cache: 'no-store'
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch recipe: ${response.statusText}`);
    }

    const recipe: Recipe = await response.json();

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

  } catch (error) {
    // Error UI
    return (
      <main className="min-h-screen pt-4">
        <div className="bg-red-50 rounded-lg shadow-md p-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-red-800 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-red-600 mb-4">
              {error instanceof Error ? error.message : 'Failed to load recipe'}
            </p>
            <a 
              href="/" 
              className="inline-block bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
            >
              Back to Recipes
            </a>
          </div>
        </div>
      </main>
    );
  }
}
