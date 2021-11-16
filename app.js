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
    let isGameOver = false
    let currentPlayer = 'assassin'
    

    //creates the Fort's squares code from Ania Kubow battleships game
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

    // army squads generate randomly code from Ania Kubow battleships game
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

    //Randomly places the templars army code from Ania Kubow battleships game
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

    //makes the players (assassin's) armies rotate code from Ania Kubow battleships game

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

    //makes the players (assassin's) armies draggable code from Ania Kubow battleships game

    armies.forEach(army => army.addEventListener('dragstart', dragStart))
    assassinsSquares.forEach(square => square.addEventListener('dragstart', dragStart))
    assassinsSquares.forEach(square => square.addEventListener('dragover', dragOver))
    assassinsSquares.forEach(square => square.addEventListener('dragenter', dragEnter))
    assassinsSquares.forEach(square => square.addEventListener('dragleave', dragLeave))
    assassinsSquares.forEach(square => square.addEventListener('drop', dragDrop))
    assassinsSquares.forEach(square => square.addEventListener('dragend', dragEnd))

    let selectedArmyNameWithIndex
    let draggedArmy
    let draggedArmyLength
  
    armies.forEach(army => army.addEventListener('mousedown', (e) => {
      selectedArmyNameWithIndex = e.target.id
      console.log(selectedArmyNameWithIndex)
    }))
  
    function dragStart() {
      draggedArmy = this
      draggedArmyLength = this.childNodes.length
      console.log(draggedArmy)
    }
  
    function dragOver(e) {
      e.preventDefault()
    }
  
    function dragEnter(e) {
      e.preventDefault()
    }
  
    function dragLeave() {
      console.log('drag leave')
    }
  
    function dragDrop() {
      let armyNameWithLastId = draggedArmy.lastChild.id
      let armyClass = armyNameWithLastId.slice(0, -2)
      console.log(armyClass)
      let lastArmyIndex = parseInt(armyNameWithLastId.substr(-1))
      let armyLastId = lastArmyIndex + parseInt(this.dataset.id)
      console.log(armyLastId)
      const notAllowedHorizontal = [0,10,20,30,40,50,60,70,80,90,1,11,21,31,41,51,61,71,81,91,2,22,32,42,52,62,72,82,92,3,13,23,33,43,53,63,73,83,93]
      const notAllowedVertical = [99,98,97,96,95,94,93,92,91,90,89,88,87,86,85,84,83,82,81,80,79,78,77,76,75,74,73,72,71,70,69,68,67,66,65,64,63,62,61,60]
      
      let newNotAllowedHorizontal = notAllowedHorizontal.splice(0, 10 * lastArmyIndex)
      let newNotAllowedVertical = notAllowedVertical.splice(0, 10 * lastArmyIndex)
  
      selectedArmyIndex = parseInt(selectedArmyNameWithIndex.substr(-1))
  
      armyLastId = armyLastId - selectedArmyIndex
      console.log(armyLastId)
  
      if (isHorizontal && !newNotAllowedHorizontal.includes(armyLastId)) {
        for (let i=0; i < draggedArmyLength; i++) {
          assassinsSquares[parseInt(this.dataset.id) - selectedArmyIndex + i].classList.add('lost', armyClass)
        }

      } else if (!isHorizontal && !newNotAllowedVertical.includes(armyLastId)) {
            for (let i=0; i < draggedArmyLength; i++) {
            assassinsSquares[parseInt(this.dataset.id) - selectedArmyIndex + width*i].classList.add('lost', armyClass)
        }
      } else return
  
      gridDisplay.removeChild(draggedArmy)
    }

    function dragEnd() {
        console.log('dragend')
    }

    //The gameplay logic code from Ania Kubow battleships game

    function gamePlay() {
        if (isGameOver) return
        if (currentPlayer === 'assassin') {
            turnDisplay.innerHTML = 'Assassins Go'
            templarSquares.forEach(square => square.addEventListener('click', function(e) {
                revealGrid(square)
            }))
        }
        if (currentPlayer === 'templar') {
            turnDisplay.innerHTML = 'Templars Go'
            setTimeout (templarGo, 1000)
        }
    }

    attackButton.addEventListener('click', gamePlay)

    //reveals whether a hit has been successful or not code from Ania Kubow battleships game
    let lookoutpostCount = 0
    let footsoldiersCount = 0
    let suppliesCount = 0
    let knightsCount = 0
    let templarsCount = 0

    function revealGrid(square) {
        if (!square.classList.contains('boom')) {
        if (square.classList.contains('lookoutpost')) lookoutpostCount++
        if (square.classList.contains('footsoldiers')) footsoldiersCount++
        if (square.classList.contains('supplies')) suppliesCount++
        if (square.classList.contains('knights')) knightsCount++
        if (square.classList.contains('templars')) templarsCount++
        }
        if (square.classList.contains('lost')) {
            square.classList.add('hit')
        } else {
            square.classList.add('missed')
        }
        checkWins()
        currentPlayer = 'templar'
        gamePlay()
    }

    //Gameplay logic for the templar's (computer's) turn code from Ania Kubow battleships game
    let templarLookoutpostCount = 0
    let templarFootsoldiersCount = 0
    let templarSuppliesCount = 0
    let templarKnightsCount = 0
    let templarTemplarsCount = 0

    function templarGo() {
        let random = Math.floor(Math.random() * assassinsSquares.length)
        if (!assassinsSquares[random].classList.contains('hit')) {
            const hit = assassinsSquares[random].classList.contains('lost')
            assassinsSquares[random].classList.add(hit ? 'hit' : 'missed')
            if (assassinsSquares[random].classList.contains('lookoutpost')) templarLookoutpostCount++
            if (assassinsSquares[random].classList.contains('footsoldiers')) templarFootsoldiersCount++
            if (assassinsSquares[random].classList.contains('supplies')) templarSuppliesCount++
            if (assassinsSquares[random].classList.contains('knights')) templarKnightsCount++
            if (assassinsSquares[random].classList.contains('templars')) templarTemplarsCount++
            checkWins()
        } else templarGo()
            currentPlayer = 'assassin'
            turnDisplay.innerHTML = 'Assassin Go'
    }

    //checks for the winner code from Ania Kubow battleships game
    function checkWins() {
        if (lookoutpostCount === 2) {
            infoDisplay.innerHTML = 'You destroyed the Templars lookoutpost!'
            lookoutpostCount = 10
        }
        if (footsoldiersCount === 3) {
            infoDisplay.innerHTML = 'You destroyed the Templars footsoldiers!'
            footsoldiersCount = 20
        }
        if (suppliesCount === 3) {
            infoDisplay.innerHTML = 'You destroyed the Templars supplies!'
            suppliesCount = 30
        }
        if (knightsCount === 4) {
            infoDisplay.innerHTML = 'You destroyed the Templars knights!'
            knightsCount = 40
        }
        if (templarsCount === 5) {
            infoDisplay.innerHTML = 'You destroyed the Templars templars!'
            templarsCount = 50
        }
        if (templarLookoutpostCount === 2) {
            infoDisplay.innerHTML = 'You destroyed the Templars lookoutpost!'
            templarLookoutpostCount = 10
        }
        if (templarFootsoldiersCount === 3) {
            infoDisplay.innerHTML = 'You destroyed the Templars footsoldiers!'
            templarFootsoldiersCount = 20
        }
        if (templarSuppliesCount === 3) {
            infoDisplay.innerHTML = 'You destroyed the Templars supplies!'
            templarSuppliesCount = 30
        }
        if (templarKnightsCount === 4) {
            infoDisplay.innerHTML = 'You destroyed the Templars knights!'
            templarKnightsCount = 40
        }
        if (templarTemplarsCount === 5) {
            infoDisplay.innerHTML = 'You destroyed the Templars knights!'
            templarTemplarsCount = 50
        }
        if ((lookoutpostCount + footsoldiersCount + suppliesCount + knightsCount + templarsCount) === 150) {
            infoDisplay.innerHTML = "Assassin Wins!"
            gameOver()
        }
        if ((templarLookoutpostCount + templarFootsoldiersCount + templarSuppliesCount + templarKnightsCount + templarTemplarsCount) === 150) {
            infoDisplay.innerHTML = "Templar Wins!"
            gameOver()
        }
    }

    //ends the game code from Ania Kubow battleships game
    function gameOver() {
        isGameOver = true
        attackButton.removeEventListener('click', gamePlay)
    }
})