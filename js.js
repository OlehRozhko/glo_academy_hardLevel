"use strict";
const button = document.querySelector("button");
const select = document.getElementById("select");
const result = document.querySelector(".result");
const input = document.getElementById("input");
let rate;
const key =
  "key=eaba687e8c78a341193b0f1a753b6c08&symbols=USD,AUD,CAD,PLN,MXN&format=1";

const sendRequest = (url, str = "") =>
  fetch(url, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: str,
  });
const nowCurrent = (current) => {
  console.log(current);
};

select.addEventListener("change", (e) => {
  const target = e.target.value;
  // if (target === "EUR") {
  //   return;
  // }
  const url =
    "http://api.exchangeratesapi.io/v1/latest?access_key=eaba687e8c78a341193b0f1a753b6c08&symbols=USD,AUD,CAD,PLN,MXN&format=1";
  sendRequest(url)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(
          `Status network ${response.status} (${response.statusText})`
        );
      }

      return response.json();
    })
    .then((data) => {
      rate = data.rates[target];
    })
    .catch((error) => alert(error));
});
button.addEventListener("click", () => {
  if (select.value === "EUR" || !input.value) {
    return;
  } else {
    let sum = Math.ceil(input.value * rate * 100) / 100;
    result.innerHTML = "Сума : " + sum + " " + select.value;
  }
});
input.addEventListener("input", (e) => {
  const target = e.target;
  target.value = target.value.replace(/\D/, "");
});
