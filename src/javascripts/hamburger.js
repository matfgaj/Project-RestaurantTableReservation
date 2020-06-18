function openNavbar() {
  document.querySelector("#navbar").style.width = "100%";
  document.querySelector("#navbar").style.display = "block";
  document.querySelector(".close").style.display = "block";
  document.querySelector(".open").style.display = "none";
}
function closeNavbar() {
  document.querySelector("#navbar").style.width = "0";
  document.querySelector(".close").style.display = "none";
  document.querySelector(".open").style.display = "block";
}
