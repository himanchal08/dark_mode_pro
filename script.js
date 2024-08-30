const btn = document.querySelector("#checkbox");
const darkMode = document.querySelector(".dark-mode");
const search = document.querySelector(".bar");
const enter = document.querySelector("#coco");
const save = localStorage.getItem("theme");

if (save === "dark") {
  btn.checked = true;
  darkMode.classList.add("active");
  for (var i = 0; i < total; i++) {
    Tweens[i].style.visibility = "visible";
  }
} else {
  btn.checked = false;
  darkMode.classList.remove("active");
  for (var i = 0; i < total; i++) {
    Tweens[i].style.visibility = "hidden";
  }
}

btn.addEventListener("change", () => {
  if (btn.checked) {
    darkMode.classList.add("active");
    localStorage.setItem("theme", "dark");
    for (var i = 0; i < total; i++) {
      Tweens[i].style.visibility = "visible";
    }
    localStorage.setItem("fireflies", "visible");
  } else {
    darkMode.classList.remove("active");
    localStorage.setItem("theme", "light");
    for (var i = 0; i < total; i++) {
      Tweens[i].style.visibility = "hidden";
    }
    localStorage.setItem("fireflies", "hidden");
  }
});

var total = 69,
  container = document.querySelector("body"),
  w = window.innerWidth,
  h = window.innerHeight,
  Tweens = [],
  SPs = 1;

for (var i = total; i--; ) {
  var Div = document.createElement("div");
  TweenLite.set(Div, { attr: { class: "dot" }, x: R(w), y: R(h), opacity: 0 });
  container.appendChild(Div);
  Anim(Div);
  Tweens.push(Div);
}

function Anim(elm) {
  elm.Tween = TweenLite.to(elm, R(20) + 10, {
    bezier: {
      values: [
        { x: R(w), y: R(h) },
        { x: R(w), y: R(h) },
      ],
    },
    opacity: R(1),
    scale: R(1) + 0.5,
    delay: R(2),
    onComplete: Anim,
    onCompleteParams: [elm],
  });
}

for (var i = total; i--; ) {
  Tweens[i].Tween.play();
}

window.addEventListener("resize", resize);

function R(max) {
  return Math.random() * max;
}

function resize() {
  w = window.innerWidth;
  h = window.innerHeight;

  for (var i = 0; i < total; i++) {
    var fireFly = Tweens[i];

    TweenLite.killTweensOf(fireFly);

    Anim(fireFly);
  }
}

search.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    let url = "https://www.google.com/search?q=" + search.value;
    window.open(url, "_self");
  } else {
    enter.addEventListener("click", () => {
      let url = "https://www.google.com/search?q=" + search.value;
      window.open(url, "_self");
    });
  }
});
