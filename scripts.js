document.addEventListener("DOMContentLoaded", () => {
    const burger = document.querySelector(".burger");
    const navLinks = document.querySelector(".meniuske");
  
    burger.addEventListener("click", () => {
        navLinks.classList.toggle("active");
    });
  
    document.querySelectorAll(".meniuske a").forEach((link) => {
      link.addEventListener("click", () => {
        navLinks.classList.remove("active");
      });
    });
  });
  