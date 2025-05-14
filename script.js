// Initialize Feather icons
document.addEventListener('DOMContentLoaded', () => {
  feather.replace();
});

// Goto Top Button
const mybutton = document.getElementById("myBtn");

// Show or hide button based on scroll position
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.documentElement.scrollTop > 500) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// Smooth scroll to top when the button is clicked
mybutton.addEventListener("click", function() {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
