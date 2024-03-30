// Tip: We will be using the Date object and setInterval and/or setTimeout
// top stuff
// should this be myButton or button? Never know what to do with id

document.addEventListener('DOMContentLoaded', function() {
    // Function to update the clock display
    function updateClock() {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Display leading zeros if necessary
        hours = hours < 10 ? '0' + hours : hours;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        seconds = seconds < 10 ? '0' + seconds : seconds;

        // Update the clock display
        document.getElementById('hrs').textContent = hours;
        document.getElementById('min').textContent = minutes;
        document.getElementById('sec').textContent = seconds;

        // Check if the current time matches the alarm time
        checkAlarm(hours, minutes);
    }

    // Call the updateClock function every second
    setInterval(updateClock, 1000);

    // Function to check the alarm
    function checkAlarm(currentHours, currentMinutes) {
        var alarmTime = document.getElementById('alarmTime').value;
        var alarmHours = parseInt(alarmTime.split(':')[0]);
        var alarmMinutes = parseInt(alarmTime.split(':')[1]);

        // Check if alarm is set
        if (alarmTime !== '') {
            // Get the current time in hours and minutes
            var now = new Date();
            var nowHours = now.getHours();
            var nowMinutes = now.getMinutes();

            // Check if the current time matches the alarm time
            if (nowHours === alarmHours && nowMinutes === alarmMinutes) {
                // If the time matches, play the alarm sound
                document.getElementById('alarmAudio').play();
            }
        }
    }

    // Set alarm button event listener
    var setAlarmBtn = document.querySelector(".myButton");
    setAlarmBtn.addEventListener('click', function() {
        var alarmTime = document.getElementById('alarmTime').value;

        // Check for valid input
        if (alarmTime === '') {
            alert("Please set a valid alarm time.");
        }
    });
});
