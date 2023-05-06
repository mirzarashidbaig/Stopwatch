let hour = 0;
let min = 0;
let sec = 0;
let count = 0;

let timer = false;


const start = () => {
    timer = true
    stopwatch();


}

const stop = () => {
    timer = false
}

const reset = () => {
    timer = false

    hour = 0
    min=0
    sec=0
    count=0
    
    document.querySelector('.count').innerHTML = "00";
document.querySelector('.sec').innerHTML ="00" ;
document.querySelector('.min').innerHTML = "00";
 document.querySelector('.hour').innerHTML = "00";
}

const stopwatch = () => {
    if (timer == true) {
        count = count + 1;

        if (count == 100) {
            sec = sec + 1
            count = 0
        }

        if (sec == 60) {
            min = min + 1
            sec = 0
            count = 0
        }
        if (min == 60) {
            hour = hour + 1
            min = 0
            sec = 0
        }

        if (hour == 24) {
            hour == 0
        }

        setTimeout("stopwatch()", 10);

        document.querySelector('.count').innerHTML = count;
        if (sec < 10) {

            document.querySelector('.sec').innerHTML = "0" + sec;
        }
        else {
            document.querySelector('.sec').innerHTML = sec;
        }
        if (min < 10) {

            document.querySelector('.min').innerHTML =  "0" + min;
        }
        else {
            document.querySelector('.min').innerHTML =  min;
        }
        if (hour < 10) {

            document.querySelector('.hour').innerHTML =  "0" + hour;
        }
        else {
            document.querySelector('.hour').innerHTML =  hour;
        }
    }
}








