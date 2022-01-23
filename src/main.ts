import "./styles/root.css";
import "./styles/style.css";
import "./styles/smaller.css";

const link_ids = ["home", "about", "projects", "contact"];

let active = 0;

document.querySelectorAll("section > .container").forEach((e, idx) => {
  e.setAttribute("id", link_ids[idx]);
});

const selectSection = (current: number, firstTime = false) => {
  if (!firstTime && current === active) {
    return;
  }
  console.log("need", current);
  document
    .querySelector(`[goto="${link_ids[active]}"]`)!
    .classList.remove("active");
  active = current;
  document.querySelector(`[goto="${link_ids[active]}"]`)!.className = "active";
};

document.querySelectorAll<HTMLElement>("header ul li a").forEach((e, idx) => {
  e.addEventListener("click", function () {
    document.getElementById(this.getAttribute("goto")!)?.scrollIntoView();
    selectSection(idx);
  });
  e.setAttribute("goto", link_ids[idx]);
  if (idx === 0) selectSection(0, true); // default tab
});

document.querySelectorAll("section > container").forEach((e, idx) => {
  e.setAttribute("id", link_ids[idx]);
});

const places: number[] = [];

for (const i of link_ids) {
  places.push(document.getElementById(i)!.offsetTop - 230);
}

console.log(places);

window.onscroll = function () {
  const p = document.documentElement.scrollTop;

  if (p > places[3]) {
    selectSection(3);
    return;
  } else if (p > places[2]) {
    selectSection(2);
    return;
  } else if (p > places[1]) {
    selectSection(1);
    return;
  } else if (p > places[0]) {
    selectSection(0);
    return;
  }
};
