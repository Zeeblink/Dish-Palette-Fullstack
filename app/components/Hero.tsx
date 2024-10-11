import React from 'react'

const Hero = () => {
  return (
    <>
      {/* <!-- Hero section --> */}
      <div className="bg-gray-100 flex-col w-full pt-24 sm:pt-24 px-4 h-[70vh] items-center">
        <h1 className="text-center text-4xl sm:text-5xl mb-14 text-gray-800 leading-1.5 roboto-regular">
          Find the Perfect Recipe for your next meal
        </h1>
        <form
          className="flex items-center justify-center pb-10"
        >
          <input
            className="bg-white focus:outline-none focus:shadow-outline border focus:bg-white border-gray-300 
                rounded-lg py-2 px-4 block w-1/2 appearance-none leading-normal focus:border-green-600"
            type="text"
            placeholder="Search for recipes"
          />
          <button
            id="search"
            className="bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-lg ml-4"
          >
            Search
          </button>
        </form>
      </div>
      <h1 className="text-center text-3xl font-bold origin-center text-gray-800 mb-16">
        Popular Recipes
      </h1>
    </>
  )
}

export default Hero