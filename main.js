let container = document.querySelector('.container')
let button = document.querySelector('.button');


function createGrid(size) {
    container.innerHTML = ''
    for(let i = 0; i<size*size; i++) {
        let gridPiece = document.createElement('section')
        gridPiece.classList.add('grid-piece')
        container.appendChild(gridPiece)
        
    }
}

let gridSize = 18;
createGrid(gridSize);

button.addEventListener('click', () => {
    let userInput
    do {
    userInput = prompt('What size grid would you like? (less than 100)')
    
    } while(userInput > 100) 

    createGrid(userInput);
})

function mouseOverHandler(event) {
    if(event.target.classList.contains('grid-piece')) {
        event.target.style.backgroundColor = 'blue'
    }
}

let isMouseDown = false;

container.addEventListener('dragstart', (event) => {
    event.preventDefault();
})

container.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    if (event.target.classList.contains('grid-piece')) {
        event.target.style.backgroundColor = 'blue';
        container.addEventListener('mouseover', mouseOverHandler);
    }
})

container.addEventListener('mouseup', () => {
    container.removeEventListener('mouseover', mouseOverHandler)
})
