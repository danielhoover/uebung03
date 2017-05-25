var numIntervals = 0;
var maxIntervals = 5;
var myInterval = null;

document.addEventListener("DOMContentLoaded", function() {
    myInterval = window.setInterval(function () {
        numIntervals++;

        if(numIntervals >= maxIntervals) {
            window.clearInterval(myInterval);
        }

        document.getElementById("main").innerHTML = numIntervals;
    }, 2000)



});
