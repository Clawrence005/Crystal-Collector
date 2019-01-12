
$(document).ready(function () {
    //seting up game
    var newTotal = 0;
    var wins = 0;
    var losses = 0;
    var randomNumToGuess = Math.floor(Math.random() * 101 + 19);

    var blueNum = Math.ceil(Math.random() * 11);
    var greenNum = Math.ceil(Math.random() * 11);
    var redNum = Math.ceil(Math.random() * 11);
    var yellowNum = Math.ceil(Math.random() * 11);

    function winner() {
        alert("you won!!");
        $('span').css('color', 'goldenrod');
        $('span').text();
        //$('#finalTotal').append('<span> YOU WON!!! </span>');
        //$('#finalTotal').remove('<span> YOU LOST!!! </span>');
        $('#numberWins').text(wins);
        wins++;
        reset()
    }
    function loser() {
        alert("you Lost!!");
        $('span').css('color', 'Red');
        $('span').text();
        //$('#finalTotal').append('<span> YOU LOST!!! </span>');
        //$('#finalTotal').remove('<span> YOU LOST!!! </span>');
        $('#numberLosses').text(losses);
        losses++;
        reset()
    }
    //game setup:
    function reset() {
        finalTotal = 0;
        newTotal = 0;
        randomNumToGuess = Math.floor(Math.random() * 101 + 19);
        blueNum = Math.ceil(Math.random() * 11);
        greenNum = Math.ceil(Math.random() * 11);
        redNum = Math.ceil(Math.random() * 11);
        yellowNum = Math.ceil(Math.random() * 11);

    }
    console.log(`users number changing: ${newTotal}, wins: ${wins}, losses: ${losses}, number to guess: ${randomNumToGuess}, blue: ${blueNum}, green: ${greenNum}, red: ${redNum}, yellow: ${yellowNum}`);

    $('#numberToMatch').append('<span> ' + randomNumToGuess + ' </span>');
    $('#numberWins').append('<span> ' + wins + ' </span>');
    $('#numberLosses').append('<span> ' + losses + ' </span>');

    // newTotal = parseInt(newTotal);


    $('#blue-img').click(function () {
        //nope//$('.userTotal').append('<span> ' + blueNum + ' </span>');
        //$("#finalTotal").text.append(greenNum);
        newTotal = newTotal + blueNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'blue');
        // $('span').val('');
        alert('button clicked ' + blueNum);
        // console.log(` new total: ${newTotal.isNum}`);
        if (newTotal == randomNumToGuess) {
            winner();
            reset();
        }
        else if (newTotal > randomNumToGuess) {
            loser();
            reset();
        }
    });

    $('#green-img').click(function () {
        newTotal = newTotal + greenNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'green');
        alert('button clicked ' + greenNum);
        if (newTotal == randomNumToGuess) {
            winner();
        }
        else if (newTotal > randomNumToGuess) {
            loser();
        }
    });
    $('#red-img').click(function () {
        newTotal = newTotal + redNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'red');
        alert('button clicked ' + redNum);
        if (newTotal == randomNumToGuess) {
            winner();
        }
        else if (newTotal > randomNumToGuess) {
            loser();
        }
    });

    $('#yellow-img').click(function () {
        newTotal = newTotal + yellowNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'goldenrod');
        alert('button clicked ' + yellowNum);
        if (newTotal == randomNumToGuess) {
            winner();
        }
        else if (newTotal > randomNumToGuess) {
            loser();
        }
    }
    )
})