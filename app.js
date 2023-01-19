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
