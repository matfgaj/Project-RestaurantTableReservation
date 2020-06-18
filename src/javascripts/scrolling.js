const scrolling = () => {
  // clickable alements
  const about = document.querySelectorAll("a.about");
  const menu = document.querySelectorAll("a.menu");
  const photos = document.querySelectorAll("a.photos");
  const contact = document.querySelectorAll("a.contact");
  const home = document.querySelectorAll(".contact i");
  //   Where to scroll position

  const headerLength = document.querySelector(".nav").clientHeight;
  const aboutScroll = document.querySelector("section.about");
  const menuScroll = document.querySelector("section.menu");
  const photosScroll = document.querySelector("section.photos");
  const contactScroll = document.querySelector("section.contact");

  function closeNavbar() {
    document.querySelector("#navbar").style.width = "0";
    document.querySelector(".close").style.display = "none";
    document.querySelector(".open").style.display = "block";
  }

  function addToScroll(elements, whereToScroll) {
    elements.forEach((element) => {
      element.addEventListener("click", () => {
        window.scrollTo(0, whereToScroll.offsetTop);
        setTimeout(closeNavbar(), 6000);
      });
    });
  }
  addToScroll(home, aboutScroll);
  addToScroll(about, aboutScroll);
  addToScroll(menu, menuScroll);
  addToScroll(photos, photosScroll);
  addToScroll(contact, contactScroll);
};
scrolling();
// -headerLength;
