import "./styles/root.css";
import "./styles/style.css";

document.querySelectorAll<HTMLElement>("header ul li a").forEach((e) => {
  e.addEventListener("click", function () {
    for (const other of this.parentElement?.parentElement?.querySelectorAll(
      "a"
    )!) {
      other.classList.remove("active");
    }
    this.className = "active";
  });
});
