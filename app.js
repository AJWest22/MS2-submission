document.addEventListener('DOMContentLoaded', () => {
    const assassinsGrid = document.getElementsByClassName('assassin-fort')
    const templarsFort = document.getElementsByClassName('templar-fort')
    const displayFort = document.getElementsByClassName('fort-display')
    const armies = document.querySelectorAll('.army')
    const lookoutPost = document.getElementsByClassName('lookoutpost-container')
    const footSoldiers = document.getElementsByClassName('footsoldiers-container')
    const supplies = document.getElementsByClassName('supplies-container')
    const knights = document.getElementsByClassName('knights-container')
    const templars = document.getElementsByClassName('templars-container')
    const attackButton = document.getElementById('attack')
    const rotateButton = document.getElementById('rotate')
    const displayTurn = document.getElementById('whose-turn')
    const infoDisplay = document.getElementById('info')
    const assassinsSquares = []
    const templarSquares = []

    const width = 10

    //creates the Fort's squares
    function createFort(fort, squares) {
        for (let i = 0; i < width*width; i++) {
          const square = document.createElement('div')
          square.dataset.id = i
          fort.appendChild(square)
          squares.push(square)
        }
    }
    createFort(assassinsGrid, assassinsSquares)
    createFort(templarsFort, templarSquares)

    // army squads generate randomly
    const armyArray = [
        {
            name: 'lookoutpost',
            positions: [
                [0, 1],
                [0, width]
            ]
        },
        {
            name: 'footsoldiers',
            directions: [
                [0, 1, 2],
                [0, width, width*2]
            ]
        },
        {
            name: 'supplies',
            directions: [
                [0, 1, 2],
                [0, width, width*2]
            ]
        },
        {
            name: 'knights',
            directions: [
                [0, 1, 2, 3],
                [0, width, width*2, width*3]
            ]
        },
        {
            name: 'templars',
            directions: [
                [0, 1, 2, 3, 4],
                [0, width, width*2, width*3, width*4]
            ]
        },
    ]

    //Randomly places the templars army
})