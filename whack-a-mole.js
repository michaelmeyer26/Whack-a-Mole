"use strict"

$(document).ready(function() {
    var molehills = $('.molehill');

    var currentScore = 0;
    var highScore = 0;

    function molePop() {
        //randomly selects a 'molehill' - one of the boxes - and then assigns it as a variable
        //also gives it the 'mole' class to display the mole.
        var currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
        $(currentLocation).addClass('mole');

        //When the mole is clicked, remove that class ("hiding" the mole) and increment score
        //then update html to reflect new score
        $(currentLocation).click(function () {
            $(currentLocation).removeClass('mole');
            currentScore++;
            $('#current-score').html(currentScore);
            $(currentLocation).off('click')
        });

        //makes the mole move around on a timer
        //when the timer runs out, remove the mole class and then run the function again from the top
        var delay = 1500; // delay time in milliseconds
        var timeoutId = setTimeout(function () {
            $(currentLocation).removeClass('mole');
            $(currentLocation).off('click')
            molePop();
        }, delay);
    }

    $( "#start-button" ).click(molePop);
});




