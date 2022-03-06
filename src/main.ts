import "./styles/root.css";
import "./styles/style.css";
import "./styles/smaller.css";

interface Iskills {
  name: string;
  value: number;
  svg?: string;
}

const skills: Iskills[] = [
  {
    name: "HTML",
    value: 100,
    svg: "html5",
  },
  {
    name: "Python",
    value: 100,
  },
  {
    name: "TypeScript",
    value: 100,
  },
  {
    name: "C++",
    value: 50,
    svg: "cplusplus",
  },
  {
    name: "Go",
    value: 40,
  },
  {
    name: "React",
    value: 80,
  },
  {
    name: "ReactNative",
    value: 80,
    svg: "reactos",
  },
  {
    name: "Flutter",
    value: 40,
  },
];

const createIcon = (e: Element) => {
  e.setAttribute(
    "src",
    `https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${e
      .getAttribute("icon")
      ?.toLowerCase()}.svg`
  );
  e.setAttribute("alt", e.getAttribute("icon")!);
  e.setAttribute("align", "center");
  if (e.getAttribute("link")) {
    (e as HTMLElement).onclick = () =>
      window.open(e.getAttribute("link")!, "_blank");
  }
};

const init = () => {
  document.querySelectorAll("[icon]").forEach(createIcon);

  const progressSection = document.querySelector(".progress-section")!;

  for (const skill of skills) {
    const img = document.createElement("img");
    const p = document.createElement("p");
    img.setAttribute("icon", skill.svg ? skill.svg : skill.name.toLowerCase());
    img.setAttribute("width", "40");
    createIcon(img);
    p.innerText = skill.name;
    const div = document.createElement("div");
    div.appendChild(img);
    div.appendChild(p);
    progressSection.appendChild(div);
    const progressbar = document.createElement("progress");
    progressbar.setAttribute("max", "100");
    progressbar.setAttribute("value", skill.value.toString());
    progressSection.appendChild(progressbar);
  }

  const link_ids = ["home", "about", "blog", "projects", "contact"];

  let active = 0;

  document.querySelectorAll("section > .container").forEach((e, idx) => {
    e.setAttribute("id", link_ids[idx]);
  });

  const selectSection = (current: number, firstTime = false) => {
    if (!firstTime && current === active) {
      return;
    }
    document
      .querySelector(`[goto="${link_ids[active]}"]`)!
      .classList.remove("active");
    active = current;
    document.querySelector(`[goto="${link_ids[active]}"]`)!.className =
      "active";
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

  window.onscroll = function () {
    const p = document.documentElement.scrollTop;
    if (p > places[4]) {
      selectSection(4);
      return;
    } else if (p > places[3]) {
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
};

document.addEventListener("readystatechange", init);
