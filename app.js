const first = document.querySelector(".f-1");
const secound = document.querySelector(".s-2");
// this function  is for first box //
setTimeout(function () {
  first.innerHTML = "hello dear, we  welcome you to our site ";
}, 4000);

// this function is for secound box //
function check() {
  const number = Number(prompt());
  if (number % 2 == 0) {
    secound.innerHTML = "THE NUMBER IS EVEN";
  } else {
    secound.innerHTML = "THE NUMBER IS ODD ";
  }
}
const btn1 = document.querySelector(".btn-1");
btn1.addEventListener("click", check);

// this is function to check the number is prime or not //

let thired = document.querySelector(".T-3");
function prime_or_not() {
  const number = Number(prompt());
  if (number <= 2) {
    return alert("provide number which is grater than two ");
  }
  for (let i = 2; i < number; i++) {
    let prime = number % i;
    if (prime === 0) {
      thired.innerHTML = "number is not prime";
      break;
    } else {
      thired.innerHTML = "number is prime ";
    }
  }
}

//this is just a function for geting input and printing input in dom //
var sumbmit = document.querySelector(".after");
sumbmit.addEventListener("click", () => {
  var value = document.querySelector(".input").value;
  var emapty = document.querySelector(".empaty");
  if (value === "") {
    emapty.innerHTML = "provide input value";
  } else {
    emapty.innerHTML = value;
  }
});
// this is for cout function
// lerning closer in  js //
function output() {
  let count = 0;
  document.querySelector(".increse").addEventListener("click", () => {
    count = count + 1;
    document.querySelector(".zero").innerHTML = count;
    console.log(count);
  });
  document.querySelector(".decrese").addEventListener("click", () => {
    count = count - 1;
    document.querySelector(".zero").innerHTML = count;
    console.log(count);
  });
}
let count = output();

// dome manuplation for calculater //
let btnselact = document.querySelectorAll(".claculeter");
const btnselact2 = Array.from(btnselact);
console.log(btnselact2);

//console.log(btnselact2);
let string = "";
btnselact2.forEach(function (Element) {
  Element.addEventListener("click", (e) => {
    if (e.target.innerHTML == "clear") {
      string = "";
      document.querySelector("#sk").value = string;
      stop;
    } else if (e.target.innerHTML == "=") {
      string = eval(string);
      document.querySelector("#sk").value = string;
    } else {
      string = string + e.target.innerHTML;
      document.querySelector("#sk").value = string;
    }
  });
});
