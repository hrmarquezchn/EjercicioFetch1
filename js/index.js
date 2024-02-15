async function obtenerUsuarios() {
    const respuesta = await fetch("https://api.escuelajs.co/api/v1/users");
    const usuarios = await respuesta.json();
  
    const listaUsuarios = document.querySelector(".row");
  
    usuarios.forEach((usuario) => {
      const tarjeta = document.createElement("div");
      tarjeta.classList.add("col-md-3");
      tarjeta.innerHTML = 
      `<div class="card">
          <img src="${usuario.avatar}" class="img-thumbnail rounded-circle" alt="Imagen de perfil">
          <h5 class="card-title">${usuario.name}</h5>
          <p class="card-text">${usuario.email}</p>
          <p class="card-text">${usuario.password}</p>
        </div> `
  
      listaUsuarios.appendChild(tarjeta);
    });
  }
  
  obtenerUsuarios();