"use strict";

let week = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

var now = new Date();
var day = now.getDay();
var nowDay;

var getDayOfWeek = function (number) {
  if (number === 0) {
    return (nowDay = "Sunday");
  } else if (number === 1) {
    return (nowDay = "Monday");
  } else if (number === 2) {
    return (nowDay = "Tuesday");
  } else if (number === 3) {
    return (nowDay = "Wednesday");
  } else if (number === 4) {
    return (nowDay = "Thursday");
  } else if (number === 5) {
    return (nowDay = "Friday");
  } else {
    return (nowDay = "Friday");
  }
};
getDayOfWeek(day);
console.log("nowDay: ", nowDay);

week.forEach((element) => {
  if (element === "Sunday" || element === "Saturday") {
    $("body").append("<p><i>" + element + "</i></p>");
  } else if (nowDay === element) {
    $("body").append("<p><strong>" + element + "</strong></p>");
  } else {
    $("body").append("<p>" + element + "</p>");
  }
});

// var now = new Date();
// var nowDay = now.getDay();
// var day;
// if (nowDay === 0) {
//   day = 7;
// } else {
//   day = nowDay--;
// }

// week.forEach((element, i) => {
//   if (element === "Sunday" || element === "Saturday") {
//     $("body").append("<p><i>" + element + "</i></p>");
//   } else if (day === i) {
//     $("body").append("<p><strong>" + element + "</strong></p>");
//   } else {
//     $("body").append("<p>" + element + "</p>");
//   }
// });
