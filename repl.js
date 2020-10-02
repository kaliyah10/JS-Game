let readlineSync = require("readline-sync");

console.log( "Welcome to Virtual Fashion!");
console.log( "This game will help improve your fashion sense" );

var userName = readlineSync.question("May I have your name? ");
console.log("Lets get started"+"" + userName +"!");

var userInfo = readlineSync.question("What's your fashion sense:");
console.log("Okay"+ "" + userName + "we will give some tips on how to pair"+userInfo + "!");

let pick = readlineSync.question( "Clothing Top Options: crop top, blouse, graphic tee:" );
switch(pick) {
  case "crop top":
    console.log( "Ouuu a nice beach day or sunny day!" );
    break;
  case "blouse":
    console.log( "Classy! For a nice date night or buisness casual meeting." );
    break;
  case "graphic tee":
    console.log( "Great for a party or a day out !" );
    break;
  default: 
    console.log( "Choose a option fashonista!" );
    console.log( "Pick one!");
} 

let option = readlineSync.question( "Bottoms Options: pencil skirt, bell bottoms, skinny jeans" );
switch(option) {
  case "pencil skirt":
    console.log( "Always go well for a meeting and show curves!" );
    break;
  case "bell bottoms":
    console.log( "Too old school? Never for a dinner or a regular day." );
    break;
  case "skinny jeans":
    console.log( "Makes anyone looks good !");
    break;
  default: 
    console.log( "Choose a option fashion diva!" );
    console.log( "Choose one!");
} 