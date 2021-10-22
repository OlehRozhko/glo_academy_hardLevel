"use strict";

// var func = function (data) {
//   if (typeof data !== typeof "") {
//     return alert("please write string here");
//   } else if (data.length > 30) {
//     return console.log(data.slice(0, 30) + "...");
//   } else {
//     return console.log(data.trim());
//   }
// };
// func("124453245523593982589uhifhjkadsfdffsfsfsfsf");

// Создать массив arr = []
// — Записать в него 7 любых многозначных чисел в виде строк
// — Вывести в консоль только те, что начинаются с цифры 2 или 4 (Должны присутствовать в массиве)
// 2) Вывести в столбик все простые числа от 1 до 100 (сделать при помощи цикла)
// — Статья про простые числа - КЛИК
// — Рядом с каждым числом написать оба делителя данного числа

//     Например: “Делители этого числа: 1 и n”

// var arr = ["2579", "84564", "4534", "454563", "28769", "7135", "014564"];
// for (var i = 0; i < 7; i++) {
//   if (arr[i].indexOf(2) === 0) {
//     console.log(arr[i]);
//   } else if (arr[i].indexOf(4) === 0) {
//     console.log(arr[i]);
//   }
// }

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i].startsWith("2") || arr[i].startsWith("4")) {
//     console.log(arr[i]);
//   }
// }
// var simpleNumber = [];
// var inCorrect = [];
// for (var i = 1; i < 100; i++) {
//   if (i <= 3 && i > 1) {
//     simpleNumber.push(i);
//   }
//   if (i > 3) {
//     if (i % 2 === 0) {
//       inCorrect.push(i);
//     } else if (i % 3 === 0) {
//       inCorrect.push(i);
//     } else if (i % 5 === 0) {
//       inCorrect.push(i);
//     } else if (i % 7 === 0) {
//       inCorrect.push(i);
//     } else {
//       simpleNumber.push(i);
//     }
//   }
// }

// console.log(simpleNumber);
// console.log("inCorrect: ", inCorrect);

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
