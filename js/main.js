// Tip: We will be using the Date object and setInterval and/or setTimeout
// top stuff
// should this be myButton or button? Never know what to do with id
setAlarmBtn = document.querySelector("button"); 


// This section will build and set the clock to pull real time:

let hrs = document.getElementById("hrs")

let min = document.getElementById("min")

let sec = document.getElementById("sec")

// need to use a set interval to return the current time in real time.
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)
// the 1000 is a millisecond which equals 1 second, and so it runs the code every second

// lets try to make the alarm here; PICK UP HERE

document.getElementById("myButton").addEventListener("click", function (){
setTimeout(function() { alert("Wake up!"); }, time);
});
