function playCraps() {
    //playCrpas() is a function to simulate a Craps game 
    //Use for the Week 3 Assignment
    console.log("playCraps() started");

    //roll dice
    var die1 = 1 + Math.floor(7 * Math.random());
    console.log(die1);
    document.getElementById("die1Res").innerHTML = die1;

    var die2 = Math.ceil(6 * Math.random());
    console.log(die2);
    document.getElementById("die2Res").innerHTML = die2;


    //get the sum 
    var sum = die1 + die2;
    console.log(sum);
    document.getElementById("sumRes").innerHTML = sum;

    //if sum = 7 or 11 they lose
    if (sum == 7 || sum == 11) {
        document.getElementById("finRes").innerHTML = "You lose! Please try again!";
    } else if (die1 == die2 && die1 % 2 == 0) {
        document.getElementById("finRes").innerHTML = "You Win! Good job!";
    } else {
        document.getElementById("finRes").innerHTML = "You did not win or lose! Try you luck again!";

    }
}
 