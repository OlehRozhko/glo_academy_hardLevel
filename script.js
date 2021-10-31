"use strict";

function reload() {
  var d = new Date();
  var currDate = d.getDate();
  var currMonth = d.getMonth() + 1; //Months are zero based
  var currYear = d.getFullYear();
  var currHour = d.getHours();
  var currMin = d.getMinutes();
  var currSec = d.getSeconds();
  var options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "long",
    timezone: "UTC",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };
  var addZero = (number) => {
    if (number < 10) {
      return (number = "0" + number);
    } else {
      return number;
    }
  };

  var time =
    addZero(currDate) +
    "." +
    addZero(currMonth) +
    "." +
    addZero(currYear) +
    " - " +
    addZero(currHour) +
    ":" +
    addZero(currMin) +
    ":" +
    addZero(currSec);

  var date = d.toLocaleString("uk", options);
  var firstPart = "Сьогодні " + date.slice(0, 23) + " року,";
  var lastPart =
    addZero(currHour) +
    " година " +
    addZero(currMin) +
    " хвилин " +
    addZero(currSec) +
    " секунд";
  var textTime = firstPart.concat(lastPart);

  document.querySelector(".text-time").textContent = textTime;
  document.querySelector(".time").textContent = time;
  console.clear();
  console.log(textTime);
  console.log(time);
}

var deleteElem = function () {
  $("body").remove();
};

let elem = document.createElement("div");
elem.classList.add("text-time");
document.body.appendChild(elem);

elem = document.createElement("div");
elem.classList.add("time");
document.body.appendChild(elem);
console.dir(elem);

document.body.style.color = "red";

setInterval(reload, 1000);
