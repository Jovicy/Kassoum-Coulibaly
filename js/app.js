document.querySelector('.menu-btn').addEventListener('click', () => {
  document.querySelector('.nav-list').classList.toggle('active');
});


// Gallery Modal
var modal = document.getElementById("myModal");
var modalImg = document.getElementById("modalImg");
var captionText = document.getElementById("caption");
var span = document.getElementsByClassName("close")[0];
var images = document.querySelectorAll(".gallery-image-cont img");

images.forEach(function(img, index) {
  img.addEventListener("click", function() {
    modal.style.display = "block";
    modalImg.src = img.src;
    captionText.innerHTML = img.alt;
  });
});


// to close the modal
span.onclick = function() {
  modal.style.display = "none";
};