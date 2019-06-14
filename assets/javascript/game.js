// * The random number shown at the start of the game should be between 19 - 120.
// * Each crystal should have a random hidden value between 1 - 12.

let gameScore = 0;
let gameScoreCurrent = [];
let gamestart = true;
let gameScorerunning = 0;
let winsCount = 0;
let LosesCount = 0;

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    //The maximum is inclusive and the minimum is inclusive 
}

function gameStart() {

    gameScore = 0;
    gameScoreCurrent = [];
    gamestart = true;
    gameScorerunning = 0;

    gameScore = getRandomIntInclusive(19, 120);
    console.log(gameScore);
    // This while loop to make sure no duplicate score values assgined to the crystals
    while (gameScoreCurrent.length < 4) {
        let randomValue = getRandomIntInclusive(1, 12);
        console.log(randomValue);
        if (!gameScoreCurrent.includes(randomValue))
            gameScoreCurrent.push(randomValue);
    }

    $("#button-Image1").attr("data-button-value", gameScoreCurrent[0]);
    $("#button-Image2").attr("data-button-value", gameScoreCurrent[1]);
    $("#button-Image3").attr("data-button-value", gameScoreCurrent[2]);
    $("#button-Image4").attr("data-button-value", gameScoreCurrent[3]);
    $("#scoreGameid").text(gameScore);
    $("#Wins").text(winsCount);
    $("#Loses").text(LosesCount);
    $("#yourscoreGameid").text(gameScorerunning);

}

gameStart();
$(document).ready(function () {


    $(".button").on('click', function () {
        console.log($(this).attr("data-button-value"));
        gameScorerunning = gameScorerunning + parseInt($(this).attr("data-button-value"));
        console.log("Game Score running total:" + gameScorerunning);
        $("#yourscoreGameid").text(gameScorerunning);

        if (gameScorerunning == gameScore) {
            winsCount++;
            $("#Wins").text(winsCount);
            $("#textArea").text("You Won!");
            gameStart();
        }
        else if (gameScorerunning > gameScore) {
            LosesCount++
            $("#Loses").text(LosesCount);
            $("#textArea").text("You Lost!");
            gameStart();
        }

    });

});

