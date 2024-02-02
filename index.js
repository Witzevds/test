//hamburger menu functionality
document.addEventListener("DOMContentLoaded", function () {
  let $hamburgerMenu = document.querySelector(".hamburger-icon");
  let $dropdownMenu = document.querySelector(".dropdown-menu");

  $hamburgerMenu.addEventListener("click", function () {
    $hamburgerMenu.classList.toggle("transform");
    $dropdownMenu.classList.toggle("show-dropdown");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("myVideo");

  video.addEventListener("click", function () {
    if (video.requestFullscreen) {
      video.requestFullscreen();
    } else if (video.mozRequestFullScreen) {
      /* Firefox */
      video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) {
      /* Chrome, Safari and Opera */
      video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) {
      /* IE/Edge */
      video.msRequestFullscreen();
    }
  });
});
