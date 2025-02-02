document.addEventListener('DOMContentLoaded', function() {

const boxContainer = document.querySelector('#box-container');
const newBoxBtn = document.querySelector('#new-box-button');
const colorForm = document.querySelector('#color-form');
const colorInput = document.querySelector('#color-input');

let boxColor = "black";

let boxCounter = 1;
function createBox() {
    const box = document.createElement('div');
    box.classList.add('box');
    box.style.background = boxColor;
    boxContainer.appendChild(box);
    box.addEventListener('dblclick', function (){
        box.remove();
    });
    const id = box.textContent = `Box ID: ${boxCounter}`;
    boxCounter++;
    box.addEventListener('mouseover', function(event) {
        const x = event.pageX;
        const y = event.pageY;
        box.textContent = `${x}, ${y}`;
    });  
    box.addEventListener('mouseout', function(){
        box.textContent = id;
    });
}

newBoxBtn.addEventListener('click', function() {
    createBox();
});

colorForm.addEventListener('submit', function (event){
    
    event.preventDefault();

    boxColor = colorInput.value;

    document.querySelectorAll('.box').forEach(box => {
        box.style.backgroundColor = boxColor;
    });

    document.addEventListener('keypress',function (event){
        if (event.key.toLowerCase() === 'n') {
            createBox();
        }
    });
});
});


// The user should be able to set a color for boxes (this affects both current boxes and new boxes).
// The user should be able to add boxes with the set color to the div with the ID `box-container`:
// When the button with the ID `new-box-button` is clicked.
// When the `N` key is pressed.
// The user should be able to remove a box when the box is double-clicked on.
// Each box should display its ID.

// CONTINUE HERE (01/28)
// Each box should display its page coordinates when hovered (when the mouse leaves, it displays its ID back).
// Each box should have a class `box` for styling and selecting.
