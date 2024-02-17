const API_URL = "https://api.escuelajs.co/api/v1/categories";

const categoriasElement = document.getElementById("categorias");

async function obtenerCategorias() {
  const response = await fetch(API_URL);
  const categorias = await response.json();

  categorias.forEach((categoria) => {
    const card = document.createElement("div");
    card.classList.add("col-md-4", "card", "m-2"); // Add col-md-4 class for 3 cards per row

    const img = document.createElement("img");
    img.classList.add("card-img-top");
    img.src = categoria.image;
    img.alt = categoria.name;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const cardTitle = document.createElement("h5");
    cardTitle.classList.add("card-title");
    cardTitle.textContent = categoria.name;

    cardBody.appendChild(cardTitle);
    card.appendChild(img);
    card.appendChild(cardBody);
    categoriasElement.appendChild(card);
  });
}

obtenerCategorias();