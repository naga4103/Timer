//console.log("Date", d);
//console.log(d.getTime());
//console.log(d.getMinutes(), d.getSeconds(), d.getHours());
// while (1) {}

setInterval(() => {
  let d = new Date();
  let hoursForAmPm;
  let hours, minutes, seconds, amOrPm;

  //Hours

  if (d.getHours() >= 13) {
    hoursForAmPm = d.getHours() - 12;
  }
  // console.log(
  //   d.getHours() - 12 + ":" + d.getMinutes() + ":" + d.getSeconds() + "PM"
  // );
  // {
  //     let hoursMin=d.getHours()-12+
  // }
  else {
    hoursForAmPm = d.getHours();
  }

  //   if (d.getHours() >= 12) amOrPm = "PM";
  //   else amOrPm = "AM";

  d.getHours() >= 12 ? (amOrPm = "PM") : (amOrPm = "AM");

  if (hoursForAmPm >= 0 && hoursForAmPm <= 9) hours = "0" + hoursForAmPm;
  else hours = hoursForAmPm;

  //   console.log(hours);

  // console.log(
  //   d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + " AM"
  // );

  //Minutes

  if (d.getMinutes() >= 0 && d.getMinutes() <= 9)
    minutes = "0" + d.getMinutes();
  else minutes = d.getMinutes();

  // console.log("Minutes...", minutes);

  if (d.getSeconds() >= 0 && d.getSeconds() <= 9)
    seconds = "0" + d.getSeconds();
  else seconds = d.getSeconds();

  //   console.log("Seconds", seconds);

  console.log(hours + ":" + minutes + ":" + seconds + " " + amOrPm);
}, 1000);
