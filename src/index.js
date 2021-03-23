import "./styles/main.scss";

var swiper1 = new Swiper(".swiper1", {
  loop: true,
  centeredSlides: true,
  speed: 1500,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".swiper2", {
  loop: false,
  slidesPerView: 2,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    720: {
      slidesPerView: 2,
    },
  },
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper3 = new Swiper(".swiper3", {
  loop: false,
  slidesPerView: 2,
  // Responsive breakpoints
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    520: {
      slidesPerView: 2,
    },
    720: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  },
  spaceBetween: 40,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// Single-Services
const slides = document.querySelector(".slider").children;
const indicator = document.querySelector(".indicator-list").children;
console.log(indicator);

for (let i = 0; i < indicator.length; i++) {
  indicator[i].addEventListener("click", function () {
    for (let j = 0; j < indicator.length; j++) {
      indicator[j].classList.remove("active");
    }

    indicator[i].classList.add("active");

    const id = indicator[i].getAttribute("data-id");
    for (let k = 0; k < slides.length; k++) {
      slides[k].classList.remove("active");
    }

    slides[id].classList.add("active");
  });
}
