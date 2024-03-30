// Tip: We will be using the Date object and setInterval and/or setTimeout

//clock functions

class Clock {

}

new Clock()

// date functions, do you need month and day and year or just first day?

// alarm function


// let's try this

let hrs = document.getElementById("hrs")

let min = document.getElementById("min")

let sec = document.getElementById("sec")

// need to use a set interval to return the current time
setInterval(() => {
    let currentTime = new Date();

    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)
// the 1000 is a millisecond which equals 1 second, and so it runs the code every second
