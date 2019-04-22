# Simple Simon Game

This project had me making a game of Simon, a game in where the player has to watch a sequence that is made up of four colours lighting up and must then attempt to copy the sequence to move onto the next "level", with each "level" the sequence gets longer.
In some versions of the game the sequence gets faster as well as increasing the length of the sequence by one, in the version of the game that I have created the sequence just gets longer by one.
 
## UX
 
This website is for user who want to play a game of Simon, as such when making it I wanted to ensure that none of the colours were so bright it would hurt users eyes if they looked at the game for an extended period of time.
 - As a user I wanted to be able to be able to quickly have some sort of "help" pop-up so that anyone who was unsure of how to play could find out without needing to look to external resources.
 - The user should also be able to reset the game whenever they want to via the use of a "reset" button.

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

In this section, you need to convince the assessor that you have conducted enough testing to legitimately believe that the site works well. Essentially, in this part you will want to go over all of your user stories from the UX section and ensure that they all work as intended, with the project providing an easy and straightforward way for the users to achieve their goals.

Whenever it is feasible, prefer to automate your tests, and if you've done so, provide a brief explanation of your approach, link to the test file(s) and explain how to run them.

For any scenarios that have not been automated, test the user stories manually and provide as much detail as is relevant. A particularly useful form for describing your testing process is via scenarios, such as:

1. Contact form:
    1. Go to the "Contact Us" page
    2. Try to submit the empty form and verify that an error message about the required fields appears
    3. Try to submit the form with an invalid email address and verify that a relevant error message appears
    4. Try to submit the form with all inputs valid and verify that a success message appears.

In addition, you should mention in this section how your project looks and works on different browsers and screen sizes.

You should also mention in this section any interesting bugs or problems you discovered during your testing, even if you haven't addressed them yet.

If this section grows too long, you may want to split it off into a separate file and link to it from here.

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
