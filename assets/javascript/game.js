$(document).ready(function () {

    // var RndInt = 0;
    var btn1;
    var btn2;
    var btn3;
    var btn4;
    var playerTotal = 0;
    var wins = 1;
    var losses = 1;


    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    var newRndInt = getRndInteger(19, 120)
    $("#rndInt").html(newRndInt)

    var btn1 = getRndInteger(1, 12)
    console.log(btn1);

    var btn2 = getRndInteger(1, 12)
    console.log(btn2);

    var btn3 = getRndInteger(1, 12)
    console.log(btn3);

    var btn4 = getRndInteger(1, 12)
    console.log(btn4);

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


