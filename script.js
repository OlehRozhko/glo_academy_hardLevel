"use strict";

function inputText() {
  var input = document.querySelector("input");
  var list = document.querySelector("ul");
  list.setAttribute("id", "ul");
  input.setAttribute("id", "textInput");

  var liLast = document.createElement("li");

  if (input.value != !String) {
    liLast.innerHTML = input.value;
    return ul.append(liLast);
  }
}

function clearText() {
  document.getElementById("textInput").value = "";
}

let button = document.querySelector("button");
button.addEventListener("click", inputText);
button.addEventListener("click", clearText);
