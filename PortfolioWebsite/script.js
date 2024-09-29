//kalkulator
let numberOnScreen = 0;
let num1 = 0;
let num2 = 0;
let keySign = "";
let signEqual = "";
let screen = document.querySelector(".screen");
screen.innerHTML = numberOnScreen.toFixed(2);
let keyNumberSum = 0;
let result = 0;

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("key1")) {
    let keyNumber = e.target.innerHTML;
    keyNumberSum += keyNumber; // type of keyNumberSum changed to string
    keyNumberSum = Number(keyNumberSum); // type of keyNumberSum changed back to number
    console.log(keyNumberSum);
    console.log(typeof keyNumberSum);
    screen.innerHTML = keyNumberSum;
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("plus")) {
    keySign = e.target.innerHTML;

    console.log(keySign);
    console.log(typeof keySign);
    screen.innerHTML = keySign;
    num1 = keyNumberSum;
    console.log(num1);
    keyNumberSum = 0;
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("minus")) {
    keySign = e.target.innerHTML;

    console.log(keySign);
    console.log(typeof keySign);
    screen.innerHTML = keySign;
    num1 = keyNumberSum;
    console.log(num1);
    keyNumberSum = 0;
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("multi")) {
    keySign = e.target.innerHTML;

    console.log(keySign);
    console.log(typeof keySign);
    screen.innerHTML = keySign;
    num1 = keyNumberSum;
    console.log(num1);
    keyNumberSum = 0;
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("equal")) {
    num2 = keyNumberSum;
    if (keySign === "+") {
      keyNumberSum = num1 + num2;
    } else if (keySign === "-") {
      keyNumberSum = num1 - num2;
    } else if (keySign === "x") {
      keyNumberSum = num1 * num2;
    }
    console.log(keyNumberSum);
    screen.innerHTML = keyNumberSum.toFixed(2);
  }
});

document.body.addEventListener("click", function (e) {
  if (e.target.classList.contains("cancel")) {
    keySign = "";
    num1 = 0;
    num2 = 0;
    keyNumberSum = 0;

    screen.innerHTML = keyNumberSum.toFixed(2);
  }
});
