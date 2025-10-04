// Product Array
const products = [
  { id: "prod1", name: "Widget Pro" },
  { id: "prod2", name: "Gadget Max" },
  { id: "prod3", name: "Doohickey Plus" },
  { id: "prod4", name: "Thingamajig" },
  { id: "prod5", name: "Super Gizmo" }
];

// Populate Product Select and Footer Info
window.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById("productName");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Update Footer Info
  const yearSpan = document.getElementById("year");
  const modifiedSpan = document.getElementById("lastModified");

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (modifiedSpan) {
    modifiedSpan.textContent = document.lastModified;
  }
});
