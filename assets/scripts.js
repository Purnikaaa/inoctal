//JavaScript of responsive navigation menu

const menuBtn = document.querySelector(".menu-btn");

menuBtn.addEventListener("click", () => {
  //si la clase "active" está presente la elimina, de lo contrario la añade
  menuBtn.classList.toggle("active");
});
