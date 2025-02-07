const request1 = fetch(`http://numbersapi.com/random/year?json`).then(response => response.json());
const request2 = fetch(`http://numbersapi.com/random/year?json`).then(response => response.json());
const request3 = fetch(`http://numbersapi.com/random/year?json`).then(response => response.json());
const request4 = fetch(`http://numbersapi.com/random/year?json`).then(response => response.json());
const request5 = fetch(`http://numbersapi.com/random/year?json`).then(response => response.json());

Promise.all([request1,request2,request3,request4, request5])
    .then(([data1, data2, data3, data4, data5]) => {
        console.log(data1.text , data2.text, data3.text, data4.text, data5.text);
    })
    .catch (error => {
        console.error(`Error:`, error);
    })
