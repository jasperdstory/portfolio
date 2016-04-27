window.addEventListener("load",function(event){console.log("js loaded")
var x=document.getElementById("page-verify")
var y=document.getElementById("desktop-navbar-container")
var z=document.getElementById("mobile-navbar-container")
if(x.classList.contains("index")){y.classList.add("index-nav")
z.classList.add("index-nav")
console.log("on index page!")}
else if(x.classList.contains("things")){y.classList.add("things-nav")
z.classList.add("things-nav")
console.log("on things page!")}
else if(x.classList.contains("news")){y.classList.add("news-nav")
z.classList.add("news-nav")
console.log("on news page!")}
else if(x.classList.contains("dashboards")){y.classList.add("dashboards-nav")
z.classList.add("dashboards-nav")
console.log("on dashboards page!")}
else if(x.classList.contains("journeys")){y.classList.add("journeys-nav")
z.classList.add("journeys-nav")
console.log("on journeys page!")}
else if(x.classList.contains("googleapps")){y.classList.add("googleapps-nav")
z.classList.add("googleapps-nav")
console.log("on google apps page!")}
else{}
document.getElementById("mobile-navbar-nav-open").addEventListener("click",function(){console.log("open clicked")
var d=document.getElementById("mobile-navbar-container");if(d.classList.contains("navbar-close")){d.classList.add("navbar-open");d.classList.remove("navbar-close");}
else{d.classList.remove("navbar-open");d.classList.add("navbar-close");}
var e=document.getElementById("hamburger");if(e.classList.contains("hamburger-open")){e.classList.remove("hamburger-open");}
else{e.classList.add("hamburger-open");}
var f=document.getElementById("case-global");if(f.classList.contains("case-global-hide")){f.classList.add("case-global-show");f.classList.remove("case-global-hide");}
else{f.classList.add("case-global-hide");f.classList.remove("case-global-show");}
});var myFunction2=function(){var d=document.getElementById("mobile-navbar-container");d.classList.remove("navbar-open");d.classList.add("navbar-close");var e=document.getElementById("hamburger");e.classList.remove("hamburger-open");};});window.addEventListener("load",function(event){console.log("case nav js loaded")
window.onscroll=function(){StickyHead()};function StickyHead(){var currentscroll=window.pageYOffset||document.documentElement.scrollTop
var n=document.getElementById("desktop-case-navbar-container");var v=document.getElementById("mobile-case-navbar-container");if(currentscroll>830){n.classList.add("desktop-case-navbar-stick");}
else{n.classList.remove("desktop-case-navbar-stick");}
if(currentscroll>990&&!v.classList.contains("mobile-case-navbar-stick")){v.classList.add("mobile-case-navbar-stick");console.log("MOBILE STICK ADDED")}
else if(currentscroll<990&&v.classList.contains("mobile-case-navbar-stick")){v.classList.remove("mobile-case-navbar-stick");console.log("MOBILE STICK REMOVED")}}})