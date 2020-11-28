let seconds = 0;
let minutes = 25;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";
let flag = 1;

//Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch() {
  seconds--;
  if (seconds < 0) {
    seconds = 59;
    minutes--;
    if (minutes < 0) {
      minutes = 59;
      hours--;
      if (hours < 0) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        window.clearInterval(interval);
        //console.log("time up");
        alert("Times Up !!!");
      }
    }
  }

  //If seconds/minutes/hours are only one digit, add a leading 0 to the value
  if (seconds < 10) {
    displaySeconds = "0" + seconds.toString();
  } else {
    displaySeconds = seconds;
  }

  if (minutes < 10) {
    displayMinutes = "0" + minutes.toString();
  } else {
    displayMinutes = minutes;
  }

  if (hours < 10) {
    displayHours = "0" + hours.toString();
  } else {
    displayHours = hours;
  }

  //Display updated time values to user
  document.getElementById("display").innerHTML =
    displayHours + ":" + displayMinutes + ":" + displaySeconds;
}

function start() {
  if (status === "stopped") {
    if (flag != 0) {
      interval = window.setInterval(stopWatch, 1000);
      document.getElementById("start").disabled = true;
      document.getElementById("short").disabled = true;
      document.getElementById("long").disabled = true;
    }
  }
  document.getElementById("start");
  status = "started";
}

function pause() {
  window.clearInterval(interval);
  document.getElementById("stop");
  status = "stopped";
  document.getElementById("start").disabled = false;
}

//Function to reset the stopwatch
function reset() {
  window.clearInterval(interval);
  seconds = 0;
  minutes = 25;
  hours = 0;
  document.getElementById("display").innerHTML = "00:25:00";
  document.getElementById("start").innerHTML = "Start";
  status = "stopped";
  document.getElementById("start").disabled = false;
  document.getElementById("short").disabled = false;
  document.getElementById("long").disabled = false;
  // document.getElementById("stop").innerHTML = "stop";
}
function shortBreak() {
  flag = 1;
  window.clearInterval(interval);
  var Time = prompt("By Default short break is between 1-5 minutes");
  if (Time != null) {
    if (Time === "") {
      Time = 5;
      document.getElementById("display").innerHTML = "00:" + Time + ":00";
    } else {
      if (Time < 1) {
        Time = 1;
        document.getElementById("display").innerHTML = "00:0" + Time + ":00";
      } else if (Time > 5) {
        Time = 5;
        document.getElementById("display").innerHTML = "00:0" + Time + ":00";
      } else {
        //Time = 15;
        //console.log("is int - "+Number.isInteger(Time));
        Time = parseInt(Time);
        if (Number.isInteger(Time)) {
          document.getElementById("display").innerHTML = "00:0" + Time + ":00";
        } else {
          alert("Please enter a valid number");
          flag = 0;
        }
      }
    }
  } else {
    Time = 0;
    flag = 0;
    document.getElementById("display").innerHTML = "00:25:00";
    //alert("your break is for 5 min");
  }

  minutes = Time;
  status = "stopped";
  seconds = "0";
  start();
}

function longBreak() {
  flag = 1;
  window.clearInterval(interval);
  var Time = prompt("By Default long break is between 10-15 minutes");
  if (Time != null) {
    if (Time === "") {
      Time = 15;
      document.getElementById("display").innerHTML = "00:" + Time + ":00";
    } else {
      if (Time < 10) {
        Time = 10;
        document.getElementById("display").innerHTML = "00:" + Time + ":00";
      } else if (Time > 15) {
        Time = 15;
        document.getElementById("display").innerHTML = "00:" + Time + ":00";
      } else {
        //Time = 15;
        //console.log("is int - "+Number.isInteger(Time));
        Time = parseInt(Time);
        if (Number.isInteger(Time)) {
          document.getElementById("display").innerHTML = "00:" + Time + ":00";
        } else {
          alert("Please enter a valid number");
          flag = 0;
        }
      }
    }
  } else {
    Time = 0;
    flag = 0;
    document.getElementById("display").innerHTML = "00:25:00";
    //alert("your break is for 5 min");
  }

  minutes = Time;
  status = "stopped";
  seconds = "0";
  start();
}
