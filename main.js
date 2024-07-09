let container = document.querySelector('.container')
let button = document.querySelector('.button');


for(let i = 0; i<16; i++) {
    for(let j = 0; j<16; j++) {
        let gridPiece = document.createElement('section')
        gridPiece.classList.add('grid-piece')
        container.appendChild(gridPiece)

        gridPiece.addEventListener('mouseover', () => {
            gridPiece.style.backgroundColor = 'blue';
        })
    }
}



button.addEventListener('click', () => {
    let userInput
    do {
    userInput = prompt('What size grid would you like? (less than 100)')
    
    } while(userInput > 100) 
        container.innerHTML = ''
    for(let i = 0; i<userInput; i++) {
        for(let j = 0; j<userInput; j++) {
            let gridPiece = document.createElement('section')
            gridPiece.classList.add('grid-piece')
            container.appendChild(gridPiece)
    
            colorChange(gridPiece)
        
        }
    }
})

function colorChange(variable) {
    variable.addEventListener('mouseover', () => {
        variable.style.backgroundColor = 'blue';
    })
}
