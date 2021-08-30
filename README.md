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

The JavaScript game logic was the hardest to make. As two forts are needed with grids on them. Each grid is 10 x 10, so has 100 squares in them. To create these squares a for loop was used to create the grid's individual squares, by passing in the parameters 'grid and squares' the code when run creates squares inside the width of the grid (i < width* width keeps it within the specified area{hence the width * width with the variable width set to 10 to make it equal 100}) 

The armies are stored as objects in an array, this makes them easily acccessible, when getting them to generate randomly in the Templar's fort. The use of Math.abs, Math. random, and Math.floor ensures that the armies are placed in the grid on a square, and not half way across one or only 3/4 of the way across. The variable templarSquares is used to keep the army generating randomy inside the Templar's fort and ensures it doesn't go outside, alongside the .length Javascript, the position variable (which sets the size of the grid for the templarArmies to generate in) and the directions variable which dictates the size each army will be.
