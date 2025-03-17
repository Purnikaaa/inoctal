//JavaScript of responsive navigation menu

const menuBtn = document.querySelector(".menu-btn");
const navegation = document.querySelector(".navegation");

menuBtn.addEventListener("click", () => {
  //si la clase "active" está presente la elimina, de lo contrario la añade
  menuBtn.classList.toggle("active");
  navegation.classList.toggle("active");
});

//JavaScript for video slider navegation
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

var sliderNav = function (manual) {
  //button
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  //video
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  //content
  contents.forEach((content) => {
    content.classList.remove("active");
  });

  //button
  btns[manual].classList.add("active");
  //video
  slides[manual].classList.add("active");
  //content
  contents[manual].classList.add("active");
};

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
  });
});

document.addEventListener('DOMContentLoaded', function () {

  // Open Modal Function
  function openModal(imageSrc, altText) {
    const modal = document.getElementById("imageModal");
    const modalImage = document.getElementById("modalImage");
    const caption = document.getElementById("caption");

    modal.style.display = "block"; // Show modal
    modalImage.src = imageSrc; // Set image source
    caption.innerHTML = altText; // Set caption text
  }

  // Close Modal Function
  function closeModal() {
    const modal = document.getElementById("imageModal");
    modal.style.display = "none"; // Hide modal
  }

  // Add event listeners to each image in the gallery
  const galleryImages = document.querySelectorAll('.gallery-img');
  galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      openModal(image.src, image.alt); // Call openModal with the clicked image details
    });
  });

  // Add the close modal event to the close button
  const closeBtn = document.querySelector('.close-btn');
  closeBtn.addEventListener('click', closeModal); // Add event listener to close button

});