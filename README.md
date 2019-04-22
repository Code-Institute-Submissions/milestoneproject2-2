# Simple Simon Game

This project had me making a game of Simon, a game in where the player has to watch a sequence that is made up of four colours lighting up and must then attempt to copy the sequence to move onto the next "level", with each "level" the sequence gets longer.
In some versions of the game the sequence gets faster as well as increasing the length of the sequence by one, in the version of the game that I have created the sequence just gets longer by one.
 
## UX
 
This website is for user who want to play a game of Simon, as such when making it I wanted to ensure that none of the colours were so bright it would hurt users eyes if they looked at the game for an extended period of time.

 - As a user I wanted to be able to be able to quickly have some sort of "help" pop-up so that anyone who was unsure of how to play could find out without needing to look to external resources.
 - As a user I should also be able to reset the game whenever I want to via the use of a "reset" button.

Below is a link to the wireframe that was used for this website
(https://gyazo.com/bd9ee24feeb9aba8a1118e70dbcc9a22)


## Features

The main feature of the website is the Simple Simon Game, this is using a random number generator to create the sequence that then gets played out, which the user must then copy.
All of the code for this can be found in game.js, spread across multiple functions.

## Technologies Used

- [JavaScript](https://www.javascript.com/)
    - JavaScript was used in the project to handle the random number generator as well as displaying the sequence and comparing the users input to the "game input".
- [BootStrap](https://www.bootstrapcdn.com/)
    - BootStrap was used to create rows for the game buttons and the "start","reset" and "help" buttons to sit in.

## Testing

1. Game:
    1. Test to run - gif/image of test - result
    2. Pressing start should start the game and display the first sequence of three random squares - [Test](https://gyazo.com/f475edc09d139133af818b57b7cb613a) - Passed


## Deployment

For this project I decided to use GitHub Pages to host my website, as it is one of the easiest to use.
To use I simply had to make sure all my files were on GitHub and then go to "settings" and scroll down until I saw the section marked "GitHub Pages" from there I could select a source and that would be the branch that would be loaded on the website.
For this project I only have one branch as there was no real need to have a dev and live branch.

To run this code locally simply download all the files and ensure they are all in one folder, from there just run index.html and a local version of the webpage will be loaded.


## Credits

### Media
- The sound files used came from [freecodecamp](https://www.freecodecamp.org/)

### Acknowledgements
- I recived inpsiration from various guides online on how to make random number generators for javascript.
