// Temple data array
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27", 
    area: 53500,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/400x250/tokyo-japan-temple-exterior-1085996-wallpaper.jpg"
  },
  {
    templeName: "Bern Switzerland",
    location: "Zollikofen, Switzerland",
    dedicated: "1955, September, 11",
    area: 8700,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bern-switzerland/400x250/bern-switzerland-temple-lds-273996-wallpaper.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",  
    dedicated: "2019, March, 10",
    area: 7000,
    imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rome-italy/400x250/rome-italy-temple-exterior-1406441-wallpaper.jpg"
  }
];

// Render temple cards
function displayTemples(templesArray) {
  const container = document.getElementById("temple-cards");
  container.innerHTML = "";

  templesArray.forEach(temple => {
    const card = document.createElement("section");
    card.classList.add("temple-card");

    card.innerHTML = `
      <h2>${temple.templeName}</h2>
      <p><strong>Location:</strong> ${temple.location}</p>
      <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
      <p><strong>Area:</strong> ${temple.area.toLocaleString()} sq ft</p>
      <img src="${temple.imageUrl}" alt="Image of ${temple.templeName} Temple" loading="lazy">
    `;

    container.appendChild(card);
  });
}

// Initial render
displayTemples(temples);

// Navigation filter buttons
document.getElementById("home").addEventListener("click", () => displayTemples(temples));

document.getElementById("old").addEventListener("click", () => {
  const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() < 1900);
  displayTemples(filtered);
});

document.getElementById("new").addEventListener("click", () => {
  const filtered = temples.filter(t => new Date(t.dedicated).getFullYear() > 2000);
  displayTemples(filtered);
});

document.getElementById("large").addEventListener("click", () => {
  const filtered = temples.filter(t => t.area > 90000);
  displayTemples(filtered);
});

document.getElementById("small").addEventListener("click", () => {
  const filtered = temples.filter(t => t.area < 10000);
  displayTemples(filtered);
});

// Hamburger menu toggle
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#navMenu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('hidden');
  hamburger.textContent = navMenu.classList.contains('hidden') ? '☰' : '✖';
});

// Footer date
document.querySelector('#year').textContent = new Date().getFullYear();
document.querySelector('#lastModified').textContent = document.lastModified;
