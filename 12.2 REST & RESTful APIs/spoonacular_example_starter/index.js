const spoonacularAPIKEY = "8fca14d879a0457da9b5f39f8a0b65fd";

// axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`).then((response) => {
//     console.log(response.data);
// });

axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${spoonacularAPIKEY}&cuisine=italian&diet=vegetarian`).then((response)=> {
    console.log(response)
});