let divPost ="";

/**
 * @param {HTMLDivElement} element 
 * @param {<post>Object} posts 
 */
export const renderPost = (element, pokemon) => {
  const tipos = pokemon.typesUrl;
  const tipoClass = tipos.map(tipo => tipo.toLowerCase()).join(' ');
  const clasesArray = tipoClass.split(' ');

  const clasesPoke = clasesArray.map(clase => {
    // Hacer algo con cada clase, por ejemplo, aplicar estilos específicos
    return `<span class="${clase}">${clase}</span>`;
  });

  const cardHtml = `
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">${pokemon.name}</h5>
        <img src="${pokemon.imageUrl}" class="pokemon-image" alt="">
        <h6 class="card-subtitle">${clasesPoke.join(' ')}</h6>
      </div>
    </div>
  `;

  // Obtener el contenido existente
  const existingHtml = element.innerHTML;

  // Agregar el nuevo contenido al contenido existente
  element.innerHTML = existingHtml + cardHtml;
};