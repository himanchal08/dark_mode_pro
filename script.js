const btn = document.querySelector("#checkbox");
const back = document.querySelector("body");
const ball = document.querySelector(".toggle_ball");
const label = document.querySelector(".toggle_label");
const save = localStorage.getItem("theme");


btn.addEventListener("click", () => {
    
  if (back.classList.contains("dark_mode")) {
    back.classList.remove("dark_mode");
    back.classList.add("light_mode");
    label.classList.remove("light_mode");
    ball.classList.add("light_mode");
    label.classList.add("dark_mode");
    
  } else {
    back.classList.remove("light_mode");
    back.classList.add("dark_mode");
    ball.classList.add("dark_mode");
    label.classList.add("light_mode");
    
  }
});
