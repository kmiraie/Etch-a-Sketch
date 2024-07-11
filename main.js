let container = document.querySelector('.container')
let button = document.querySelector('.button');
let containerSize = 500;

function createGrid(size) {
    container.innerHTML = ''
    const gridPieceSize = (containerSize - (size -1)*2) / size;
    for(let i = 0; i<size*size; i++) {
        let gridPiece = document.createElement('section')
        gridPiece.style.width = `${gridPieceSize}px`
        gridPiece.style.height = `${gridPieceSize}px`
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
        let randomBackgroundColor = `rgba(${Math.floor(Math.random()*256)}, 
                                ${Math.floor(Math.random()*256)}, 
                                ${Math.floor(Math.random()*256)}, 
                                ${Math.random().toFixed(2)})`
        event.target.style.backgroundColor = randomBackgroundColor
    }
}

let isMouseDown = false;

container.addEventListener('dragstart', (event) => {
    event.preventDefault();
})

container.addEventListener('mousedown', (event) => {
    isMouseDown = true;
    if (event.target.classList.contains('grid-piece')) {
        mouseOverHandler(event);
        container.addEventListener('mouseover', mouseOverHandler);
    }
})

container.addEventListener('mouseup', () => {
    container.removeEventListener('mouseover', mouseOverHandler)
})
