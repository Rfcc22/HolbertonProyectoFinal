document.addEventListener("DOMContentLoaded", function(event) {
  var images = document.querySelectorAll("article img");

  images.forEach(function(image) {
    image.addEventListener("click", function() {
      image.classList.toggle("small");
    });
  });
});