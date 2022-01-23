import "./styles/root.css";
import "./styles/style.css";
import "./styles/smaller.css";

const link_ids = ["home", "about", "projects", "contact"];

let active = 0;

document.querySelectorAll("section > .container").forEach((e, idx) => {
  e.setAttribute("id", link_ids[idx]);
});

const selectSection = (thisis: HTMLElement, current: number) => {
  if (current === active) {
    return;
  }
  active = current;
  for (const other of thisis.parentElement?.parentElement?.querySelectorAll(
    "a"
  )!) {
    other.classList.remove("active");
  }
  thisis.className = "active";
};

document.querySelectorAll<HTMLElement>("header ul li a").forEach((e, idx) => {
  e.addEventListener("click", function () {
    selectSection(this, idx);
    document.getElementById(this.getAttribute("goto")!)?.scrollIntoView();
  });
  e.setAttribute("goto", link_ids[idx]);
});

document.querySelectorAll("section > container").forEach((e, idx) => {
  e.setAttribute("id", link_ids[idx]);
});

const places: number[] = [];

for (const i of link_ids.reverse()) {
  places.push(document.getElementById(i)!.offsetTop - 230);
}

console.log(places);

window.onscroll = function () {
  const p = document.documentElement.scrollTop;

  if (p > places[0])
    selectSection(document.querySelector('[goto="contact"]')!, 3);
  else if (p > places[1])
    selectSection(document.querySelector('[goto="projects"]')!, 2);
  else if (p > places[2])
    selectSection(document.querySelector('[goto="about"]')!, 1);
  else if (p > places[3])
    selectSection(document.querySelector('[goto="home"]')!, 0);
};
