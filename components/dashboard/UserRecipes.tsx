'use client'

import React, { useEffect, useState } from 'react'
import { useAuth } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { MoreVertical, ThumbsUp, MessageCircle, Eye, Edit, Trash } from 'lucide-react'
import { Recipe } from '@/types'

const UserRecipes = () => {
  const router = useRouter()
  const [openMenuId, setOpenMenuId] = useState<number | null>(null)
  const [userRecipes, setUserRecipes] = useState<Recipe[]>([])
  const { userId } = useAuth()

  useEffect(() => {
    const fetchUserRecipes = async () => {
      const response = await fetch('/api/recipes', {
        method: 'GET'
      })
      const recipes: Recipe[] = await response.json()
      const userRecipes = recipes.filter(recipe => recipe.authorId === userId)
      setUserRecipes(userRecipes)
    }
    fetchUserRecipes()
  }, [userId])

  const toggleMenu = (recipeId: number) => {
    setOpenMenuId(openMenuId === recipeId ? null : recipeId)
  }

  const editRecipe = (recipeId: number) => {
    router.push(`/edit-recipe/${recipeId}`)
  }

  const deleteRecipe = async (recipeId: number) => {
    setOpenMenuId(null)
    try {
      const response = await fetch(`/api/recipes?id=${recipeId}`, {
        method: 'DELETE',
      })
      if(response.ok){
        setUserRecipes((prevRecipes) =>
          prevRecipes.filter((recipe) => recipe.id !== recipeId)
        )
        alert("Recipe deleted successfully")
      } else {
        throw new Error("Failed to delete recipe")
      }
    } catch (error) {
      console.error("Error deleting recipe:", error)
      alert("Failed to delete recipe")
    }
  }

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {userRecipes.map((recipe) => (
        <div key={recipe.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-300 hover:shadow-lg">
          <div className="relative h-48">
            <Image src={recipe.image} alt={recipe.title} className="w-full h-full object-cover"
            width={'500'} height={'300'} />
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold text-[#16A34A] mb-2 truncate">{recipe.title}</h3>
            <p className="text-sm text-gray-600 mb-4">Status: Published</p>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <span className="flex items-center">
                  <ThumbsUp className="w-4 h-4 mr-1" />
                  200
                </span>
                <span className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  30
                </span>
              </div>
              <div className="relative">
                <button
                  onClick={() => toggleMenu(recipe.id)}
                  className="text-gray-500 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#16A34A] focus:ring-opacity-50 rounded-full p-1"
                  aria-label="Recipe options"
                >
                  <MoreVertical className="w-5 h-5" />
                </button>
                {openMenuId === recipe.id && (
                  <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                    <div className="py-1">
                      <button
                        onClick={() => editRecipe(recipe.id)}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      >
                        <Edit className="w-4 h-4 mr-2" />
                        Edit
                      </button>
                      <button
                        onClick={() => deleteRecipe(recipe.id)}
                        className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                      >
                        <Trash className="w-4 h-4 mr-2" />
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Link
                href={`/recipes/${recipe.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-white bg-[#16A34A] rounded-md hover:bg-[#138a3f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#16A34A]"
              >
                <Eye className="w-4 h-4 mr-2" />
                View Recipe
              </Link>
            </div>
          </div>
        </div>
      ))}
    </section>
  )
}

export default UserRecipes