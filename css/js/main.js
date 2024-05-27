document
  .getElementById("my-button-open")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.add("is-open");
  });
document
  .getElementById("modal-button-close")
  .addEventListener("click", function () {
    document.getElementById("my-modal").classList.remove("is-open");
  });

document
  .getElementById("my-down-button-open")
  .addEventListener("click", function () {
    document.getElementById("my-down-modal").classList.add("is-open");
  });
document
  .getElementById("modal-down-button-close")
  .addEventListener("click", function () {
    document.getElementById("my-down-modal").classList.remove("is-open");
  });

// document.addEventListener("DOMContentLoaded", (event) => {
//   const subscribeButton = document.querySelector(".footer-subscribe-button");
//   subscribeButton.addEventListener("click", (event) => {
//     event.preventDefault(); // Запобігає відправці форми
//     alert("Thank you for subscribe!");
//   });
// });

document.addEventListener("DOMContentLoaded", (event) => {
  const subscribeButton = document.querySelector(".footer-subscribe-button");
  const emailInput = document.querySelector(".footer-input");

  subscribeButton.addEventListener("click", (event) => {
    event.preventDefault(); // Запобігає відправці форми
    const email = emailInput.value;
    if (email) {
      alert(`Thank you for subscribe! ${email}`);
      emailInput.value = ""; // Очищує інпут
    } else {
      alert("Please enter a valid email address.");
    }
  });
});
