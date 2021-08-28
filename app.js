document.addEventListener('DOMContentLoaded', () => {
    const assassinsGrid = document.querySelector('.grid-assassin')
    const templarsGrid = document.querySelector('.grid-templar')
    const gridDisplay = document.querySelector('.grid-display')
    const armies = document.querySelectorAll('.army')
    const lookoutPost = document.querySelector('.lookoutpost-container')
    const footSoldiers = document.querySelector('.footsoldiers-container')
    const supplies = document.querySelector('.supplies-container')
    const knights = document.querySelector('.knights-container')
    const templars = document.querySelector('.templars-container')
    const attackButton = document.querySelector('#attack')
    const rotateButton = document. querySelector('#rotate')
    const turnDisplay = document.querySelector('#whose-turn')
    const infoDisplay = document.querySelector('#info')
    const assassinsSquares = []
    const templarSquares = []
    let isHorizontal = true
    const width = 10

    //creates the Fort's squares
    function createBoard(grid, squares) {
        for (let i = 0; i < width*width; i++) {
          const square = document.createElement('div')
          square.dataset.id = i
          grid.appendChild(square)
          squares.push(square)
        }
    }
    createBoard(assassinsGrid, assassinsSquares)
    createBoard(templarsGrid, templarSquares)

    // army squads generate randomly
    const armyArray = [
        {
            name: 'lookoutpost',
            directions: [
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
    function generate(army) {
        let randomPosition = Math.floor(Math.random() * army.directions.length)
        let current = army.directions[randomPosition]
        if (randomPosition === 0) position = 1
        if (randomPosition === 1) position = 10
        let randomStart= Math.abs(Math.floor(Math.random() * templarSquares.length - (army.directions[0].length * position)))

        const isLost = current.some(index => templarSquares[randomStart + index].classList.contains('lost'))
        const isAtRightHandSide = current.some(index => (randomStart + index) % width === width -1)
        const isAtLeftHandSide = current.some(index => (randomStart + index) % width === 0)

        if (!isLost && !isAtRightHandSide && !isAtLeftHandSide) current.forEach(index => templarSquares[randomStart + index].classList.add('lost', army.name))

        else generate(army)
    }
    generate(armyArray[0])
    generate(armyArray[1])
    generate(armyArray[2])
    generate(armyArray[3])
    generate(armyArray[4])

    //makes the players (assassin's) armies rotate

    function rotate() {
        if (isHorizontal) {
            lookoutPost.classList.toggle('lookoutpost-vertical-container')
            footSoldiers.classList.toggle('footsoldiers-vertical-container')
            supplies.classList.toggle('supplies-vertical-container')
            knights.classList.toggle('knights-vertical-container')
            templars.classList.toggle('templars-vertical-container')
            isHorizontal = false
            console.log(isHorizontal)
            return
        }
        if (!isHorizontal) {
            lookoutPost.classList.toggle('lookoutpost-vertical-container')
            footSoldiers.classList.toggle('footsoldiers-vertical-container')
            supplies.classList.toggle('supplies-vertical-container')
            knights.classList.toggle('knights-vertical-container')
            templars.classList.toggle('templars-vertical-container')
            isHorizontal = true
            console.log(isHorizontal)
            return
        }
    }
    rotateButton.addEventListener('click', rotate)

    
})