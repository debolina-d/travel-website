document.addEventListener("DOMContentLoaded", () => {
  // Identify which container is available
  const featuredContainer = document.getElementById("destinationContainer");
  const allContainer = document.getElementById("allDestinationsContainer");

  // Check the current page
  const isDestinationsPage = window.location.pathname.includes("destinations.html");

  // Choose which data and container to use
  const destinationsToRender = isDestinationsPage ? allDestinations : featuredDestinations;
  const container = isDestinationsPage ? allContainer : featuredContainer;

  // Exit if no valid container is found
  if (!container) return;

  // Render destination cards
  destinationsToRender.forEach(dest => {
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
