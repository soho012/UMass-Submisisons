axios.get("https://catfact.ninja/fact").then((response) => {
    console.log(response.data);
});

axios.get("https://api.coindesk.com/v1/bpi/currentprice.json").then((response) => {
    console.log(response.data.bpi.EUR);
})