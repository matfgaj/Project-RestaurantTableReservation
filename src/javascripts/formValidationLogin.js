function CheckInputValue() {
  const inputName = document.getElementById("input-password");
  const inputMail = document.getElementById("input-mail");
  const button = document.querySelector(".submit-button");
  const regEx = /\S+@\S+\.\S+/;

  if (inputName.value.trim() !== "" && regEx.test(inputMail.value)) {
    button.style.backgroundColor = "#fa923f";
    button.disabled = false;
  } else {
    button.style.backgroundColor = "rgb(177, 177, 174)";
    button.disabled = true;
  }
}
