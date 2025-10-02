// Product Array
const products = [
  { id: "prod1", name: "Widget Pro" },
  { id: "prod2", name: "Gadget Max" },
  { id: "prod3", name: "Doohickey Plus" },
  { id: "prod4", name: "Thingamajig" },
  { id: "prod5", name: "Super Gizmo" }
];

// Populate Product Select
window.addEventListener('DOMContentLoaded', () => {
  const productSelect = document.getElementById("productName");
  if (!productSelect) return;
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });
});
