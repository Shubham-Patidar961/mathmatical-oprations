/* code for navigation bar */
const navigation = document.querySelector(".navigation");
const navigation2 = document.querySelector(".navigation2");
let greeting = document.querySelector(".greeting");
function datetime() {
  let date = new Date().toLocaleDateString();
  let time = new Date().toLocaleTimeString();
  let hour = new Date().getHours();
  navigation.innerHTML = date;
  navigation2.innerHTML = time;
  if (hour >= 1 && hour <= 11) {
    greeting.innerHTML = "Good morning";
    greeting.style.color = "pink";
  } else if (hour > 11 && hour < 19) {
    greeting.innerHTML = "Good afternoon";
    greeting.style.color = "green";
  } else {
    greeting.innerHTML = "Good night";
    greeting.style.color = "blue";
  }
}
datetime();
/*end of navigation code */
const first = document.querySelector(".f-1");
const secound = document.querySelector(".s-2");
// this function  is for first box //
setTimeout(function () {
  first.innerHTML = "hello dear, we  welcome you to our site ";
}, 4000);

// this function is for secound box //
function check() {
  let number = Number(prompt());
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
// dynamically set time to our website //
setnewtime = () => {
  let time = new Date().toLocaleTimeString();
  document.querySelector(".time").innerHTML = time;
};
setInterval(setnewtime, 1000);

// login form
const submit2 = document.querySelector(".submit2");
let arry = [];
submit2.addEventListener("click", (event) => {
  event.preventDefault();
  let name = document.querySelector(".name").value;
  let lastname = document.querySelector(".lastname").value;
  arry.push({ name, lastname });
  console.log(arry);
  event.target.value = "";
  document.querySelector(".form").reset();
});
// joke genrating with a rapid api //
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "052fcea657msh14847c4fae27ef1p152ddejsn57579096b9f8",
    "X-RapidAPI-Host": "jokes-by-api-ninjas.p.rapidapi.com",
  },
};

const joke = () => {
  fetch("https://jokes-by-api-ninjas.p.rapidapi.com/v1/jokes", options)
    .then((response) => response.json())
    .then((data) => {
      let joke = document.querySelector(".joke");
      joke.innerHTML = data[0].joke;
    })
    .catch((err) => console.error(err));
};
const btn = document.querySelector(".joke1");
btn.addEventListener("click", joke);
let joke3 = document.querySelector("#joke3");
joke3.innerHTML = " Your joke is get lode when you click ";
