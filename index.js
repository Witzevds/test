//hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  let $hamburgerMenu = document.querySelector(".hamburger-icon");
  let $dropdownMenu = document.querySelector(".dropdown-menu");

  $hamburgerMenu.addEventListener("click", function () {
    $hamburgerMenu.classList.toggle("transform");
    $dropdownMenu.classList.toggle("show-dropdown");
  });
});
