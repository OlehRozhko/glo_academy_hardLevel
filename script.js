var lang = prompt(
  "In which language do you want to see three first days of week uk or en?",
  ""
);
if (lang == "en") {
  alert("Monday, Tuesday, Wednesday ...");
} else if (lang == "uk") {
  alert("Понеділок, Вівтор, Середа ...");
} else {
  alert("Next time please write uk or en!!");
}

var lang1 = prompt(
  "In which language do you want to see three first days of week uk or en?",
  ""
);
switch (lang1) {
  case "uk":
    alert("Понеділок, Вівтор, Середа ...");
    break;
  case "en":
    alert("Monday, Tuesday, Wednesday ...");
    break;
}

var arra = [];
arra.en = ["monday", "tuesday", "Wednesday"];
arra.uk = ["Понеділок", "Вівтор", "Середа"];
console.log(arra[lang]);

var array = {
  en: ["monday", "tuesday", "Wednesday"],
  uk: ["Понеділок", "Вівтор", "Середа"],
};
console.log(array[lang]);

var namePerson = "Андрій";

console.log(
  namePerson === "Артем"
    ? "директор"
    : namePerson === "Максим"
    ? "вчитель"
    : "студент"
);
