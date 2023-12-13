import { getPokemon } from "./helper/getPokemon";

import { renderPost } from "./components/RENDERpOST.JS";

const searchInput= document.querySelector('.search input');
const searchButton= document.querySelector('.search button');
const links = document.querySelector('.links');
const loader = document.querySelector('.pokemon');
const previous = document.querySelector('#previous');
const next = document.querySelector('#next');
const container = document.querySelector('.containerPokemon');
const card = document.querySelector('.containerPokemon');




// const URL= `${import.meta.env.VITE_URL_API}/results`

const URL = 'https://pokeapi.co/api/v2/pokemon'

const postList = document.querySelector(".posts-list");



/*Usando la pokeApi se pide que cuando inicie la aplicacion con un retardo de 3 segundos 
me mostrará una pantalla con un nav que tendra un buscador de pokemons un main que traera
aleatoriamente nuevo pokemons por pagina y un footer con una flecha para avanzar entre diferentes páginas
en el transcurso de los 3 seg mientras inicializa la app tendremos centrado un loader. 
Cada uno de los elementos debe estar modularizado en un componente diferente.
`por cada pokemon crearemos una card con la imagen del pokemon el nombre del pokemon
y el tipo. El acceso a la api de pokemon se debe de realizar creando una función async await o con una promesa / puedes hacerlas de las dos */

//componentes spinner, busqueda , main tarjetas, footer

function getRandomPokemonId() {
  const randomNumber = Math.random();
  
   const numeroAleatorioFinal = Math.floor(randomNumber * (10275 - 10001 + 1)) + 10001;
  
   if (numeroAleatorioFinal > 10275) {
     return Math.floor(randomNumber * (1017 - 1 + 1)) + 1;
  }
  return numeroAleatorioFinal;
}


loader.style.display = 'block';    


  setTimeout(() => {
    showContent();
  }, 3000);

  function showContent() {
    fecthPokemons(offset,limit);

  }


let offset=1;
let limit=8;

function fecthPokemon(id){
  fetch(`${URL}/${id}`)
  .then((res)=> res.json())
  .then((data)=>{
    loader.style.display = 'block';
    createPokemon(data);
    loader.style.display = 'none';

  });
}


function createPokemon(pokemon){
  const imageUrl = pokemon.sprites.front_default;
  const types = pokemon.types.map(type => type.type.name);
  
  renderPost(postList, {
    name: pokemon.name,
    imageUrl: imageUrl,
    typesUrl: types,
  });
}


// async function fecthPokemons(offset, limit) {
//   loader.style.display = "block";
//   for (let i = offset; i <= offset + limit; i++) {
//     fecthPokemon(i); 
//   }
//   loader.style.display = "none";
// }

async function fecthPokemons(offset, limit) {
  loader.style.display = "block";
  for (let i = offset; i <= offset + limit; i++) {
    fecthPokemon(getRandomPokemonId()); 
  }
}


function removeChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

previous.addEventListener('click', () => {
  
  if (offset != 1) {
    offset -= 9;
    fecthPokemons(offset, limit);
    removeChildNodes(postList)
  }

});

next.addEventListener('click', () => {
  offset += 9;
  
  fecthPokemons(offset, limit)
  removeChildNodes(postList)

});



searchButton.addEventListener('click',e=>{
  e.preventDefault();
  getPokemon(URL,searchInput.value);
});



function init(){


}






















// Inicio de la aplicación

document.addEventListener('DOMContentLoaded', init);