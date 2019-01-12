


var newTotal = 0;
var wins = 0;
var losses = 0;
var newTotal = [];
var randomNumToGuess = Math.floor(Math.random() * 101 + 19);

var blueNum = Math.ceil(Math.random() * 11);
var greenNum = Math.ceil(Math.random() * 11);
var redNum = Math.ceil(Math.random() * 11);
var yellowNum = Math.ceil(Math.random() * 11);


$(document).ready(function () {
    //game setup:
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
        console.log(` new total: ${newTotal.isNum}`);
    });

    $('#green-img').click(function () {
        newTotal = newTotal + greenNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'green');
        alert('button clicked ' + greenNum);
    });
    $('#red-img').click(function () {
        newTotal = newTotal + greenNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'red');
        alert('button clicked ' + redNum);

    });
    $('#yellow-img').click(function () {
        newTotal = newTotal + yellowNum;
        newTotal = parseInt(newTotal);
        $("#finalTotal").text(newTotal);
        $('span').css('color', 'goldenrod');
        alert('button clicked ' + yellowNum);
    });



    //function to start game
    // function startGame() {

    // }







});   //end of ready

    /////// to set up hiding paragraph

    // $('#btn1').on('click', function () {
    //     $('.para1').hide();
    // });

    // $('#red3').on('click', function () {
    //     $('span').css('color', 'red');
    // });

    // $('#btn3').on('click', function () {
    //     $('.imgs').hide();
    // });
    // $('#btn4').dblclick(function () {
    //     $('#ptoggle').toggle();
    //     alert('double click button again to toggle the text');
    // });
    // $('#btn5').on('click', function () {
    //     $('.imgs').show();
    // });

    // hover to toggle was buggy
    // $('#btn6').on('mouseenter', function () {
    //     $('#list').toggle();
    // });
    // $('#btn7').on('mouseleave', function () {
    //     $('#list').toggle();
    // });
    // $('#btn7').on('mousemove', function () {
    //     $('#list').toggle();
    // });

    // $('#btn6').on('mousedown', function () {
    //     $('#list').toggle();
    // });
    // $('#btn6').on('mouseup', function () {
    //     $('#list').toggle();
    // });
    // $('#btn7').on('click', function () {
    //     $('p').css('background-color', 'pink');
    // });

    // $('#btn7').click(function (e) {
    //     alert(e.currentTarget.id);
    //     alert(e.currentTarget.className);
    // });

    // THIS SHOWS COORDINATES
    // $('#btn7').on('mousemove', function (e) {
    //     console.log('Coords: Y: ' + e.clientY + "X: " + e.clientX);
    // });

    // $(document).on('mousemove', function (e) {
    //     console.log('Coords: Y:' + e.clientY + " X: " + e.clientX);
    // });

    // $('h1').hide();
    //  $('h1#heading1').hide();
    //$('#heading2').hide();
    //$('p').hide();
    //$('p span').css('color', 'red');


    //$('li').css('color', 'purple');
    //$('ul#list li:last').css('color', 'pink');
    //$('ul#list li:first').css('color', 'green');
    //$('ul#list li:even').css('background-color', 'yellow');
    //$('ul#list li:odd').css('color', #cccccc');
    // removes every 3rd bullet  $('ul#list li:nth-child(3n)').css('list-style', 'none');
    //$(':button').hide();
    //$('[href]').css('color', 'red');
    //$(':text').hide();
    //////////////////



    // function tallyLosses{

    // };
    // function tallyWins{



// function reset{

// };
///

////
// var changeWinsScoreboard = document.querySelector("#test");
// let contents = numberWins.innerHTML;
// var  = document.getElementById("numberWins");
// ////
// let contents = numberLosses.innerHTML;
// var changeLossesScoreboard = document.getElementById("numberLosses");

// var score = 0;
// var wins = 0;
// var losses = 0;
// var playersChoice = [];

// var readable = {
//     '0': 'Blue',
//     '1': 'Green',
//     '2': 'Red',
//     '3': 'Yellow',
// };





// var computerChoice = {
//     init: function () {
//         this.store = Math.floor(Math.random() * 4);
//         this.text = readable[this.store];
//     },
//     store: '',
//     text: ''
// };

// computerChoice.init();

// console.log('computerChoice:', computerChoice.store, computerChoice.text);
// var order = [0, 1, 2, 0];

// var chooseWinner = function (playerChoice, computerChoice) {
//     if (order[playerChoice] === order[computerChoice]) {
//         return 'The Game is tied. Care to try again?';

//     } if (order[playerChoice] === order[computerChoice + 1]) {
//         score++;
//         return 'You Won!';
//     } else {
//         score--;
//         return 'You Lose!';
//     }
// }

// var paragraph = document.querySelector('p');

// var assignClick = function (tag, pos) {
//     //assign a click listener
//     tag.addEventListener('click', function () {
//         //set the players choice equals position clicked
//         playerChoice = pos;
//         //give feedback to the computer computerChoice
//         computerChoice.init();
//         paragraph.innerText = 'The computer chose: ' + computerChoice.text
//         //////determine a winner
//         //////display winner and current score
//         //paragraph.innerText += '\n' + chooseWinner(playerChoice, computerChoice.store);
//         // paragraph.innerText += '\n' + 'SCORE: ' + score;
//         console.log(computerChoice);
//         console.log(chooseWinner);
//         console.log(paragraph.innerText);
//     });
// }


// //this sets up images being clicked position as choice 

// var images = {
//     tags: document.getElementsByTagName('img'),
//     init: function () {
//         for (var step = 0; step < this.tags.length; step++) {
//             assignClick(this.tags[step], step);
//         }
//     }
// }
// //this calls the images
// images.init();