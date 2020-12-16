//Alert players that they are beginning the round // 
var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
};
fight ();

var playerName = window.prompt("what is your robot's name?"); // the period is called dot notation - window instructs browser to find window object, dot separates and executes the following funtion (promp in this instance) // 
var playerHealth = 100;
var playerAttack = 10;
 
// can log multiple values at once//
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

console.log(enemyName, enemyHealth, enemyAttack);

// subtract value of playerAttack from the value of enemyHealth and use result to update the value in enemyHealth variable.//

enemyHealth = enemyHealth - playerAttack; 

// Log a resulting message to the console so we know that it worked. //

console.log(
    playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaining. "
);
// determine enemy health 
if (enemyHealth <= 0) {
    window.alert(enemyName + "has died!");
}
else {
    window.alert(enemyName + " still has " + enemyHealth + " health left. ")
}
// Subtract the value of enemyAttack from the value of playerHealth and use result in playerHealth variable.// 

 playerHealth = playerHealth - enemyAttack;


// Log a resulting message to the console so we know that it worked. //

console.log(
    enemyName + " attacked " + playerName + " . " + playerName + "now has" + playerHealth + "health remaining."
    );
    if (playerHealth <=0) {
        window.alert(playerName + " has died!");
    }
    else { 
        window.alert(playerName + " still has " + playerHealth + " health left.");
    }
    





