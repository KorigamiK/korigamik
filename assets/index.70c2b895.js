const d=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&l(u)}).observe(document,{childList:!0,subtree:!0});function n(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerpolicy&&(r.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?r.credentials="include":t.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(t){if(t.ep)return;t.ep=!0;const r=n(t);fetch(t.href,r)}};d();const s=["home","about","projects","contact"];let a=0;document.querySelectorAll("section > .container").forEach((e,o)=>{e.setAttribute("id",s[o])});const i=(e,o)=>{var n,l;if(o!==a){a=o;for(const t of(l=(n=e.parentElement)==null?void 0:n.parentElement)==null?void 0:l.querySelectorAll("a"))t.classList.remove("active");e.className="active"}};document.querySelectorAll("header ul li a").forEach((e,o)=>{e.addEventListener("click",function(){var n;i(this,o),(n=document.getElementById(this.getAttribute("goto")))==null||n.scrollIntoView()}),e.setAttribute("goto",s[o])});document.querySelectorAll("section > container").forEach((e,o)=>{e.setAttribute("id",s[o])});const c=[];for(const e of s.reverse())c.push(document.getElementById(e).offsetTop-230);console.log(c);window.onscroll=function(){const e=document.documentElement.scrollTop;e>c[0]?i(document.querySelector('[goto="contact"]'),3):e>c[1]?i(document.querySelector('[goto="projects"]'),2):e>c[2]?i(document.querySelector('[goto="about"]'),1):e>c[3]&&i(document.querySelector('[goto="home"]'),0)};