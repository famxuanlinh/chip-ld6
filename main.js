// Start header
const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
// End header

document.addEventListener("DOMContentLoaded", () => {
  const dropdownTrigger = document.querySelector("[uk-dropdown]");
  const body = document.body;

  dropdownTrigger.addEventListener("beforeshow", () => {
    body.classList.add("no-scroll");
  });

  dropdownTrigger.addEventListener("hide", () => {
    body.classList.remove("no-scroll");
  });
});

const dropdownHeader = document.getElementById("dropdown-header");

const handleNavigate = () => {
  UIkit.dropdown(dropdownHeader).hide(0);
};

// Start handling cards and images
const handleCardClick = (cardSelector, imgSelector) => {
  const cardDescriptions = document.querySelectorAll(cardSelector);
  const imageElement = document.querySelector(imgSelector);

  cardDescriptions.forEach((desc) => {
    desc.addEventListener("click", () => {
      // Remove "active" class from all cards in this group
      cardDescriptions.forEach((item) => item.classList.remove("active"));
      // Add "active" class to the clicked card
      desc.classList.add("active");

      // Update the image src
      const newImageSrc = desc.getAttribute("data-img");
      if (newImageSrc) {
        imageElement.setAttribute("src", newImageSrc);
      }
    });
  });
};

handleCardClick(".platform-card-desc", ".platform-img");
handleCardClick(".activity-card-desc", ".activity-img");
// End handling cards and images
