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
  if (currentImage < images.length - 1) {
    currentImage++;
    changeSlide(currentImage);
  } else {
    currentImage = 0;
    changeSlide(currentImage);
  }
}, 5000);

//product js
const tabsSections = document.querySelector(".tabs-sections");
const filterButtons = document.querySelectorAll(".tab-btn");

tabsSections.addEventListener("click", (e) => {
  const currentBtn = e.target.dataset.filter;
  if (currentBtn) {
    filterButtons.forEach((filterBtn) => filterBtn.classList.remove("active"));
  }

  e.target.classList.add("active");

  if (currentBtn) {
    displayProducts(currentBtn);
    console.log(currentBtn.toLowerCase());
  }
});

const productCardContainer = document.querySelector(".product-card-container");
displayProducts("best sellers");
function displayProducts(category){
  const filterCategory = category.toLowerCase();

  fetch("./data.json")
    .then((response) => response.json())
    .then((data) => {
      const filterProducts = data.filter(
        (product) => product.category_1 === filterCategory || product.category_2===filterCategory
      );
      console.log(filterProducts);
      productCardContainer.innerHTML = filterProducts.map(
        (product) => `<div class="product-card-sp">
        <div class="card-img-container">
          <div class="card-label-1">${product.priority_label}</div>
          <img src=${product.image} alt=${product.title} />
          <div class="card-label-2">
            <div class="card-label-2-child">${product.highlight_label} </div>
          </div>
        </div>
        <div class="product-details">
          <div class="card-title">
            <a href="#">${product.title}</a>
            <div class="product-colors">
              <div class="produt-color"></div>
            </div>
          </div>
        
          <div class="product-price-details">
            <div class="price-section">
              <div class="price-details">
                <span class="original-price">₹${product.price}</span>
                <span class="delete-price"><del>₹${product.delete_price}</del></span>
                <span class="offer-pr">${product.offer}% off</span>
              </div>
              <div class="ratings">
                <div class="rating-star">
                  <span
                    ><img
                      src="./images/icons/star.svg"
                      alt=""
                      width="15"
                      height="15"
                  /></span>
                  ${product.rating}
                </div>
                <div class="rating-reviews">
                ${product.reviews}
                  <span>
                    <img
                      src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Mask_group-10.png"
                      alt=""
                      width="10"
                      height="10"
                    />
                  </span>
                </div>
              </div>
            </div>
            <div class="btn-section">
              <button class="add-to-cart-btn">Add To Cart</button>
            </div>
          </div>
        </div>
        </div>`
      ).join(" ");
    })
    .catch((error) => console.log(error));
};
