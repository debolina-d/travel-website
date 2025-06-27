document.addEventListener("DOMContentLoaded", () => {
  // Dummy Data Arrays
  const packages = [
    { name: "Goa Getaway", destination: "Goa", price: "₹12,999" },
    { name: "Himalayan Adventure", destination: "Manali", price: "₹18,499" },
    { name: "Rajasthan Royal Tour", destination: "Jaipur", price: "₹15,299" },
    { name: "Kerala Backwaters", destination: "Alleppey", price: "₹14,750" },
    { name: "Northeast Explorer", destination: "Shillong", price: "₹16,800" },
    { name: "Andaman Escape", destination: "Port Blair", price: "₹22,000" },
    { name: "Ladakh Road Trip", destination: "Leh", price: "₹24,499" },
    { name: "Golden Triangle", destination: "Delhi, Agra, Jaipur", price: "₹13,999" }
  ];

  const featuredDestinations = [
    { name: "Goa" },
    { name: "Manali" },
    { name: "Kerala" }
  ];

  const allDestinations = [
    { name: "Goa" },
    { name: "Manali" },
    { name: "Kerala" },
    { name: "Rajasthan" },
    { name: "Sikkim" },
    { name: "Andaman" },
    { name: "Ladakh" },
    { name: "Delhi" }
  ];

  // ============ Helper Functions ============

  function createRemoveRow(item, tableSelector, onRemove) {
    const tbody = document.querySelector(tableSelector);
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${item.name}</td>
      <td><button class="remove-btn">Remove</button></td>
    `;
    row.querySelector("button").addEventListener("click", () => {
      row.remove();
      onRemove(item.name);
    });
    tbody.appendChild(row);
  }

  function populatePackages() {
    const tbody = document.querySelector("#removePackageTable tbody");
    packages.forEach(pkg => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${pkg.name}</td>
        <td>${pkg.destination}</td>
        <td>${pkg.price}</td>
        <td><button class="remove-btn">Remove</button></td>
      `;
      row.querySelector("button").addEventListener("click", () => row.remove());
      tbody.appendChild(row);
    });
  }

  function populateFeaturedDestinations() {
    featuredDestinations.forEach(dest => {
      createRemoveRow(dest, "#featuredRemoveTable tbody", (name) => {
        // Optional: remove from featuredDestinations array
      });
    });
  }

  function populateAllDestinations() {
    allDestinations.forEach(dest => {
      createRemoveRow(dest, "#allRemoveTable tbody", (name) => {
        // Optional: remove from allDestinations array
      });
    });
  }

  // ============ Initialization ============

  populatePackages();
  populateFeaturedDestinations();
  populateAllDestinations();
});
