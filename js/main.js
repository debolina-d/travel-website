// main.js
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("destinationContainer");

  // Limit to first 4 destinations only
  const featured = featuredDestinations.slice(0, 4);

  featured.forEach(dest => {
    const card = document.createElement("div");
    card.className = "destination-card";

    card.innerHTML = `
      <img src="${dest.image}" alt="${dest.name}" />
      <h3>${dest.name}</h3>
      <p>${dest.description}</p>
    `;

    container.appendChild(card);
  });
});
