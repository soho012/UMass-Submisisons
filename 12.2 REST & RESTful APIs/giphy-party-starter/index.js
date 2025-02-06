// look back at the <readme.md> file for some hints //
// working API key //
const giphyApiKey = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

async function getGifFromApi(query) {
    try {
        const response = await axios.get(`https://api.giphy.com/v1/gifs/search?q=${query}&api_key=${giphyApiKey}`);
        console.log(response); // Logs the response object
        if (response.data.data.length>0) {
            const randomIndex = Math.floor(Math.random() * response.data.data.length);
            return response.data.data[randomIndex].images.original.url;
        }
        else {
            return null;
        }
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

document.getElementById("searchForm").addEventListener("submit", async function (event) {
    event.preventDefault();

    const getInputData = document.getElementById("formInput").value;
    if (!getInputData) return;

    const gifUrl = await getGifFromApi(getInputData); 
    if (gifUrl) {
        displayGif(gifUrl);
    }
})

function displayGif(url) {
    const gifContainer = document.getElementById("gif-container");
    gifContainer.innerHTML = "";

    const img = document.createElement("img");
    img.src = url;

    gifContainer.append(img);
}

const clearBtn = document.getElementById("formClear");

clearBtn.addEventListener("click", function () {
    document.getElementById("formInput").value = "";
    document.getElementById("gif-container").innerHTML = "";
})

