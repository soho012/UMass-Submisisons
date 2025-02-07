fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    })
    .then(data => {
        return fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`);
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("Error");
        }
        return response.json();
    })
    .then(data => {
        const card = data.cards[0];
        console.log(`${card.value} of ${card.suit}`);
    })

    .catch(error => {
        console.error(error);
    });

    fetch(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1`)
        .then (response => {
            if (!response.ok) {
                throw new Error ("Error");
            }
            return response.json();
        })
        .then(data => {
            return fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then(data => {
            const newFirstCard = data.cards[0];
            console.log(`First Card: ${newFirstCard.value} of ${newFirstCard.suit}`);

            return fetch(`https://deckofcardsapi.com/api/deck/${data.deck_id}/draw/?count=1`); 
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json();
        })
        .then (data => {
            const secondCard = data.cards[0];
            console.log(`Second Card: ${secondCard.value} of ${secondCard.suit}`)
        })
        .catch(error => {
            console.error(error);
        });