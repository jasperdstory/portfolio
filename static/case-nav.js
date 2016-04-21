window.addEventListener("load", function(event) {
console.log("case nav js loaded")

window.onscroll = function() {StickyHead()};
  function StickyHead() {
    var currentscroll = window.pageYOffset || document.documentElement.scrollTop
    console.log(currentscroll)
    var n = document.getElementById("desktop-case-navbar-container");
    if(currentscroll > 630){
      n.classList.add("desktop-case-navbar-stick");
    }
    else {
      n.classList.remove("desktop-case-navbar-stick");
    }
}



  
  // var currentlocation = window.location.pathname 
  // console.log(currentlocation)
  // var f = document.getElementById("desktop-navbar-container")
  // if currentlocation == "/news" {
  //   f.classList.add("desktop-navbar-container-news");  
  // }
  // else {
  //   f.classList.remove("desktop-navbar-container-news");
  // }


// CURRENT SECTION FINDER

  // SET Y POSITION VARIABLE FOR EACH ELEMENT

  // this is the height of toolbar to appear more accurate
  // var hy = 75
  var start = document.getElementById('start').offsetTop
  var things = document.getElementById('things').offsetTop
  var news = document.getElementById('news').offsetTop
  var dashboards = document.getElementById('dashboards').offsetTop
  var journeys = document.getElementById('journeys').offsetTop
  var googleapps = document.getElementById('googleapps').offsetTop
  var currentsection = "start"

  // console.log(start)
  // console.log(things)
  // console.log(news)
  // console.log(dashboards)
  // console.log(journeys)
  // console.log(googleapps)

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

    // console.log(currentscroll)

    // console.log(currentsection)

    document.getElementById('currentsection').innerHTML = currentsection;

    var classname = document.getElementsByClassName("desktop-navbar-item");

      for (var i = 0; i < classname.length; i++) {

      var test = currentsection
      var innerString=classname[i].innerHTML

    if(innerString.indexOf(test) != -1){
      // console.log("found it desktop")
      classname[i].classList.add("desktop-navbar-item-bold");
    }
    else{
      if(classname[i].classList.contains("desktop-navbar-item-bold")){
        classname[i].classList.remove("desktop-navbar-item-bold");
      }
  
    }

}

  }

var classname = document.getElementsByClassName("mobile-navbar-dropdown-item");

// OPEN NAV
document.getElementById("mobile-navbar-nav-open").addEventListener("click", function() {
  var d = document.getElementById("mobile-navbar-container");
  if(d.classList.contains("navbar-close")){
    d.classList.add("navbar-open");  
    d.classList.remove("navbar-close");
  }
  else{
   d.classList.remove("navbar-open"); 
   d.classList.add("navbar-close");  
  }
  var e = document.getElementById("hamburger");
  if(e.classList.contains("hamburger-open")){ 
    e.classList.remove("hamburger-open");
  }
  else{
   e.classList.add("hamburger-open");  
  }
  

// SETTING TO BOLD
  document.getElementById('currentsection').innerHTML = currentsection;

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
// document.getElementById("mobile-navbar-nav-close").addEventListener("click", function() {
//   console.log("you clicked it");
//   var d = document.getElementById("mobile-navbar-container");
//   d.classList.remove("navbar-open");
//   d.classList.add("navbar-close");
// });

// CLICK LINK
var myFunction2 = function() {
  var d = document.getElementById("mobile-navbar-container");
  d.classList.remove("navbar-open");
  d.classList.add("navbar-close");
  var e = document.getElementById("hamburger");
  e.classList.remove("hamburger-open");
};

for (var i = 0; i < classname.length; i++) {
    classname[i].addEventListener('click', myFunction2, false);
}

// ADD BOLD TO NAV LINKS



});



// window.onscroll = function() {myFunction3()};
//   function myFunction3() {
//   var scrolly = window.pageYOffset || document.documentElement.scrollTop
//   var f = document.getElementById("mobile-navbar-header-border");
//   if (scrolly > 10){
//       console.log("scrolledpast50")
//       f.classList.add("fade-border");  
//     }
//   else {
//       f.classList.remove("fade-border");  
//   }
// }

// // HAMBURGER TEST
// document.getElementById("hamburger").addEventListener("click", function() {
//   console.log("hamburger-clicked")
//   var e = document.getElementById("hamburger")
//   e.classList.add("hamburger-open");
//   console.log("class-added")
// })
