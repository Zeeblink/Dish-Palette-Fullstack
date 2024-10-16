const API_KEY = "2ecf0a5ce6b7456e97ff317224c58869"

const fecthRecipe = async () => {
    const res = await fetch(`https://api.spoonacular.com/recipes/${300}/information?apiKey=${API_KEY}`)
    
    const recipe = await res.json()
    console.log(recipe)
}
fecthRecipe()