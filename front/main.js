document.addEventListener("DOMContentLoaded", function () {
  function createCard(cobra) {
    return `
      <div class="col">
        <div class="card">
          <img src="${cobra.imagem}" class="card-img-top" alt="${cobra.nome}">
          <div class="card-body">
            <h5 class="card-title">${cobra.nome}</h5>
            <p class="card-text">${cobra.descricao}</p>
            ${cobra.origin ? `<p class="card-text">${cobra.origin}</p>` : ''}
          </div>
        </div>
      </div>
    `;
  }

  function displayCards(endpoint, containerId) {
    const cardContainer = document.getElementById(containerId);

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        data.forEach(cobra => {
          const cardHTML = createCard(cobra);
          cardContainer.innerHTML += cardHTML;
        });
      })
      .catch(error => console.error("Error fetching data:", error));
  }

  displayCards("data.json", "all-cards");
  displayCards("/flask-api/", "all-cards-api");
  displayCards("/fastapi-api/", "all-cards-api");
});
