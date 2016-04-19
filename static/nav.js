document.addEventListener("DOMContentLoaded", function(event) {
console.log("js loaded")

// CURRENT SECTION FINDER

  // SET Y POSITION VARIABLE FOR EACH ELEMENT

  // this is the height of toolbar to appear more accurate
  var hy = 75
  var start = document.getElementById('start').offsetTop - hy
  var things = document.getElementById('things').offsetTop - hy
  var news = document.getElementById('news').offsetTop - hy 
  var dashboards = document.getElementById('dashboards').offsetTop - hy
  var journeys = document.getElementById('journeys').offsetTop - hy
  var googleapps = document.getElementById('googleapps').offsetTop - hy
  var currentsection = "start"

  // CURRENT SCROLL POSITION
  myFunction();
  window.onscroll = function() {myFunction()};
  function myFunction() {
    var currentscroll = window.pageYOffset || document.documentElement.scrollTop
    if (currentscroll > -500  && currentscroll < things) { 
       currentsection = "start"
    }
    else if (currentscroll >= things && currentscroll < news) {
      currentsection = "6things"
    }
    else if (currentscroll >= news && currentscroll < dashboards) {
       currentsection = "news"
    }
    else if (currentscroll >= dashboards && currentscroll < journeys) {
       currentsection = "dashboards"
    }
    else if (currentscroll >= journeys && currentscroll < googleapps) {
       currentsection = "journeys"
    }
    else if (currentscroll >= googleapps ) {
       currentsection = "googleapps"
    }
    else {
       currentsection = "unknown"
    }
    
    document.getElementById('currentsection').innerHTML = currentsection;

  }

var classname = document.getElementsByClassName("mobile-navbar-dropdown-item");

// // HAMBURGER TEST
// document.getElementById("hamburger").addEventListener("click", function() {
//   console.log("hamburger-clicked")
//   var e = document.getElementById("hamburger")
//   e.classList.add("hamburger-open");
//   console.log("class-added")
// })

// OPEN NAV
document.getElementById("mobile-navbar-nav-open").addEventListener("click", function() {
  var d = document.getElementById("mobile-navbar-dropdown");
  d.classList.remove("navbar-close");
  d.classList.add("navbar-open");

// SETTING TO BOLD
  document.getElementById('currentsection-nav').innerHTML = currentsection;

  for (var i = 0; i < classname.length; i++) {

  var test = currentsection
  var innerString=classname[i].innerHTML

    if(innerString.indexOf(test) != -1){
      console.log("found it")
      classname[i].classList.add("navbar-dropdown-item-bold");
    }
    else{
      if(classname[i].classList.contains("navbar-dropdown-item-bold")){
        classname[i].classList.remove("navbar-dropdown-item-bold");
      }
  
    }

}

});

// CLOSE NAV
document.getElementById("mobile-navbar-nav-close").addEventListener("click", function() {
  console.log("you clicked it");
  var d = document.getElementById("mobile-navbar-dropdown");
  d.classList.remove("navbar-open");
  d.classList.add("navbar-close");
});

// CLICK LINK
var myFunction2 = function() {
  var d = document.getElementById("mobile-navbar-dropdown");
  d.classList.remove("navbar-open");
  d.classList.add("navbar-close");
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction2, false);
}

// ADD BOLD TO NAV LINKS



});
