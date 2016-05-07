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
});var myFunction2=function(){var d=document.getElementById("mobile-navbar-container");d.classList.remove("navbar-open");d.classList.add("navbar-close");var e=document.getElementById("hamburger");e.classList.remove("hamburger-open");};});window.addEventListener("load",function(event){console.log("menu js loaded")
carousel=(function(){var contain=document.querySelector('.carousel-contain');var box=document.querySelector('.carouselbox');var next=contain.querySelector('.next');var prev=contain.querySelector('.prev');var items=box.querySelectorAll('.content li');var counter=0;var amount=items.length;var current=items[0];box.classList.add('active');function navigate(direction){current.classList.remove('current');counter=counter+direction;if(direction===-1&&counter<0){counter=amount-1;}
if(direction===1&&!items[counter]){counter=0;}
current=items[counter];current.classList.add('current');}
next.addEventListener('click',function(ev){navigate(1);});prev.addEventListener('click',function(ev){navigate(-1);});navigate(0);})();})
window.addEventListener("load",function(event){console.log("backtop loaded")
var clickbutton=document.getElementById("scrolltop")
clickbutton.addEventListener('click',function(){window.scrollTo(0,0);})})
window.addEventListener("load",function(event){console.log("case nav js loaded")
window.onscroll=function(){StickyHead()};function StickyHead(){var currentscroll=window.pageYOffset||document.documentElement.scrollTop
var n=document.getElementById("desktop-case-navbar-container");var v=document.getElementById("mobile-case-navbar-container");if(currentscroll>830){n.classList.add("desktop-case-navbar-stick");}
else{n.classList.remove("desktop-case-navbar-stick");}
if(currentscroll>990&&!v.classList.contains("mobile-case-navbar-stick")){v.classList.add("mobile-case-navbar-stick");console.log("MOBILE STICK ADDED")}
else if(currentscroll<990&&v.classList.contains("mobile-case-navbar-stick")){v.classList.remove("mobile-case-navbar-stick");console.log("MOBILE STICK REMOVED")}}})
window.addEventListener("load",function(event){console.log("journeyloaded");!function(a){var b="object"==typeof self&&self.self===self&&self||"object"==typeof global&&global.global===global&&global;"function"==typeof define&&define.amd?define(["exports"],function(c){b.ParticleNetwork=a(b,c)}):"object"==typeof module&&module.exports?module.exports=a(b,{}):b.ParticleNetwork=a(b,{})}(function(a,b){var c=function(a){this.canvas=a.canvas,this.g=a.g,this.particleColor=a.options.particleColor,this.x=Math.random()*this.canvas.width,this.y=Math.random()*this.canvas.height,this.velocity={x:(Math.random()-.5)*a.options.velocity,y:(Math.random()-.5)*a.options.velocity}};return c.prototype.update=function(){(this.x>this.canvas.width+20||this.x<-20)&&(this.velocity.x=-this.velocity.x),(this.y>this.canvas.height+20||this.y<-20)&&(this.velocity.y=-this.velocity.y),this.x+=this.velocity.x,this.y+=this.velocity.y},c.prototype.h=function(){this.g.beginPath(),this.g.fillStyle=this.particleColor,this.g.globalAlpha=.7,this.g.arc(this.x,this.y,1.5,0,2*Math.PI),this.g.fill()},b=function(a,b){this.i=a,this.i.size={width:this.i.offsetWidth,height:this.i.offsetHeight},b=void 0!==b?b:{},this.options={particleColor:void 0!==b.particleColor?b.particleColor:"#fff",background:void 0!==b.background?b.background:"#1a252f",interactive:void 0!==b.interactive?b.interactive:!0,velocity:this.setVelocity(b.speed),density:this.j(b.density)},this.init()},b.prototype.init=function(){if(this.k=document.createElement("div"),this.i.appendChild(this.k),this.l(this.k,{position:"absolute",top:0,left:0,bottom:0,right:0,"z-index":1}),/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.background))this.l(this.k,{background:this.options.background});else{if(!/\.(gif|jpg|jpeg|tiff|png)$/i.test(this.options.background))return console.error("Please specify a valid background image or hexadecimal color"),!1;this.l(this.k,{background:'url("'+this.options.background+'") no-repeat center',"background-size":"cover"})}if(!/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(this.options.particleColor))return console.error("Please specify a valid particleColor hexadecimal color"),!1;this.canvas=document.createElement("canvas"),this.i.appendChild(this.canvas),this.g=this.canvas.getContext("2d"),this.canvas.width=this.i.size.width,this.canvas.height=this.i.size.height,this.l(this.i,{position:"relative"}),this.l(this.canvas,{"z-index":"20",position:"relative"}),window.addEventListener("resize",function(){return this.i.offsetWidth===this.i.size.width&&this.i.offsetHeight===this.i.size.height?!1:(this.canvas.width=this.i.size.width=this.i.offsetWidth,this.canvas.height=this.i.size.height=this.i.offsetHeight,clearTimeout(this.m),void(this.m=setTimeout(function(){this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&this.o.push(this.p),requestAnimationFrame(this.update.bind(this))}.bind(this),500)))}.bind(this)),this.o=[];for(var a=0;a<this.canvas.width*this.canvas.height/this.options.density;a++)this.o.push(new c(this));this.options.interactive&&(this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p),this.canvas.addEventListener("mousemove",function(a){this.p.x=a.clientX-this.canvas.offsetLeft,this.p.y=a.clientY-this.canvas.offsetTop}.bind(this)),this.canvas.addEventListener("mouseup",function(a){this.p.velocity={x:(Math.random()-.5)*this.options.velocity,y:(Math.random()-.5)*this.options.velocity},this.p=new c(this),this.p.velocity={x:0,y:0},this.o.push(this.p)}.bind(this))),requestAnimationFrame(this.update.bind(this))},b.prototype.update=function(){this.g.clearRect(0,0,this.canvas.width,this.canvas.height),this.g.globalAlpha=1;for(var a=0;a<this.o.length;a++){this.o[a].update(),this.o[a].h();for(var b=this.o.length-1;b>a;b--){var c=Math.sqrt(Math.pow(this.o[a].x-this.o[b].x,2)+Math.pow(this.o[a].y-this.o[b].y,2));c>120||(this.g.beginPath(),this.g.strokeStyle=this.options.particleColor,this.g.globalAlpha=(120-c)/120,this.g.lineWidth=.7,this.g.moveTo(this.o[a].x,this.o[a].y),this.g.lineTo(this.o[b].x,this.o[b].y),this.g.stroke())}}0!==this.options.velocity&&requestAnimationFrame(this.update.bind(this))},b.prototype.setVelocity=function(a){return"fast"===a?1:"slow"===a?.33:"none"===a?0:.66},b.prototype.j=function(a){return"high"===a?5e3:"low"===a?2e4:isNaN(parseInt(a,10))?1e4:a},b.prototype.l=function(a,b){for(var c in b)a.style[c]=b[c]},b});var canvasDiv=document.getElementById('particle-canvas');var options={particleColor:'#888',background:'#272C34',interactive:true,speed:'low',density:'medium'};var particleCanvas=new ParticleNetwork(canvasDiv,options);})