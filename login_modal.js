const loginBtn = document.querySelector(".login-btn");
const loginModal = document.querySelector(".login-modal");
const closeLoginModal = document.querySelector(".login-modal-close");


loginBtn.addEventListener(
  "click",
  () => (loginModal.style.visibility = "visible")
);

closeLoginModal.addEventListener(
  "click",
  () => (loginModal.style.visibility = "hidden")
);


