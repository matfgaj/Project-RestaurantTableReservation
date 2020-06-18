let form = document.querySelector(".form");
const inputName = document.getElementById("input-password");
const inputMail = document.getElementById("input-mail");

[inputName, inputMail].forEach((element) => {
  element.addEventListener("input", () => {
    CheckInputValue();
  });
});

form.addEventListener("submit", function (event) {
  event.preventDefault();
  UserFetch();
});

document.querySelectorAll(".reservation").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".Container").style.display = "block";
  });
});

document.querySelectorAll(".x").forEach((element) => {
  element.addEventListener("click", () => {
    document.querySelector(".Container").style.display = "none";
  });
});
