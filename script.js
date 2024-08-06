const btn = document.querySelector("#checkbox");
const darkMode = document.querySelector(".dark-mode");
const save = localStorage.getItem("theme");

if (save === "dark") {
  btn.checked = true;
  darkMode.classList.add("active");
} else {
  btn.checked = false;
  darkMode.classList.remove("active");
}

btn.addEventListener("change", () => {
  if (btn.checked) {
    darkMode.classList.add("active");
    localStorage.setItem("theme", "dark");
  } else {
    darkMode.classList.remove("active");
    localStorage.setItem("theme", "light");
  }
});
