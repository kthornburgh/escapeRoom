var readlineSync = require('readline-sync');

var playerName = readlineSync.question("May I have your name please? ");
var welcomeMessage = `Welcome ${playerName}, to the Escape Room Game Simulator!`;
console.log(welcomeMessage);

var isAlive = true;
var hasKey =  false;

while(isAlive == true){
    var menuOption = readlineSync.keyIn("Enter 1 to put hand in hole, or Enter 2 to find key, or Enter 3 to Open the door", {limit: '$<1-3>'});
    if (menuOption == 1){
        console.log(`Sorry, ${playerName}, you put your hand in the hole! You are DEAD. Game is over`);
        isAlive = false;
    }
    else if (menuOption == 2 && hasKey == false){
        console.log(`Great, ${playerName}, you just found the key! Now proceed to the next menu option.`);
        hasKey = true;
    }
    else if (menuOption == 2 && hasKey == true){
        console.log(`You have already found the key, ${playerName}, stop wasting your time, proceed to the next menu option`);
    }
    else if (menuOption == 3 && hasKey == false){
        console.log(`${playerName}, you have selected Option 3, however, you have NOT found the key yet. Please find the key first and then come back to this menu option!`);
    }
    else if (menuOption == 3 && hasKey == true){
        console.log(`${playerName}, you found the key, that key opened the door, and you have escaped the game room successfully! Congratulations!`);
        isAlive = false;
    
    }
}