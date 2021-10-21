"use strict";

var func = function (data) {
  if (typeof data !== typeof "") {
    return alert("please write string here");
  } else if (data.length > 30) {
    return console.log(data.slice(0, 30) + "...");
  } else {
    return console.log(data.trim());
  }
};
func("124453245523593982589uhifhjkadsfdffsfsfsfsf");
