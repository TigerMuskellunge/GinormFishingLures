var slideSlides = 0;
showSlides();

function showSlides() {
  var i;
  var slides =
  document.getElementsByClassName("mySlides");
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}

slides[slideIndex-1].style.display = "block";
setTimeout(showSlides, 2000);
