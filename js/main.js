// Tip: We will be using the Date object and setInterval and/or setTimeout
// top stuff
// should this be myButton or button? Never know what to do with id
setAlarmBtn = document.querySelector("button"); 


// This section will build and set the clock to pull real time:

let hrs = document.getElementById("hrs")

let min = document.getElementById("min")

let sec = document.getElementById("sec")

// need to use a set interval to return the current time in real time.
// set interval calls it over and over:
setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = currentTime.getHours();
    min.innerHTML = currentTime.getMinutes();
    sec.innerHTML = currentTime.getSeconds();
},1000)
// the 1000 is a millisecond which equals 1 second, and so it runs the code every second

// lets try to make the alarm here; PICK UP HERE
// should I set this as a class actually be alarm?

function alarmSetFunction() {
    let now = new Date();
    let selectedDate = new Date(dateInput.value + "T" + tInput.value);
    if (selectedDate <= now) {
        alert(`Invalid time. Please select 
      a future date and time.`);
        return;
    }
    if (almTimesArray.includes(selectedDate.toString())) {
        alert(`You cannot set multiple 
      alarms for the same time.`);
        return;
    }
    if (cnt < maxValue) {
        let timeUntilAlarm = selectedDate - now;
        let alarmDiv = document.createElement("div");
        alarmDiv.classList.add("alarm");
        alarmDiv.innerHTML = `
            <span>
              ${selectedDate.toLocaleString()}
            </span>
            <button class="delete-alarm">
              Delete
            </button>
        `;
        alarmDiv
            .querySelector(".delete-alarm")
            .addEventListener("click", () => {
                alarmDiv.remove();
                cnt--;
                clearTimeout(interVal);
                const idx = almTimesArray.indexOf(selectedDate.toString());
                if (idx !== -1) {
                    almTimesArray.splice(idx, 1);
                }
            });
        interVal = setTimeout(() => {
            alert("Time to wake up!");
            alarmDiv.remove();
            cnt--;
            const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
            if (alarmIndex !== -1) {
                almTimesArray.splice(alarmIndex, 1);
            }
        }, timeUntilAlarm);
        contan.appendChild(alarmDiv);
        cnt++;
        almTimesArray.push(selectedDate.toString());
    } else {
        alert("You can only set a maximum of 3 alarms.");
    }
}
function showAlarmFunction() {
    let alarms = contan.querySelectorAll(".alarm");
    alarms.forEach((alarm) => {
        let deleteButton = alarm.querySelector(".delete-alarm");
        deleteButton.addEventListener("click", () => {
            alarmDiv.remove();
            cnt--;
            clearTimeout(interVal);
            const alarmIndex = almTimesArray.indexOf(selectedDate.toString());
            if (alarmIndex !== -1) {
                almTimesArray.splice(alarmIndex, 1);
            }
        });
    });
}
showAlarmFunction();
setInterval(timeChangeFunction, 1000);
btn.addEventListener("click", alarmSetFunction);
timeChangeFunction();

// OG build new above
document.getElementById("myButton").addEventListener("click", function (){
setTimeout(function() { alert("Wake up!"); }, time);
});
function newFunction() {
    return this;
}

