
var myIndex = 1;
carousel(myIndex);

function plusSlides(n) {
  carousel(myIndex += n);
}

function currentSlide(n) {
  carousel(myIndex = n);
}

function carousel(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > x.length) {myIndex = 1}    
  if (n < 1) {myIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  dots[myIndex-1].className += " active";
}