const nick = localStorage.getItem("nick");
const nick_antigo = document.querySelector("#nick h3");
const corpo = document.querySelector("#corpo");

nick_antigo.innerText = nick;

const champ_permitidos = [
  "Alistar",
  "Amumu",
  "Ashe",
  "Bard",
  "Blitzcrank",
  "Brand",
  "Braum",
  "Galio",
  "Janna",
  "Karma",
  "Leona",
  "Lulu",
  "Lux",
  "Maokai",
  "Morgana",
  "Nami",
  "Nautilus",
  "Pyke",
  "Rakan",
  "Rell",
  "Renata",
  "Senna",
  "Seraphine",
  "Shaco",
  "Sona",
  "Soraka",
  "Swain",
  "TahmKench",
  "Taric",
  "Thresh",
  "Velkoz",
  "Xerath",
  "Yuumi",
  "Zilean",
  "Zyra",
];

champ_permitidos.forEach((nome) => {
  let nome_corrigido = nome;
  if (nome == "TahmKench") {
    nome_corrigido = "Tahm_Kench";
  } else if (nome == "Renata") {
    nome_corrigido = "Renata_Glasc";
  } else if (nome == "Velkoz") {
    nome_corrigido = "Vel'Koz";
  }
  //o + para ir add
  corpo.innerHTML += 
  `<div class="Max_Tam">
  <div class="champ" id="${nome}">
    <button class="botao_troca" id="volta" onclick = "voltar()"> <p> < </p></button>
    <div class="skin">
        <img src="http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome}_0.jpg" alt="${nome}" height="300px">
        <h3>${nome_corrigido}</h3>

    </div>
    <button class="botao_troca" id="avança" onclick="avancar()"> <p> > </p></button>
</div>
</div>`;
});

const champ = document.querySelectorAll(".champ");
let elemento_fora;
let elemento_nome_fora;
let elemento_fora_antigo = 0;
let elemento_nome_antigo = 0;
let nome_id;
let i = 0;
let x = 0;
let nome_antigo;
let champ_antigo = 0;
champ.forEach((champ_nome) => {
  champ_nome.addEventListener("click", () => verificar(champ_nome));
});

function verificar(champ_nome) {
  nome_id = champ_nome.id;

  const elemento = document.querySelector(`#${champ_nome.id} .skin img`);
  const elemento_nome = document.querySelector(`#${champ_nome.id} .skin h3`);

  elemento_fora = elemento;
  elemento_nome_fora = elemento_nome;
}

async function avancar() {
  await sleep(40);
  fetch(
    `https://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion/${nome_id}.json`
  )
    .then((res) => res.json())
    .then((conteudo) => {
      let nome = Object.values(conteudo.data)[0]; //vai naquele objeto e pega o primeiro valor dele

      if (champ_antigo != nome_id) {
        elemento_fora_antigo.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ_antigo}_${0}.jpg`;
        elemento_nome_antigo.innerHTML = nome_antigo;
        i = 1;
      } else {
        i++;
      }
      champ_antigo = nome_id;
      elemento_fora_antigo = elemento_fora;
      console.log(elemento_fora_antigo);
      elemento_nome_antigo = elemento_nome_fora;
      console.log(nome_antigo);
      nome_antigo = nome.name;
      console.log(nome_antigo);

      if (nome.skins[i]) {
        x = nome.skins[i].num;
        elemento_fora.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome_id}_${x}.jpg`;
        elemento_nome_fora.innerHTML = nome.skins[i].name;
      } else {
        elemento_fora.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome_id}_0.jpg`;
        elemento_nome_fora.innerHTML = nome.name;
        i = 0;
        x = nome.skins[i].num;
      }
    });
}

async function voltar() {
  await sleep(40);
  fetch(
    `https://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion/${nome_id}.json`
  )
    .then((res) => res.json())
    .then((conteudo) => {
      let nome = Object.values(conteudo.data)[0]; //vai naquele objeto e pega o primeiro valor dele

      if (champ_antigo != nome_id) {
        elemento_fora_antigo.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champ_antigo}_0.jpg`;
        elemento_nome_antigo.innerHTML = nome_antigo;
        let contator = 0;
        for (let z = 0; nome.skins[z]; z++) {
          contator++;
          console.log(contator);
        }
        i = contator - 1;
      } else {
        i--;
      }
      champ_antigo = nome_id;
      elemento_fora_antigo = elemento_fora;

      elemento_nome_antigo = elemento_nome_fora;

      nome_antigo = nome.name;
      console.log(nome_antigo);

      if (nome.skins[i]) {
        x = nome.skins[i].num;
        elemento_fora.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome_id}_${x}.jpg`;
        if (i == 0) {
          elemento_nome_fora.innerHTML = nome.name;
        } else {
          elemento_nome_fora.innerHTML = nome.skins[i].name;
        }
      } else {
        let contator = 0;
        for (let z = 0; nome.skins[z]; z++) {
          contator++;
          console.log(contator);
        }
        i = contator - 1;
        x = nome.skins[i].num;
        elemento_fora.src = `http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${nome_id}_${x}.jpg`;
        elemento_nome_fora.innerHTML = nome.skins[i].name;
      }
    });
}

function sleep(time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}
