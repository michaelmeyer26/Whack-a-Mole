molehills = $('.molehill');

// var currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
// $(currentLocation).addClass('mole');

var score = 0

function molePop(score) {
    var currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
    $(currentLocation).addClass('mole');

    $(currentLocation).click(function () {
        $(currentLocation).removeClass('mole');
        score++;
        console.log(score);
        $('#score').html(score)
    })

    //makes the mole move around on a timer
    var delay = 1500; // delay time in milliseconds
    var timeoutId = setTimeout(function () {
        $(currentLocation).removeClass('mole');
        molePop(score)
    }, delay);

    // var interval = 1000; // interval time in milliseconds
    //
    // var intervalId = setInterval(function () {
    //     if (count >= max) {
    //         clearInterval(intervalId);
    //         console.log('All done');
    //     } else {
    //         count++;
    //         console.log('Repeating this line ' + count);
    //     }
    // }, interval);
}

molePop(score);
