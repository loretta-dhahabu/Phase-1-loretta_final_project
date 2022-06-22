//add an eventListener when the page is loaded

document.addEventListener( "DOMContentLoaded", function ()
{
    fetchRecipes();
} )
let results = [];
function fetchRecipes ()
{
    fetch(
      "https://api.spoonacular.com/recipes/complexSearch?query=chicken&number=4&addRecipeInformation=true&includeIngredients=%22tomato,onion,cheese%22&type=main%20course&apiKey=f278ed7996b54d79b0c5497d4e1bc37a"
    )
        .then( (response) => response.json() )
        .then( ( data ) =>
        {
            for ( const recipeObject of data )
            {
                const nameOfRecipe = document.createElement( "li" );
                nameOfRecipe.innerText = recipeObject.results.title;
                nameOfRecipe.addEventListener( "click", () =>
                {
                    getRecipe( recipeObject )
                } );
                document.getElementById("recipeName").appendChild(recipeList);
              
        }
    })
}