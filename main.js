const sliderContainer = document.querySelector(".hero-section");
const nextSlideBtn = document.querySelector(".next-slide");
const prevSlideBtn = document.querySelector(".prev-slide");

const images = [
  {
    imgPath: "../images/slider_images/1.png",
  },
  {
    imgPath: "../images/slider_images/2.png",
  },
  {
    imgPath: "../images/slider_images/3.png",
  },
  {
    imgPath: "../images/slider_images/4.gif",
  },
  {
    imgPath: "../images/slider_images/5.png",
  },
];
 

function displaySlide() {
  sliderContainer.innerHTML = images
    .map(
      (slide) =>
        `<div class="slide"><img src=${slide.imgPath} alt="" class="slide-image" /></div>`
    )
    .join("");
}

displaySlide();

const slides = document.querySelectorAll(".slide");

let currentImage = 0;
function changeSlide(currentImage) {
  slides.forEach((slide, index) => {
    slide.style.transform = `translate(${100 * (index - currentImage)}%)`;
  });
}

changeSlide(currentImage);

nextSlideBtn.addEventListener("click", () => {
  currentImage++;
  if (currentImage > images.length - 1) {
    currentImage = 0;
  }
  changeSlide(currentImage);
});

prevSlideBtn.addEventListener("click", () => {
  currentImage--;
  if (currentImage < 0) {
    currentImage = images.length - 1;
  }
  changeSlide(currentImage);
});

setInterval(() => {
  if (currentImage < images.length-1) {
    currentImage++;
    changeSlide(currentImage);
} else {
    currentImage = 0;
    changeSlide(currentImage);
  }
}, 5000);
