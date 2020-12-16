//Alert players that they are beginning the round // 
var fight = function() {                                        
    window.alert("Welcome to Robot Gladiators!"); // alert notifies the user of text provided within parenthesis //
};
fight ();

var playerName = window.prompt("what is your robot's name?"); // the period is called dot notation - window instructs browser to find window object, dot separates and executes the following funtion (promp in this instance) // 


var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose."); // prompt tells the user to do something // 
if (promptFight === "fight" || promptFight === "FIGHT") { // || <-- this is the "OR operator" //
    //remove enemy health by subtracting the amount set in playerAttack//
    enemyHealth = enemyHealth - playerAttack; 
    console.log(
        playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
    );

var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;
 
// can log multiple values at once//
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

//determine enemy health //
if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ");
}
// Subtract the value of enemyAttack from the value of playerHealth and use result in playerHealth variable.// 

 playerHealth = playerHealth - enemyAttack;
 console.log(
     enemyName + " attacked " + playerName + " . " + playerName + " now has " + playerHealth + " health remaining."
    );
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else { 
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }

    // if player chose to skip //

} else if (promptFight === "skip" || promptFight === "SKIP") {
    //does player want to skip?//
    var confirmSkip = window.confirm("Are you sure you'd like to quit?");

    //if yes (true), leave the fight //
    if(confirmSkip) {
        window.alert(playerName + " has decided to skip this fight. GOODBYE");
    }
        // subtract dollas from playermoney for skipping // 
        playerMoney = playerMoney - 2;
}
// if no (false,) ask again by running fight() again //

else {
    fight ();
}

    





