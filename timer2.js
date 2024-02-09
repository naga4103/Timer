let hours = 0,
  min = 0,
  sec = 0,
  minTime,
  hoursTime,
  count12 = 0,
  amOrPm = "AM";

setInterval(timerCallBack, 1000);
function timerCallBack() {
  if (sec === 61) {
    sec = 0;
    min++;
  }
  if (min === 61) {
    min = 0;
    hours++;
  }

  if (sec >= 0 && sec <= 9) {
    sec = "0" + sec;
  }

  if (min >= 0 && min <= 9) {
    minTime = "0" + min;
  } else {
    minTime = min;
  }

  if (hours === 13 && count12 === 0) {
    hours = 1;
    count12 = 1;
    amOrPm = "PM";
  }
  if (hours === 12 && count12 === 1) {
    hours = 0;
    amOrPm = "AM";
  }

  if (hours >= 0 && hours <= 9) {
    hoursTime = "0" + hours;
  } else {
    hoursTime = hours;
  }

  console.log(hoursTime + ":" + minTime + ":" + sec + " " + amOrPm);
  sec++;
}
