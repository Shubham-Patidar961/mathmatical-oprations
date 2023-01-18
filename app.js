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
