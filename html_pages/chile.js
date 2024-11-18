const circle = document.querySelector(".circle");

window.addEventListener("scroll", () => {
  // Get the vertical scroll position of the page
  const scrollY = window.scrollY;

  // Move the circle down based on the scroll position
  circle.style.transform = `translateY(${scrollY * 0.6}px)`; // Adjust the scale (0.1) for smooth movement
});

const circle2 = document.querySelector(".circle2");

window.addEventListener("scroll", () => {
  // Get the vertical scroll position of the page
  const scrollY2 = window.scrollY;

  // Move the circle down based on the scroll position
  circle2.style.transform = `translateY(${scrollY2 * -0.6}px)`; // Adjust the scale (0.1) for smooth movement
});
