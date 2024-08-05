const btn = document.querySelector("#checkbox");
const back = document.querySelector("body");
const ball = document.querySelector(".toggle_ball");
const label = document.querySelector(".toggle_label");
const save = localStorage.getItem("theme");
const darkMode = document.querySelector(".dark-mode")



btn.addEventListener("click", () => {
    darkMode.classList.toggle('active');
    

});
