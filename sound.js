
function countdown() {
    // sets up the timer start, to count down by 1, 12 is so it  comes down to 0
    var currTime = 10;
    for (var i = 1; i < 12; i++) {
// the loop that actually sets up the countdown 
        setTimeout(function () {
            document.getElementById("countdown").innerHTML = "the time left is " + currTime;
            currTime = currTime - 1;
            // the computer counts by milliseconds, hence the 1000 * 1 so the computer counts in normal speed
        }, 1000 * i);
    }
}
function countdown() {
    var currTime = 10;
    // for setups the basis of the function. in this case 0 = blastoff text
    for (var i = 1; i <= 12; i++) {
        // 12 is so the count goes down to 0
        if (i == 12) {
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "Blastoff!!!";
            }, 1000 * i);
        } else if (i > 5) {
            // when the timer is at 5 or less, it will display warning. it took some time to figure out the number to get it to start warning at 5
            setTimeout(function () {
                document.getElementById("countdown").innerHTML =
                    "Warning Less than half way to launch, time left = " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        } else {
            // the code that states the amount of time left before launch
            setTimeout(function () {
                document.getElementById("countdown").innerHTML = "the time left is " + currTime;
                currTime = currTime - 1;
            }, 1000 * i);
        }
    }
}
// code for the start button to work and disable when clicked
function start() {
    document.getElementById("startButton").disabled = true;
    document.getElementById("stopButton").disabled = false;
   document.getElementById("data").rows["seconds"].innerHTML = "Start inactive...";
   document.getElementById("data").rows["latitude"].innerHTML = "Stop active...";
}
// code for the stop button
function stop() {
    document.getElementById("data").rows["seconds"].innerHTML = "<td>Time Elasped:</td><td>15 seconds</td></td>";
    document.getElementById("data").rows["latitude"].innerHTML = "<td>latitude:</><td>8</td></td>";
     document.getElementById("startButton").disabled = false;
    document.getElementById("stopButton").disabled = true;
}
// code for the mp3 files
function nomaderr() {
    mySound = new sound("nomaderr.mp3");
    mySound.play();}

 function starwars() {
        mySound = new sound("starwars.mp3");
        mySound.play();}

// the code allows for the mp3 files to work
    function sound(src) {

        this.sound = document.createElement("audio");
    
        this.sound.src = src;
    
        this.play = function() {
    
            this.sound.play();
    
        }
    }