const escreva = document.querySelector("#escreva");
const botao = document.querySelector("#botao");
const form = document.querySelector("#escolha");
const nick = localStorage.getItem("nick")
const nick_antigo = document.querySelector("#nick h3")
const corpo = document.querySelector("#corpo")



nick_antigo.innerText = nick  

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

// fetch(`https://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion.json`).then(res => res.json())
//   .then(conteudo => {
//     let pesquisa = ["Support"]
//     //console.log(conteudo.data)
//     //console.log(conteudo.data.Ashe)
//     //console.log(conteudo.data["Ashe"])
//     for(let champ in conteudo.data){
//         let found = conteudo.data[champ].tags.every(r => pesquisa.includes(r))
        
//         if(found){
//             console.log(conteudo.data[champ])
//         }
//     }

//   })

function ler(event) {
  event.preventDefault();
  if(escreva.value.toLowerCase() == "bardo"){
    escreva.value = "bard"
  }
  if(champ_permitidos.find(nome => nome.toLowerCase() == escreva.value.toLowerCase())){ //TOLOWERCASE() faz ser tudo minusculo

       window.location.href = `suporte.html?champ=${escreva.value}`
   }
   else{
       alert("Campeão não encontrado")
       escreva.value = ""
       
   }
   
}



champ_permitidos.forEach(nome => {
    let nome_corrigido = nome
    if(nome == "TahmKench"  ){
        nome_corrigido = "Tahm_Kench"
    }else
    if(nome == "Renata"){
        nome_corrigido = "Renata_Glasc"
    }else
    if(nome == "Velkoz"){
        nome_corrigido = "Vel'Koz"
    }else
    if(nome == "Bard"){
        nome_corrigido = "Bardo"
    }

    //o + para ir add
    corpo.innerHTML += `<a href="./suporte.html?champ=${nome}"> 
    <div id="${nome}" class="champ">
        <img src="http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${nome}.png" alt="${nome}" height="90px">
        <p class="nome">${nome_corrigido}</p>
    </div>
    </a>`
    
})

// const champ = document.querySelectorAll(".champ")

// champ.forEach(champ_nome =>{
//     champ_nome.addEventListener("mouseover",()=>verificar(champ_nome))
    
    
// })

// function verificar(champ_nome){
//     console.log(champ_nome.id)
//    const elemento = document.querySelector(`#${champ_nome.id} img`)
//    elemento.src = "http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/Alistar.png"
   
// }

