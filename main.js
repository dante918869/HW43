const h1Orange = document.querySelector(".Succeeded");
const h1Green = document.querySelector(".whours");
const h1Violet = document.querySelector(".hclients");

let num1 = 0;
let num2 = 0;
let num3 = 0;

// first card
setInterval(function () {
  if (num1 < 500) {
    num1++;
    h1Orange.textContent = num1;
  }
}, 10);

//  2nd card
setInterval(function () {
  if (num2 < 17140) {
    num2++;
    h1Green.textContent = num2;
  }
}, 10);

// 3rd card
setInterval(function () {
  if (num3 < 1500) {
    num3++;
    h1Violet.textContent = num3;
  }
}, 10);
