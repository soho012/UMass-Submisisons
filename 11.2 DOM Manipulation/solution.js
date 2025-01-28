//task1
let task1 = document.getElementById("task1");
task1.innerText = "This is the changed and updated innertext for task1";

//task2
let task2 = document.getElementById("task2");
task2.innerHTML = '<button type = "button">Submit</button>';

//task3
document.body.style.backgroundColor = ('#232323');

//task4
let task4 = document.querySelectorAll('.item');
task4.forEach(item => {
    item.style.border = '2px solid yellow';
});

//task5
let task5 = document.getElementById("task5");
task5.setAttribute('href', 'https://www.springboard.com/');

//task6
let task6 = document.getElementById("task6");
task6.value = 'DOM Master';

//task7
let task7 = document.getElementById("task7");
task7.classList.add('new-class');

//task8
let task8 = document.getElementById("task8");
task8.innerHTML = '<button type = "button">Submit</button>';

//task9
let task9 = document.getElementById("task9");
task9.remove('task9');