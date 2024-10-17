import Hero from "./components/Hero";
import RecipeList from "./components/RecipesList";
import CategoryButton from "./components/Category";

export default function Home() {
  let query = "random"
  return (
    <main className="bg-gray-100">
      <Hero/>
      <RecipeList/>
      {/* Categories */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">Explore Categories</h2>
          <div className="flex justify-center gap-4">
            <CategoryButton name="Desserts" />
            <CategoryButton name="Main Courses" />
            <CategoryButton name="Appetizers" />
            <CategoryButton name="Drinks" />
          </div>
        </div>
      </section>
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