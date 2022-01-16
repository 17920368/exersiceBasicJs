let form = document.querySelector(".color-form");
let nameColor = document.querySelector(".show__nameColor");
let divColor = document.querySelector(".show__color");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let formData = new FormData(form);
  nameColor.innerHTML = formData.get("color");
  divColor.style.backgroundColor = formData.get("color");
});
