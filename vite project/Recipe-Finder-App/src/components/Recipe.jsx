import React,{useEffect,useState} from 'react'
import Recipes from './RecipeFinder';

const Recipe = () => {
    const APP_ID = '6b66e634';
  const APP_KEY = '600a1b27153cc1b0a03687e6416be655';
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");


  useEffect(() => {
    getRecipes();
  }, [query])


  const updateSearch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }

  const getRecipes = async () => {
    const response = await fetch
          (`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  };
  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-md-12'>
        <form className="search-form" onSubmit={getSearch}  >
        <input className="search-bar" type="text" value={search}
             onChange={updateSearch} />
        <button className="search-button" type="submit" >
             Search
        </button>
      </form>   
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12'>
        <div className="recipes">
          {recipes.map(recipe => (
            <Recipes
              key={recipe.recipe.label}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />

          ))}
      </div>
        </div>
      </div>
    </div>
       
    </>
  )
}

export default Recipe