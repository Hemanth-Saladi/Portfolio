// JavaScript for the scrolling effect
let slideIndex = 0;
const projectCards = document.getElementsByClassName("project-card");

function showSlides() {
  for (let i = 0; i < projectCards.length; i++) {
    projectCards[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > projectCards.length) {
    slideIndex = 1;
  }
  projectCards[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 3000); // Change slide every 30 seconds
}

showSlides();

// JavaScript for adding color around the mouse pointer on header name hover
function addColor(event) {
  event.target.style.color = "blue"; // Change the color on hover
}

function removeColor() {
  document.querySelector(".header-name h1").style.color = ""; // Remove color when mouse leaves
}
