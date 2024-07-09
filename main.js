let container = document.querySelector('.container')


for(let i = 0; i<16; i++) {
    for(let j = 0; j<16; j++) {
        let gridPiece = document.createElement('section')
        gridPiece.classList.add('grid-piece')
        container.appendChild(gridPiece)
    }
}







