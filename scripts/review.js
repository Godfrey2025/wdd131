document.addEventListener("DOMContentLoaded", () => {
  const reviewCountKey = "reviewCount";
  let count = localStorage.getItem(reviewCountKey);

  if (count === null) {
    count = 0;
  }

  count = parseInt(count) + 1;
  localStorage.setItem(reviewCountKey, count);

  // Optional: Display the count on the page
  const counterDisplay = document.getElementById("reviewCounter");
  if (counterDisplay) {
    counterDisplay.textContent = `You have submitted ${count} review(s).`;
  }
});
