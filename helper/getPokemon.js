
export function getPokemon(url,nombre) {
    const pokemonEncontrado = `${url}/${nombre}`;
  
     if (pokemonEncontrado) {
       // Hacer una solicitud a la URL del Pokémon encontrado
       fetch(pokemonEncontrado)
         .then(response => response.json())
         .then(data => {
           // La información del Pokémon está en 'data'

           const imageUrl = data.sprites.front_default;
           
           const tipoClass = data.types.map(type => type.type.name);
       
           let clasesPoke = [];
       
           tipoClass.forEach(clase => {
               clasesPoke.push(clase);
       
           });
       
           const nuevoElementoHTML = `
            <div class="card">
                <div class="card-body">
                <h5 class="card-title">${data.name}</h5>
                <img src="${imageUrl}" class="pokemon-image" alt="">
                <h6 class="card-subtitle">
                    ${clasesPoke.map(clase => `<span class="${clase}">${clase}</span>`).join(' ')}
                </h6>
                </div>
            </div>
            `;

            // Agregar el nuevo HTML al contenedor existente (por ejemplo, un div con la clase 'posts-list')
            const contenedor = document.querySelector('.busqueda');
            contenedor.innerHTML += nuevoElementoHTML;










         })
         .catch(error => {
           console.error('Error al obtener información del Pokémon:', error);
         });
     } else {
       console.log(`Pokémon con el nombre ${nombre} no encontrado.`);
     }
   }