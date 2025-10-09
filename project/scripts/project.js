// Footer Year and Last Modified
const yearSpan = document.getElementById("year");
const modifiedSpan = document.getElementById("lastModified");

if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
if (modifiedSpan) {
  modifiedSpan.textContent = document.lastModified;
}

// Product Data
const products = [
  {
    name: "Cement Blocks",
    category: "construction",
    description: "High-quality blocks for structural integrity.",
    image: "images/cement-blocks.jpg"
  },
  {
    name: "Granite Countertops",
    category: "interior",
    description: "Elegant surfaces for kitchens and bathrooms.",
    image: "images/granite.jpg"
  },
  {
    name: "Solar Roofing Tiles",
    category: "sustainable",
    description: "Eco-friendly roofing with solar integration.",
    image: "images/solar-tiles.jpg"
  },
  {
    name: "Steel Beams",
    category: "construction",
    description: "Durable beams for large-scale structural projects.",
    image: "images/steel-beams.jpg"
  },
  {
    name: "Bamboo Flooring",
    category: "sustainable",
    description: "Stylish and renewable flooring option.",
    image: "images/bamboo-flooring.jpg"
  }
];

// Product Filtering
const productList = document.getElementById("product-list");
const categoryFilter = document.getElementById("category");

function displayProducts(filter) {
  if (!productList) return;

  productList.innerHTML = "";
  const filtered = filter === "all" ? products : products.filter(p => p.category === filter);

  filtered.forEach(product => {
    const card = document.createElement("article");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" loading="lazy" width="600" height="400" />
      <h2>${product.name}</h2>
      <p>${product.description}</p>
    `;
    productList.appendChild(card);
  });
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", () => {
    const selected = categoryFilter.value;
    displayProducts(selected);
    localStorage.setItem("selectedCategory", selected);
  });

  const savedCategory = localStorage.getItem("selectedCategory") || "all";
  categoryFilter.value = savedCategory;
  displayProducts(savedCategory);
}

// Contact Form Submission
const contactForm = document.getElementById("contactForm");

if (contactForm) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been received.`);
      contactForm.reset();
    } else {
      alert("Please fill out all fields before submitting.");
    }
  });
}


const hamburger = document.getElementById("hamburger");
const navMenu = document.getElementById("navMenu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
