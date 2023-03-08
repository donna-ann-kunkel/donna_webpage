//////////////////////////////////////////////////////////////
//Smooth Scrolling

const scrollButton = document.querySelector(".icon-down");
const scrollButton2 = document.querySelector(".icon-down2");
const sectionPortfolio = document.querySelector(".section-portfolio");
const sectionSkills = document.querySelector(".section-skills");

const scroll = () => {
  sectionPortfolio.scrollIntoView({ behavior: "smooth" });
};
const scroll2 = () => {
  sectionSkills.scrollIntoView({ behavior: "smooth" });
};

scrollButton.addEventListener("click", scroll);
scrollButton2.addEventListener("click", scroll2);
