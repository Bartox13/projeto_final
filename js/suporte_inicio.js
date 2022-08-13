const escreva = document.querySelector("#escreva");
const botao = document.querySelector("#botao");
const form = document.querySelector("#escolha");
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

botao.addEventListener("click", ler);
form.addEventListener("submit", ler);

champ_permitidos.forEach((nome) => {
  let nome_corrigido = nome;
  if (nome == "TahmKench") {
    nome_corrigido = "Kench";
  } else if (nome == "Renata") {
    nome_corrigido = "Renata";
  } else if (nome == "Velkoz") {
    nome_corrigido = "Vel'Koz";
  } else if (nome == "Bard") {
    nome_corrigido = "Bardo";
  }

  //o + para ir add
  corpo.innerHTML += `<a class="champ" id="${nome}" href="./suporte.html?champ=${nome}"> 
    <div  >
        <img src="http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${nome}.png" alt="${nome}" height="90px">
        <p class="nome">${nome_corrigido}</p>
    </div>
    </a>`;
});

function ler(event) {
  const champ = document.querySelectorAll(".champ ");
  event.preventDefault();
  if (escreva.value.toLowerCase() == "bardo") {
    escreva.value = "bard";
  }

  

  champ.forEach((champ_nome) => {
    const elemento = document.querySelector(`#${champ_nome.id}`);
    elemento.classList.add("sumir");
  });

  champ_permitidos.forEach((nome) => {
    if(nome.toLowerCase().includes(escreva.value.toLowerCase())) {
      champ.forEach((champ_nome) => {
        if (champ_nome.id == nome) {
          const elemento = document.querySelector(`#${champ_nome.id}`);
          elemento.classList.remove("sumir");
        }
      });
    } 
  });
  if(!champ_permitidos.find(nome => nome.toLowerCase().includes(escreva.value.toLowerCase()))){
    champ.forEach((champ_nome) => {
        
          const elemento = document.querySelector(`#${champ_nome.id}`);
          elemento.classList.remove("sumir");
        
      });
      alert("Campeão não encontrado")
  }
}
