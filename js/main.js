 // Get the id of the <path> element and the length of <path>
 var path = document.getElementById( "path");
 var length = path.getTotalLength();

 // The start position of the drawing
 path.style.strokeDasharray = length;

 // Hide the draw by offsetting dash. Remove this line to show the triangle before scroll draw
 path.style.strokeDashoffset = length;

 // Find scroll percentage on scroll (using cross-browser properties), and offset dash same amount as percentage scrolled
 window.addEventListener("scroll", myFunction);

 function myFunction() {
   var scrollpercent =
     (document.body.scrollTop + document.documentElement.scrollTop) /
     (document.documentElement.scrollHeight -
       document.documentElement.clientHeight);

   var draw = length * scrollpercent;

   // Reverse the drawing (when scrolling upwards)
   path.style.strokeDashoffset = length - draw;
 }

 const pathL = document.querySelectorAll(".logo-vec path");
for(let i = 0; i < pathL.length; i++ ) {
  // console.log(`Letter ${i} is ${pathL[i].getTotalLength()}`);
}
//  console.log(pathL.getTotalLength());

//animation de la fusée au vue du dessin
const el = document.querySelector('.filled')
const ratio = .2
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}
const handleIntersect = function (entries, observer) {
  entries.forEach(function (entry) {
    // console.log(entry.intersectionRatio)
    // console.log(entry)
    if (entry.intersectionRatio > ratio) {
      el.classList.add('filled-reveal')
      el.classList.remove('filled')
      // console.log("visible")
      observer.unobserve(entry.target)
    } else {
      // console.log("invisible")
    }
  })
}
const observer = new IntersectionObserver(handleIntersect, options)
observer.observe(document.querySelector('.svg-circle'))


//animation text 
function typeEffect(element, speed) {
	var text = element.innerHTML;
	element.innerHTML = "";
	
	var i = 0;
	var timer = setInterval(function() {
    if (i < text.length) {
      element.append(text.charAt(i));
      i++;
    } else {
      clearInterval(timer);
    }
  }, speed);
}


// application
var speed = 100;
var h6 = document.querySelector('h6');
var h5 = document.querySelector('h5');
var delay = h6.innerHTML.length * speed + speed;

// type affect to header
typeEffect(h6, speed);


// type affect to body
setTimeout(function(){
  h5.style.display = "inline-block";
  typeEffect(h5, speed);
}, delay);
