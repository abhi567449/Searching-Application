const pokemon = {
  count: 21,
  next: "https://pokeapi.co/api/v2/type/?offset=20&limit=1",
  previous: null,
  results: [
    {
      name: "normal",
      url: "https://pokeapi.co/api/v2/type/1/",
    },
    {
      name: "fighting",
      url: "https://pokeapi.co/api/v2/type/2/",
    },
    {
      name: "flying",
      url: "https://pokeapi.co/api/v2/type/3/",
    },
    {
      name: "poison",
      url: "https://pokeapi.co/api/v2/type/4/",
    },
    {
      name: "ground",
      url: "https://pokeapi.co/api/v2/type/5/",
    },
    {
      name: "rock",
      url: "https://pokeapi.co/api/v2/type/6/",
    },
    {
      name: "bug",
      url: "https://pokeapi.co/api/v2/type/7/",
    },
    {
      name: "ghost",
      url: "https://pokeapi.co/api/v2/type/8/",
    },
    {
      name: "steel",
      url: "https://pokeapi.co/api/v2/type/9/",
    },
    {
      name: "fire",
      url: "https://pokeapi.co/api/v2/type/10/",
    },
    {
      name: "water",
      url: "https://pokeapi.co/api/v2/type/11/",
    },
    {
      name: "grass",
      url: "https://pokeapi.co/api/v2/type/12/",
    },
    {
      name: "electric",
      url: "https://pokeapi.co/api/v2/type/13/",
    },
    {
      name: "psychic",
      url: "https://pokeapi.co/api/v2/type/14/",
    },
    {
      name: "ice",
      url: "https://pokeapi.co/api/v2/type/15/",
    },
    {
      name: "dragon",
      url: "https://pokeapi.co/api/v2/type/16/",
    },
    {
      name: "dark",
      url: "https://pokeapi.co/api/v2/type/17/",
    },
    {
      name: "fairy",
      url: "https://pokeapi.co/api/v2/type/18/",
    },
    {
      name: "stellar",
      url: "https://pokeapi.co/api/v2/type/19/",
    },
    {
      name: "unknown",
      url: "https://pokeapi.co/api/v2/type/10001/",
    },
  ],
};

let pokemonArr = [];
const pokemonDiv = document.querySelector("#pokemon-data");
fetchPokemon();

function fetchPokemon() {
  const promise = [];
  for (let i = 1; i <= 151; i++) {
    let api_url = `https://pokeapi.co/api/v2/pokemon/${i}`;

    promise.push(fetch(api_url).then((response) => response.json()));
  }
  Promise.all(promise).then((allPokemon) => {
    const firstGenPokemon = allPokemon.map((pokemon) => ({
      frontImage: pokemon.sprites["front_default"],
      pokemon_id: pokemon.id,
      name: pokemon.name,
      type: pokemon.types[0].type.name,
      abilities: pokemon.abilities
        .map((ability) => ability.ability.name)
        .join(", "),
      description: pokemon.species.url,
    }));
    pokemonArr = firstGenPokemon;
    createPokemonCards(firstGenPokemon);
  });
}
const type = document.getElementById("type");

function createPokemonCards(pokemon) {
    pokemonDiv.innerHTML =''

  pokemon.forEach((item) => {

    const flip_card = document.createElement("div");
    flip_card.classList.add("flip-card");

    const flip_inner = document.createElement("div");
    flip_inner.classList.add("flip-inner");

    const card = document.createElement("div");
    card.classList.add("flip-front");

    const id = document.createElement("p");
    id.innerText = "#" + item.pokemon_id;
    id.style.backgroundColor = "white";
    id.style.marginTop = "20px";
    id.style.textAlign = "center";

    const img = document.createElement("img");
    img.src = item.frontImage;
    img.style.marginTop = "20px";
    img.style.marginLeft = "20%";
    img.style.width = '130px'
    img.style.height = '130px'

    const name = document.createElement("p");
    name.innerText = item.name;
    name.style.marginTop = "20px";
    name.style.textAlign = "center";

    const type = document.createElement("p");
    type.innerText = item.type;
    type.style.marginTop = "30px";
    type.style.textAlign = "center";
    type.style.width = "40%";
    type.style.height = "20px";
    type.style.backgroundColor = "white";
    type.style.borderRadius = "20px";
    type.style.marginLeft = "30%";

    cardColor(card,type.textContent)
  
    card.append(id, img, name, type);
    flip_inner.appendChild(card)
    flipCard(flip_inner,item);
    flip_card.appendChild(flip_inner)
    pokemonDiv.appendChild(flip_card);

   
  });
}


function flipCard(flip_inner,item)
{
    const card = document.createElement("div");
    card.classList.add("flip-back");

    const id = document.createElement("p");
    id.innerText = "#" + item.pokemon_id;
    id.style.backgroundColor = "white";
    id.style.marginTop = "20px";
    id.style.textAlign = "center";

    const name = document.createElement("p");
    name.innerText = item.name;
    name.style.marginTop = "70px";
    name.style.textAlign = "center";

    const abilities = document.createElement("p");
    abilities.innerText = item.abilities
    abilities.style.marginTop = "50px";
    abilities.style.textAlign = "center";

    cardColor(card,item.type)

    card.append(id, name, abilities)
    flip_inner.appendChild(card)
}

pokemon.results.forEach((items) => {
  const option = document.createElement("option");
  option.innerText = items.name;
  type.appendChild(option);
});

const select_tag = document.getElementById("type");

const filterByType = document.getElementById("filter-by-type");
filterByType.addEventListener("click", () => {
  const val = select_tag.value;

  const filter = pokemonArr.filter(item => item.type.toLowerCase()===val.toLowerCase())

  createPokemonCards(filter)
});

const searchBtn = document.getElementById("search-btn");
searchBtn.addEventListener('input', ()=>
{
    let val = searchBtn.value

    const filter = pokemonArr.filter(item => item.name.toLowerCase().includes(val.toLowerCase()) )
console.log(filter)
  createPokemonCards(filter)
})

function cardColor(card,type)
{
    if (type.toLowerCase() === "grass") {
        card.style.backgroundColor = "rgb(53, 136, 53)";
      }
      if (type.toLowerCase() === "fire") {
        card.style.backgroundColor = "rgb(204, 97, 79)";
      }
      if (type.toLowerCase() === "water") {
        card.style.backgroundColor = "rgb(66, 155, 161)";
      }
      if (type.toLowerCase() === "bug") {
        card.style.backgroundColor = "rgb(98, 196, 98)";
      }
      if (type.toLowerCase() === "normal") {
        card.style.backgroundColor = "rgb(143, 168, 206)";
      }
      if (type.toLowerCase() === "poison") {
        card.style.backgroundColor = "rgb(103, 84, 116)";
      }
      if (type.toLowerCase() === "electric") {
        card.style.backgroundColor = "rgb(235, 212, 86)";
      }
      if (type.toLowerCase() === "fairy") {
        card.style.backgroundColor = "rgb(146, 70, 99)";
      }
      if (type.toLowerCase() === "ground") {
        card.style.backgroundColor = "rgb(150, 151, 70)";
      }
      if (type.toLowerCase() === "fighting") {
        card.style.backgroundColor = "rgb(216, 128, 69)";
      }
      if (type.toLowerCase() === "rock") {
        card.style.backgroundColor = "rgb(148, 97, 97)";
      }
      if (type.toLowerCase() === "psychic") {
        card.style.backgroundColor = "rgb(153, 133, 20)";
      }
      if (type.toLowerCase() === "ghost") {
        card.style.backgroundColor = "rgb(45, 124, 138)";
      }
      if (type.toLowerCase() === "ice") {
        card.style.backgroundColor = "rgb(78, 208, 231)";
      }
      if (type.toLowerCase() === "dragon") {
        card.style.backgroundColor = "rgb(221, 51, 51)";
      }
}
