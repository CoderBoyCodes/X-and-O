var name;
name = prompt("Whats your name?");
alert("Hello " + name + "!");
var gameData;
gameData = ["▢", "▢", "▢", "▢", "▢", "▢", "▢", "▢", "▢",]
var move;
var iGame = 5
while (iGame == 5) {
    move = prompt("What move would you start with? (input a position e.g. 5 is mid)");
    gameData[move - 1] = "❌"
    gameData[move] = "⭕"
    alert("| " + gameData[0] + gameData[1] + gameData[2] + " |\n| " + gameData[3] + gameData[4] + gameData[5] + " |\n| " + gameData[6] + gameData[7] + gameData[8] + " |");
    if (gameData[0] == "⨉" && gameData[1] == "⨉" && gameData[2] == "⨉" || gameData[3] == "⨉" && gameData[4] == "⨉" && gameData[5] == "⨉" || gameData[6] == "⨉" && gameData[7] == "⨉" && gameData[8] == "⨉" || gameData[0] == "⨉" && gameData[3] == "⨉" && gameData[6] == "⨉" || gameData[1] == "⨉" && gameData[4] == "⨉" && gameData[7] == "⨉" || gameData[2] == "⨉" && gameData[5] == "⨉" && gameData[8] == "⨉" || gameData[0] == "⨉" && gameData[4] == "⨉" && gameData[8] == "⨉" ||  gameData[2] == "⨉" && gameData[4] == "⨉" && gameData[6] == "⨉" ) {
        iGame = 0;
        alert("You win!");
