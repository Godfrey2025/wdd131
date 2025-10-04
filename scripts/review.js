
document.addEventListener("DOMContentLoaded", () => {
  // Review count logic
  const reviewCountKey = "reviewCount";
  let count = localStorage.getItem(reviewCountKey);
  count = count ? parseInt(count) + 1 : 1;
  localStorage.setItem(reviewCountKey, count);

  const counterDisplay = document.getElementById("reviewCounter");
  if (counterDisplay) {
    counterDisplay.textContent = `You have submitted ${count} review(s).`;
  }

  // Footer info logic
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
});
