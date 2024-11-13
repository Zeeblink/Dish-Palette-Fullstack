'use client'
import { useSearchParams } from 'next/navigation'
import { useState, useEffect } from 'react'
import { Recipe } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

export default function SearchPage() {
  const searchParams = useSearchParams()
  const searchQuery = searchParams.get('q')
  const [recipes, setRecipes] = useState<Recipe[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const res = await fetch('/api/recipes', {
          method: 'GET',
        })
        if (!res.ok) {
          throw new Error('Failed to fetch data')
        }
        const allRecipes = await res.json()
        
        // Filter recipes based on search query
        const filteredRecipes = allRecipes.filter((recipe: Recipe) =>
          recipe.title.toLowerCase().includes(searchQuery?.toLowerCase() || '')
        )
        
        setRecipes(filteredRecipes)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }

    if (searchQuery) {
      fetchRecipes()
    }
  }, [searchQuery])

  if (loading) {
    return <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
          </div>
  }

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-2xl font-bold mb-6">
          Search Results for: {searchQuery}
        </h1>
        
        {recipes.length === 0 ? (
          <p className="text-gray-600">No recipes found for &quot;{searchQuery}&quot;</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {recipes.map((recipe) => (
              <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <Image src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h2 className="text-xl font-semibold mb-2">{recipe.title}</h2>
                  <Link
                    href={`/recipes/${recipe.id}`}
                    className="inline-block bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700"
                  >
                    View Recipe
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

