const shareButton = document.querySelector(".share-button");
const shareIcon = document.querySelector(".share-icon");
const socialContainer = document.querySelector(".social-container");

shareButton.addEventListener("click", () => {
  if (socialContainer.style.display !== "block") {
    shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
    shareIcon.style.fill = "hsl(0, 0%, 100%)";
    socialContainer.style.display = "block";
  } else {
    shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
    shareIcon.style.fill = "#6E8098";
    socialContainer.style.display = "none";
  }
});
