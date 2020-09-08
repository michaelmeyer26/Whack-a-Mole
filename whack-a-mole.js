"use strict"

var molehills = $('.molehill');

var currentScore = 0;
var highScore = 0;

$( "#start-button" ).click(molePop(currentScore));

function molePop(score) {
    //randomly selects a 'molehill' - one of the boxes - and then assigns it as a variable
    //also gives it the 'mole' class to display the mole.
    var currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
    $(currentLocation).addClass('mole');

    //When the mole is clicked, remove that class ("hiding" the mole) and increment score
    //then update html to reflect new score
    $(currentLocation).click(function () {
        $(currentLocation).removeClass('mole');
        score++;
        $('#current-score').html(score);
        currentLocation = undefined;
    });

    //makes the mole move around on a timer
    //when the timer runs out, remove the mole class and then run the function again from the top
    var delay = 1500; // delay time in milliseconds
    var timeoutId = setTimeout(function () {
        $(currentLocation).removeClass('mole');
        currentLocation = undefined;
        molePop(score);
    }, delay);
}


