let url = "https://pokemon.danielpimentel.com.br/v1/";
let urlLista = "https://pokemon.danielpimentel.com.br/v1/pokemon/lista"
let urlNome = "https://pokemon.danielpimentel.com.br/v1/pokemon/nome"
let lista = document.querySelector("#lista");
let pokemonDiv = document.querySelector("#pokemonDiv")
console.log(url + "/pokemon/lista");
lista.addEventListener("click", selecionarLista)


//Mostrar Lista de Pokemóns
function selecionarLista(urlLista){
for(let i=0; i <= 904; i++) {
  fetch(url +"/pokemon/lista")
  .then(response => response.json())
  .then(mostrarLista => lista.innerHTML += `<option value="">${mostrarLista.pokemon[i].nome}</option>`)
  .catch(erro => console.error(deuRuim))
}
}

let nomePk = lista.value; 


function mostrarOPk(urlNome) {
  fetch(url +`/pokemon/nome/${nomePk}`)
  .then(resposta => resposta.json()) 
  .then(mostrarPoke => pokemonDiv.innerHTML = `<div class="pokemonDiv">
   <h1>${mostrarPoke.pokemon.nome}</h1>
    <p> altura: ${mostrarPoke.pokemon.altura} </p>
    <p> peso: ${mostrarPoke.pokemon.peso} </p>
    <p> tipo: ${mostrarPoke.pokemon.tipo} </p>
    <p> geração: ${mostrarPoke.pokemon.geracao}º
    <p> pontos de vida: ${mostrarPoke.pokemon.hp} </p>
    <p> ataque: ${mostrarPoke.pokemon.atk} </p>
    <img src=${mostrarPoke.pokemon.img}> 
    <p> defesa: ${mostrarPoke.pokemon.def} </p>
    <p> velocidade: ${mostrarPoke.pokemon.speed}
    <h2> evoluções: ${mostrarPoke.pokemon.evolucoes}
    </div>`)
  .catch(error => console.error(error))

}














