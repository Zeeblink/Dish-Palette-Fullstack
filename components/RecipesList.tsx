"use client"
import React, { useState, useEffect } from 'react'
import { Recipe } from '@/types'
import Link from 'next/link'
import Image from 'next/image'

const SkeletonCard = () => (
  <div className="px-2 mb-8">
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="w-full h-48 bg-gray-200 animate-pulse" /> {/* Image skeleton */}
      <div className="p-4">
        <div className="h-6 bg-gray-200 rounded animate-pulse mb-2" /> {/* Title skeleton */}
      </div>
      <div className="p-4 bg-gray-100">
        <div className="w-24 h-9 bg-gray-200 rounded-lg animate-pulse" /> {/* Button skeleton */}
      </div>
    </div>
  </div>
);

const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const res = await fetch('/api/recipes', {
                    method: 'GET',
                })
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await res.json();
                setRecipes(data);
                setLoading(false);
            } catch (error) {
                console.log(error);
                setLoading(false);
            }
        }
        fetchRecipes();
    }, []);

    if (loading) {
        return (
            <div className='mb-8 sm:grid sm:grid-cols-3 gap-3 px-4 sm:px-8'>
                {[...Array(9)].map((_, index) => (
                    <SkeletonCard key={index} />
                ))}
            </div>
        );
    }

    return (
        recipes ? <div className='mb-8 sm:grid sm:grid-cols-3 gap-3 px-4 sm:px-8'>
            {recipes.map((recipe) => (
                <div className="px-2 mb-8" key={recipe.id}>
                    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                        <Image src={recipe.image} alt={recipe.title} className="w-full"
                        width={'500'} height={'300'}/>
                        <div className="p-4">
                            <h2 className="text-xl font-medium text-gray-900 mb-2">
                                {recipe.title}
                            </h2>
                        </div>
                        <div className="p-4 bg-gray-100">
                            <Link
                                href={`/recipes/${recipe.id}`}
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
