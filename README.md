# MS2-submission

User perspective:

  1: The user wants to play a decent and fun game
  2: The user wants to see a aesetically appealling site with good gameplay
  3: The user wants a game that is easy to understand and play
  
Site owner's perspective:
  
  1: The site owner wants a game that makes users come and play again
  2: The site owner wants to make a game that is easy to play and understand
  3: The site owner wants the game to have good graphics ad visualls, so it is aesetically pleasing
  
  
WHY THE GAME WAS MADE:
 
The game is inspired by the popular video game series Assassin's Creed, and Battleships. Assassin's Creed is about the age old war between the Assassin's and their enemies the Templars. In the video game Assassin's Creed Rogue, the player can capture forts, and loot treasure/supplies from them. This provided inspiraton for the idea of capturing forts in a Battleships inspired format: You take a shot at hitting the computer's (templar's) fort and then the computer has a go at hitting your (assassin's) fort. (Unlike in the game where to capture the fort the player must sneak in and not be spotted while fullfilling quests)
 
JAVASCRIPT GAME LOGIC:

The JavaScript game logic was the hardest to make. As two forts are needed with grids on them. Each grid is 10 x 10, so has 100 squares in them. To create these squares a for loop was used to create the grid's individual squares, by passing in the parameters 'grid and squares' the code when run creates squares inside the width of the grid (i < width* width keeps it within the specified area{hence the width * width with the variable width set to 10 to make it equal 100}) To create each individual sqaure, 'createElement ('div) is used with each div being an individual square. The const square is equal to every square in the grids, and has an id of i, each time it loops and creates a sqaure, the sqaure has a number of 1 - 100, which comes from the i < width * width. The use of appendChild puts the sqaure into the assassinsGrid and templarsGrid where it can then be assigned a number 1 - 100. Push is used to push a sqaure into the sqaure variable.

The armies are stored as objects in an array, this makes them easily acccessible, when getting them to generate randomly in the Templar's fort. 

The randomPosition variable is set to Math.floor and Math.random to get a random number, that is then multiplied by the armies directions (from the armiesArray) and the .length to get the length of the array. The use of Math.abs, Math.random, and Math.floor ensures that the armies are placed in the grid on a square, and not half way across one or only 3/4 of the way across. The variable templarSquares is used to keep the army generating randomly inside the Templar's fort and ensures it doesn't go outside, alongside the .length Javascript, the position variable (which sets the size of the grid for the templarArmies to generate in) and the directions variable which dictates the size each army will be.

Let current is used to assign a random army, by taking the army and its directions from the armiesArray and its randomPosition to generate it in its random position.

The Math.random is used in the randomStart variable again, to assign a random square in the computers grid. To ensure the ships dont to go to close to the edge of the board, subtracting the army directions and length keeps them more in the center. 

Index is used to go through the armyArray, and get the names and directions of the armies.

To make sure an army isnt placed again in a sqaure thats already got an army in it, the variable isLost is used alongside the templarSqaures variable, if it contains an army, the class 'lost' is assigned and an army wont be placed there.

The variables isAtRightHandSide and isAtLeftHandSide stop an army generating too far to right or left and side and then wrapping around to appear on the opposite side. So if a army like knights that is 4 divs long, generates too close to left hand side, for example 2 sqaures away from the left hand side, the remaining 2 divs won't appear on the right hand side of the grid. The remainder modulus width takes the current army (the one that is generating randomly at that point) and divides it by the width, if its remainder is equal to 9, then the army will generate further away from the edge of the grid. 

The if statement on line 86, is used to check if the condions are true, so if its not at the right or left hand edge, and it doesnt have the class of 'lost', it can generate an army from the army array there, as the squares are free, if it does, then the class of 'lost' can then be added, and the next army can be generated.

The rotate function is used to rotate the player's ships around. The classList.toggle feature is used to toggle between the different class names, if its horizontal or not. It has to be in twice to ensure the armies rotate verticlly and back horizontally.

The players armies are draggable and placeable on the board. This is done using the dragStart function. The armies const collects all the armies together, combined with the event listener to make the armies ready and prepped for dragging. By taking the army class from the generate army function and the square class from the createBoard function, the armies are able to be selected and placed onto the individual squares. Each army has an eventlistener tied to the 'mousedown' functionality so that when the army is clicked on, it activates and can be ready to be dragged to the grid. Most functions use the preventdefault function to tell the computer not to run that function. However the dragDrop function is used to let the cmputer know where the player has dragged and dropped their armies, and ensure it can't be placed outside the grid. 

The variable armyNameWithLastId 

The remove child function at the bottom ensures the army that has been dragged is removed fromthe grid display area and has been placed on the board.
