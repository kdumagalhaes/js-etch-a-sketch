window.addEventListener('load', () => {
    let square;

    //creating elements
    const container = document.getElementById('container')

    //putting squares inside the container
    for (let i = 0; i < 16*16; i++) {
        square = document.createElement('div')
        container.appendChild(square).classList.add('square')

    }

    //painting squares
    function paintingSquares() {
        const squares = document.querySelectorAll('.square')
        squares.forEach(square => {
            square.addEventListener('mouseover', () => {
                square.classList = 'paint'
            })
        })
    }

    paintingSquares()
})