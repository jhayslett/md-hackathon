function clickEvent(e){var s=e.target.nextElementSibling;if(s.classList.contains("show"))s.classList.remove("show");else for(var t=document.getElementsByClassName("collapse-body"),n=0;n<t.length;n++)t[n].classList.contains("show")&&t[n].classList.remove("show"),s.classList.add("show")}document.addEventListener("DOMContentLoaded",function(){for(var e=document.getElementsByClassName("collapse-header"),s=0;s<e.length;s++)e[s].addEventListener("click",clickEvent,!1)});