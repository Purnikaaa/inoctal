//JavaScript of responsive navigation menu

const menuBtn = document.querySelector(".menu-btn");
const navegation = document.querySelector(".navegation");

menuBtn.addEventListener("click", () => {
  //si la clase "active" está presente la elimina, de lo contrario la añade
  menuBtn.classList.toggle("active");
  navegation.classList.toggle("active");
});
