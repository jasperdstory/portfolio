window.addEventListener("load", function(event) {
console.log("backtop loaded")
var clickbutton = document.getElementById("scrolltop")
clickbutton.addEventListener('click', function(){
  window.scrollTo(0, 0);  
})

})