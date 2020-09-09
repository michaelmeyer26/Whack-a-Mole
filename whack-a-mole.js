"use strict"

$(document).ready(function() {
    var molehills = $('.molehill');

    var timeoutId;
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
        timeoutId = setTimeout(function () {
            $(currentLocation).removeClass('mole');
            $(currentLocation).off('click');
            molePop();
        }, delay);
    }


    $( "#start-button" ).click(molePop);

    //TODO: Figure out a way to have the game end after 30 secs. Below function doesn't work because molePop keeps calling itself I guess?
    //TODO: fix this by putting everything into one function, that can actually interrupt the 1.5 sec timer molepop is on
    //TODO: Maybe need to refactor code to use functions to keep things neat

    // $( "#start-button" ).click(function() {
    //     setTimeout(function () {
    //         $(currentLocation).removeClass('mole');
    //         $(currentLocation).off('click');
    //         clearTimeout(timeoutId);
    //     }, 30000);
    //     molePop();
    // });
});




