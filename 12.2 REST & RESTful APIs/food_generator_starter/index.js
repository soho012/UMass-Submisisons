// go to the spoonacular api, get random recipe //
// click a button ad display that recipe //
// the browser needs to display it //

const spoonacularAPIKEY = "8fca14d879a0457da9b5f39f8a0b65fd";

const button = document.getElementById("generate-button");
const displayDiv = document.getElementById("display-div");

button.addEventListener("click", function() {
    console.log("Button Clicked");
    getRandomRecipe();
})

async function getRandomRecipe() {
    let newDiv = document.createElement("div");
    let h3 = document.createElement("h3");

    try{
        const response = await axios.get(`https://api.spoonacular.com/recipes/random?apiKey=${spoonacularAPIKEY}`);
        console.log(response);
        displayDiv.innerHTML = "";

        h3.innerHTML = response.data.recipes[0].title;
        displayDiv.appendChild(h3);

        newDiv.innerHTML = response.data.recipes[0].summary;
        displayDiv.appendChild(newDiv); 
    }
    catch (error) {
        displayDiv.innerHTML = "";

        h3.innerHTML = "Error";
        h3.classList.add("error-response");
        displayDiv.appendChild(h3);

        newDiv.innerHTML = error.response.data.message;
        newDiv.classList.add("error-response");
        displayDiv.appendChild(newDiv);
    }
}

