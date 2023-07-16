// let display = document.getElementById("main");
let string = "";

let buttons = document.querySelectorAll(".button");

Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target);

    if (e.target.innerHTML == "=") {
      string = eval(string);
      
      console.log(string, "2")
      document.querySelector("input").value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector("input").value = string;
    }
  });
});
