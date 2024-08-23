import Image from "next/image";
import Header from "./components/Header";
import Hero from "./components/Hero";
import RecipesList from "./components/RecipesList";

export default function Home() {
  let query = "random"
  return (
    <main>
      <Hero/>
      <RecipesList/>
    </main>
  );
}


{/* <div className="bg-gray-100">
      <Navigation />
      <main className="py-10">
        <Hero dispatch={dispatch} />
        {loading ? (
          <div className="flex justify-center items-center h-screen">
            <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-green-500"></div>
          </div>
        ) : <RecipeList recipes={recipes} />}
      </main>
      <Footer />
      {/* <button onClick={handleClick}>Get repicpes</button> */}
    // </div> */}