// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Form submission
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  // Perform form submission logic here
  // For example, send the form data to a server using AJAX
});
