//add an eventListener when the page is loaded
document.addEventListener("DOMContentLoaded", function () {
  getSeaFood();
});
let users = [];

function getSeaFood() {
  fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
    .then((resp) => resp.json())
    .then((data) => {
      for (const foodObject of data) {
        const nameList = document.createElement("li");
        nameList.innerText = foodObject.strMeal;
        nameList.addEventListener("click", () => {
          renderFood(foodObject);
        });
        document.getElementById("food-list").appendChild(nameList);
        // customerComments(foodObject)
      }
    });
}
function renderFood(foodObject) {
  document.getElementById("food-name").innerHTML = foodObject.strMeal;
  document.getElementById("food-image").src = foodObject.strMealThumb;
  document.getElementById("food-ingredients").innerHTML =
    foodObject.Ingredients;
  document.getElementById("comments-list").innerHTML = foodObject.Comments;
  // customerComments(foodObject);
}

function ingredientsList(foodObject) {
  fetch("http://localhost:3000/meals")
    .then((resp) => resp.json())
    .then( ( data ) =>
    {
      for (const foodObject of data) {
            let foodIngr = document.getElementById("food-ingredients");
            let ingrList = document.createElement("li");
            ingrList.innerText = foodIngredient;
            foodIngr.appendChild(ingrList);
          }
      // for (const foodObject of data) {
      //   const itemList = document.createElement("li");
      //   itemList.innerText = foodObject.Ingredients;
      //   document.getElementById("food-ingredients").appendChild(itemList);
      // }
    });
}
document.getElementById("comment-form").onclick = () => {
  let userComments = document.getElementById("comment").value;
  let comm = document.getElementById("comments-list");
  let commList = document.createElement("li");
  commList.innerText = userComments;
  comm.appendChild(commList);
};





// document.addEventListener("DOMContentLoaded", function () {
//   fetchSeaFood();
// });
// function fetchSeaFood() {
//   fetch("http://localhost:3000/meals")
//     .then((response) => response.json())
//     .then((data) => {
//       for (const foodObject of data) {
//         // console.log(data.meals.strMeal);

//         let foodList = document.createElement("li");
//         foodList.innerText = foodObject.strMeal;
//         foodList.addEventListener("click", () => {
//           getSeaFood(foodObject.idMeal);
//         });
//         document.getElementById("food-list").appendChild(foodList);
//       }
//     });
// }

// function getSeaFood(idMeal) {
//   // alert(idMeal);
//   fetch("http://localhost:3000/meals")
//     .then((resp) => resp.json())
//     .then((foods) => {
//       for (foodObject of foods) {
//         let meal = foodObject.strMeal;
//         let mealId = foodObject.idMeal;
//         let foodIngredients = foodObject.Ingredients;

        // let img = foodObject.strMealThumb;

        // if (idMeal === mealId) {
        //   document.getElementById("food-name").innerHTML = meal;
        //   document.getElementById("food-image").src = img;
          // for (let i = 0; i < foodIngredients; i++) {
          //   console.log(foodIngredients[i]);
          // }
          // for (foodIngredient of foodIngredients) {
          //   let foodIngr = document.getElementById("food-ingredients");
          //   let ingrList = document.createElement("li");
          //   ingrList.innerText = foodIngredient;
          //   foodIngr.appendChild(ingrList);
          // }
          // document.getElementById("comment-form").onclick = () => {
          //   let userComments = document.getElementById("comment").value;
          //   let comm = document.getElementById("comments-list");
          //   let commList = document.createElement("li");
          //   commList.innerText = userComments;
          //   comm.appendChild(commList);
//           // };
//         }
//       }
//     });
// }


// function customerComments(foodObject) {
//   const commentsForm = document.getElementById("comment-form");
//   commentsForm.addEventListener("submit", (eventFn) => {
//     eventFn.preventDefault();
//     const newComment = commentsForm.comment.value;
//     const commentsArray = foodObject.Comments;
//     commentsArray.push(newComment);
//     addComment(foodObject);
//   });
// }

// function addComment(food) {
//   const fetchOptions = {
//     method: "POST",
//     headers: {
//       "content-type": "Application/json",
//       Accept: "*",
//     },
//     body: JSON.stringify(food),
//   };

//   fetch(`http://localhost:3000/food/${beer.idMeal}`, fetchOptions)
//     .then((response) => response.json())
//     .then((data) => console.log(data));
// }
