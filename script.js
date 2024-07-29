document.addEventListener("DOMContentLoaded", function () {
  let nav = document.getElementById("navigationBar");
  let hNav = document.getElementById("hNav");
  const scrollPosition = 90;
  function handleScroll() {
    if (this.window.scrollY > scrollPosition) {
      nav.classList.add("navBarScrolled");
      hNav.classList.add("txt-shadow-white");
    } else {
      nav.classList.remove("navBarScrolled");
      hNav.classList.remove("txt-shadow-white");
      
    }
  }

  window.addEventListener("scroll", handleScroll);

  let humbergerBut = document.getElementById("humbergerBut");
  let crossBut = document.getElementById("crossBut");
  let navMenuScreen = document.getElementById("navMenuScreen");
  let navMenu = document.querySelector(".navMenu");
  let liNavMenu = navMenu.querySelectorAll("li");

  humbergerBut.addEventListener("click", function () {
    navMenuScreen.style.display = "flex";
  });

  crossBut.addEventListener("click", function () {
    navMenuScreen.style.display = "none";
  });

  liNavMenu.forEach((item) => {
    item.addEventListener("click", function () {
      navMenuScreen.style.display = "none";
    });
  });

  const slides = document.querySelectorAll(".card");
  let slideIndex = 0;
  let intervalId = null;

  function initializeSlider() {
    if (slides.length > 0) {
      slides[slideIndex].classList.add("displaySlide");
      intervalId = setInterval(nextSlide, 2000);
    }
  }
  initializeSlider();

  function showSlide(index) {
    if (index >= slides.length) {
      slideIndex = 0;
    } else if (index < 0) {
      slideIndex = slides.length - 1;
    }
    slides.forEach((slide) => {
      slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
  }

  function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
  }

  const questions = document.querySelectorAll('.question');

  questions.forEach(question => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });

});
