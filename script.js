"use strict";

var arr = ["2579", "84564", "4534", "454563", "28769", "7135", "014564"];
for (var i = 0; i < 7; i++) {
  if (arr[i].indexOf(2) === 0) {
    console.log(arr[i]);
  } else if (arr[i].indexOf(4) === 0) {
    console.log(arr[i]);
  }
}

for (let i = 0; i < arr.length; i++) {
  if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
    console.log(arr[i]);
  }
}

let n = 100;

nextPrime: for (let i = 2; i <= n; i++) {
  // Для всіх i...

  for (let j = 2; j < i; j++) {
    // перевірити,чи ділиться число..
    if (i % j === 0) continue nextPrime; // не підходить, беремо інше
  }
  console.log(i); // прості число
  $("body").append("<p>" + i + "</p>");
}
