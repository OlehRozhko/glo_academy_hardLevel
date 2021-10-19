// Створити змінну num зі значенням 266219 (тип даних число)
var num = 266219;

// Вивести в консоль дію (множення) цифр цього числа
var result = 1;
num
  .toString()
  .split("")
  .forEach((elem) => (result *= elem));
console.log("result: ", result);

// Отриманий результат звести в ступінь 3, використовуючи тільки 1 оператор (Math.pow не підходить)
var newResult = result ** 3;
console.log("newResult: ", newResult);

// Вивести на екран перші 2 цифри отриманого числа
var raising = newResult.toString().substr(0, 2);
console.log("raising: ", raising);
