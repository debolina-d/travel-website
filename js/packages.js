// Array of package objects with all necessary details
const packages = [
  {
    name: "Goa Getaway",
    destination: "Goa",
    price: "₹12,999",
    image: "images/goa.avif"
  },
  {
    name: "Himalayan Adventure",
    destination: "Manali",
    price: "₹18,499",
    image: "images/manali.avif"
  },
  {
    name: "Rajasthan Royal Tour",
    destination: "Jaipur",
    price: "₹15,299",
    image: "images/jaipur.avif"
  },
  {
    name: "Kerala Backwaters",
    destination: "Alleppey",
    price: "₹14,750",
    image: "images/kerala.avif"
  },
  {
    name: "Northeast Explorer",
    destination: "Northeastern India",
    price: "₹16,800",
    image: "images/northeast.avif"
  },
  {
    name: "Andaman Escape",
    destination: "Port Blair",
    price: "₹22,000",
    image: "images/andaman.avif"
  },
  {
    name: "Ladakh Road Trip",
    destination: "Leh",
    price: "₹24,499",
    image: "images/ladakh.avif"
  },
  {
    name: "Golden Triangle",
    destination: "Delhi, Agra, Jaipur",
    price: "₹13,999",
    image: "images/goldentriangle.avif"
  }
];

// Rendering packages on packages.html
if (document.getElementById("packagesContainer")) {
  const container = document.getElementById("packagesContainer");

  packages.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "package-card";

    card.innerHTML = `
      <img src="${pkg.image}" alt="${pkg.name}">
      <div class="card-content">
        <h3>${pkg.name}</h3>
        <p>${pkg.destination}</p>
        <p class="price">${pkg.price}</p>
        <a href="booking.html" class="btn-primary">Book Now</a>
      </div>
    `;

    container.appendChild(card);
  });
}

// Rendering packages in admin.html
if (document.getElementById("adminPackagesTable")) {
  const adminTable = document.getElementById("adminPackagesTable");

  packages.forEach(pkg => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${pkg.name}</td>
      <td>${pkg.destination}</td>
      <td>${pkg.price}</td>
      <td><button class="remove-btn">Remove</button></td>
    `;

    adminTable.appendChild(row);
  });
}
