"use strict"

$(document).ready(function() {
    let molehills = $('.molehill');

    let timeoutId;
    let currentScore = 0;
    let highScore = 0;
    let timePassed = 0;
    let delay = 1500;
    let currentLocation;



    function molePop() {
        //randomly selects a 'molehill' - one of the boxes - and then assigns it as a variable
        //also gives it the 'mole' class to display the mole.
        currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
        $(currentLocation).addClass('mole');

        //When the mole is clicked, remove that class ("hiding" the mole) and increment score
        //then update html to reflect new score
        $(currentLocation).click(function () {
            $(currentLocation).removeClass('mole');
            currentScore++;
            $('#current-score').html(currentScore);
            $(currentLocation).off('click')
            // if (delay > 100) {
            //     delay -= 100;
            // } else if (delay < 100 && delay > 25) {
            //     delay -= 25;
            // } else if (delay < 25 && delay > 5) {
            //     delay -= 5;
            // }
            // console.log(delay);
        });
    };

    //TODO: Figure out a way to have the game end after 30 secs. Below function doesn't work because molePop keeps calling itself I guess?
    //TODO: fix this by putting everything into one function, that can actually interrupt the 1.5 sec timer molepop is on
    //TODO: Maybe need to refactor code to use functions to keep things neat

    $( "#start-button" ).click(function() {
        delay = 1500;
        molePop();

        //After the initial molePop, every delay seconds, clears molePop and then runs it again to set new location
        //and event listeners
        let molePopTimer = setInterval(function () {
            $(currentLocation).removeClass('mole');
            $(currentLocation).off('click');
            molePop();
        }, delay);

        //After a full round, clears molePop and stops it from running any further. Alerts user and then updates high
        //score if needed
        setTimeout(function () {
            $(currentLocation).removeClass('mole');
            $(currentLocation).off('click');
            clearTimeout(molePopTimer);
            if (currentScore > highScore) {
                highScore = currentScore;
                $('#high-score').html(highScore);
                alert("Time's up! New High Score!");
            } else {
                alert("Time's up!")
            };
            currentScore = 0;
            $('#current-score').html(currentScore);
        }, 30000);
    });
});




