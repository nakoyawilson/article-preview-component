const shareButton = document.querySelector(".share-button");
const shareIcon = document.querySelector(".share-icon");
const socialContainer = document.querySelector(".social-container");
const authorDetails = document.querySelector(".author-details");
const articleFooterContainer = document.querySelector(".article-footer");

shareButton.addEventListener("click", () => {
  if (window.matchMedia("(max-width: 576px)").matches) {
    if (socialContainer.style.display !== "block") {
      shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
      shareIcon.style.fill = "hsl(0, 0%, 100%)";
      authorDetails.style.display = "none";
      articleFooterContainer.style.backgroundColor = "hsl(217, 19%, 35%)";
      articleFooterContainer.style.flexDirection = "row-reverse";
      socialContainer.style.display = "block";
    } else {
      articleFooterContainer.style.flexDirection = "row";
      articleFooterContainer.style.backgroundColor = "hsl(0, 0%, 100%)";
      shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
      shareIcon.style.fill = "#6E8098";
      authorDetails.style.display = "flex";
      socialContainer.style.display = "none";
    }
  } else {
    if (socialContainer.style.display !== "block") {
      shareButton.style.backgroundColor = "hsl(214, 17%, 51%)";
      shareIcon.style.fill = "hsl(0, 0%, 100%)";
      socialContainer.style.display = "block";
    } else {
      shareButton.style.backgroundColor = "hsl(210, 46%, 95%)";
      shareIcon.style.fill = "#6E8098";
      socialContainer.style.display = "none";
    }
  }
});
