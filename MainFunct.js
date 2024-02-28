let id = document.querySelector(".wait");
let funct1 = document.querySelector(".button1");

funct1.addEventListener("click", () => {
  setInterval(count, 1000);
  let n = 5;
  function count() {
    if (n > 0) {
      id.innerText = `Wait ${n} seconds`;
      n--;
    } else {
      location.href = "index.html";
      return;
    }
    console.log(n);
  }
});
let funct2 = document.querySelector(".button2");
funct2.addEventListener("click", () => {
  setInterval(count, 1000);
  let n = 5;
  function count() {
    if (n > 0) {
      id.innerText = `Wait ${n} seconds`;
      n--;
    } else {
      location.href = "stopwatch.html";
      return;
    }
    console.log(n);
  }
});
