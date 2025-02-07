let deckId = "";

fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    })
    .then (data => {
        deckId = data.deck_id;
    })
    .catch(error => {
        console.error(error);
    })
    
    document.getElementById("cardBtn").addEventListener("click", function () {
        if (!deckId) return;

        fetch(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`)
            .then (response =>{ 
                if (!response.ok) {
                throw new Error("Error");
            }
            return response.json();
            })
            .then (data => {
                if (data.remaining === 0) {
                    document.getElementById("message").textContent = "All cards have been drawn.";
                    return;
                }

                const card = data.cards[0];
                const cardContainer = document.getElementById("card-container");

                const img = document.createElement("img");
                img.src = card.image;
                cardContainer.appendChild(img);
            })
            .catch (error => {
                console.error(error);
            })
        })
    
