$(document).ready(function () {

    // global variables needed for game 
    var btn1;
    var btn2;
    var btn3;
    var btn4;
    var playerTotal = 0;
    var wins = 1;
    var losses = 1;

    // only random number generator needed for game 
    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    // function call for main number generation and JQuery to send to proper div
    var newRndInt = getRndInteger(19, 120)
    $("#rndInt").html(newRndInt);

    // random number function call for 4 crystal buttons
    var btn1 = getRndInteger(1, 12);
    var btn2 = getRndInteger(1, 12);
    var btn3 = getRndInteger(1, 12);
    var btn4 = getRndInteger(1, 12);

    // function to reset game if conditionals are met 
    function reset() {
        newRndInt = getRndInteger(19, 120);
        $("#rndInt").html(newRndInt);
        btn1 = getRndInteger(1, 12);
        btn2 = getRndInteger(1, 12);
        btn3 = getRndInteger(1, 12);
        btn4 = getRndInteger(1, 12);
        playerTotal = 0;
        $("#total-score").html("Total score:");
    }
    
    // button functions, total score calculation, and methods to send info to proper div
    $("#btn-1").click(function () {
        playerTotal = playerTotal + btn1
        $("#total-score").html("Total score: " + playerTotal)
        $("#winLoss").fadeIn(10000).html("Win-Lose?");
    });

    $("#btn-2").click(function () {
        playerTotal = playerTotal + btn2
        $("#total-score").html("Total score: " + playerTotal)
        $("#winLoss").fadeIn(10000).html("Win-Lose?");
    });

    $("#btn-3").click(function () {
        playerTotal = playerTotal + btn3
        $("#total-score").html("Total score: " + playerTotal)
        $("#winLoss").fadeIn(10000).html("Win-Lose?");
    });

    $("#btn-4").click(function () {
        playerTotal = playerTotal + btn4
        $("#total-score").html("Total score: " + playerTotal)
        $("#winLoss").fadeIn(10000).html("Win-Lose?");
    });
    
    // on.click function, conditionals, display messages, win/loss tracking, and call reset  
    $(".number").click(function () {
        if (playerTotal === newRndInt) {
            $("#winLoss").html("You Win!!!");
            $("#wins").html("Wins: " + wins);
            wins++;
            reset();
        }
        if (playerTotal > newRndInt) {
            $("#winLoss").html("You Lose!!!");
            $("#loss").html("Losses: " + losses);
            losses++;
            reset();
        }
    });

});


