molehills = $('.molehill');

// var currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
// $(currentLocation).addClass('mole');



function molePop() {
    var currentLocation = $(molehills[Math.floor(Math.random()*molehills.length)]);
    $(currentLocation).addClass('mole');

    var delay = 1000; // delay time in milliseconds

    var timeoutId = setTimeout(function () {
        $(currentLocation).removeClass('mole');
        molePop()
    }, delay);
}

molePop();
