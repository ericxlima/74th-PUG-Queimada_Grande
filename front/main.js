document.addEventListener("DOMContentLoaded", function () {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      const cobras = data;
      const cardContainer = document.getElementById("all-cards");
      cobras.forEach(cobra => {
        const cardHTML = `
            <div class="col">
              <div class="card">
                <img src="${cobra.imagem}" class="card-img-top" alt="${cobra.nome}">
                <div class="card-body">
                  <h5 class="card-title">${cobra.nome}</h5>
                  <p class="card-text">${cobra.descricao}</p>
                </div>
              </div>
            </div>
          `;
        cardContainer.innerHTML += cardHTML;
      });
    })
    .catch(error => console.error("Error fetching data:", error));
});


document.addEventListener("DOMContentLoaded", function () {
  const cardApiContainer = document.getElementById("all-cards-api");
  $.ajax({
    url: "/flask-api/",
    method: "GET",
    dataType: "json",
    success: function (data) {
      data.forEach(cobra => {
        const cardHTML = `
            <div class="col">
              <div class="card">
                <img src="${cobra.imagem}" class="card-img-top" alt="${cobra.nome}">
                <div class="card-body">
                  <h5 class="card-title">${cobra.nome}</h5>
                  <p class="card-text">${cobra.descricao}</p>
                  <p class="card-text">${cobra.origin}</p>
                </div>
              </div>
            </div>
          `;
        cardApiContainer.innerHTML += cardHTML;
      });
    },
    error: function (error) {
      console.error("Error fetching data from Flask API:", error);
    }
  });
});
