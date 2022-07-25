
const imagem = document.querySelector("#imagem")
const titulo = document.querySelector("h1")



fetch("http://ddragon.leagueoflegends.com/cdn/12.13.1/data/en_US/champion/Aatrox.json").then(res => res.json())
.then(conteudo => {
      console.log(conteudo.data.Aatrox)
      imagem.src = conteudo.data.Aatrox.image.full
      titulo.innerText = conteudo.data.Aatrox.name
})



