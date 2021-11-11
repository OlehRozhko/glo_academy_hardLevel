"use strict";

let heading = document.getElementById("color"),
  change = document.getElementById("change");

const array = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];
let randomElem = function () {
  let i = 0;
  let result = "#";
  let randomElement;
  do {
    randomElement = array[Math.floor(Math.random() * array.length)];
    result = result + randomElement;
    i++;
  } while (i < 6);
  document.body.style.backgroundColor = result;
  heading.innerHTML = result;
};
change.addEventListener("click", randomElem);
