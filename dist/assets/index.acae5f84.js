const d=function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const o of e.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&c(o)}).observe(document,{childList:!0,subtree:!0});function i(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerpolicy&&(e.referrerPolicy=t.referrerpolicy),t.crossorigin==="use-credentials"?e.credentials="include":t.crossorigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function c(t){if(t.ep)return;t.ep=!0;const e=i(t);fetch(t.href,e)}};d();const m=[{name:"HTML",value:100,svg:"html5"},{name:"Python",value:100},{name:"TypeScript",value:100},{name:"C++",value:50,svg:"cplusplus"},{name:"Go",value:40},{name:"React",value:80},{name:"ReactNative",value:80,svg:"reactos"},{name:"Flutter",value:40}],a=n=>{n.setAttribute("src",`https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/${n.getAttribute("icon")}.svg`),n.setAttribute("alt",n.getAttribute("icon")),n.setAttribute("align","center"),n.getAttribute("link")&&(n.onclick=()=>window.location.href=n.getAttribute("link"))},f=()=>{document.querySelectorAll("[icon]").forEach(a);const n=document.querySelector(".progress-section");for(const e of m){const o=document.createElement("img"),s=document.createElement("p");o.setAttribute("icon",e.svg?e.svg:e.name.toLowerCase()),o.setAttribute("width","40"),a(o),s.innerText=e.name;const l=document.createElement("div");l.appendChild(o),l.appendChild(s),n.appendChild(l);const u=document.createElement("progress");u.setAttribute("max","100"),u.setAttribute("value",e.value.toString()),n.appendChild(u)}const r=["home","about","projects","contact"];let i=0;document.querySelectorAll("section > .container").forEach((e,o)=>{e.setAttribute("id",r[o])});const c=(e,o=!1)=>{!o&&e===i||(document.querySelector(`[goto="${r[i]}"]`).classList.remove("active"),i=e,document.querySelector(`[goto="${r[i]}"]`).className="active")};document.querySelectorAll("header ul li a").forEach((e,o)=>{e.addEventListener("click",function(){var s;(s=document.getElementById(this.getAttribute("goto")))==null||s.scrollIntoView(),c(o)}),e.setAttribute("goto",r[o]),o===0&&c(0,!0)}),document.querySelectorAll("section > container").forEach((e,o)=>{e.setAttribute("id",r[o])});const t=[];for(const e of r)t.push(document.getElementById(e).offsetTop-230);window.onscroll=function(){const e=document.documentElement.scrollTop;if(e>t[3]){c(3);return}else if(e>t[2]){c(2);return}else if(e>t[1]){c(1);return}else if(e>t[0]){c(0);return}}};document.addEventListener("readystatechange",f);