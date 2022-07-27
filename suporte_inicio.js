const escreva = document.querySelector("#escreva")
const botao = document.querySelector("#botao")
const form = document.querySelector("#escolha")

botao.addEventListener("click",ler)
form.addEventListener("submit",ler)

function ler(event){
event.preventDefault()
if(escreva.value == "Alistar"){
    console.log(escreva.value)
    window.location.href = `suporte.html?champ=${escreva.value}`
   
}else
if(escreva.value == "Amumu"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Ashe"){
    window.location.href = `suporte.html?champ=${escreva.value}`
}else
if(escreva.value == "Bard"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Blitzcrank"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Brand"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Braum"){
    window.location.href = `suporte.html?champ=${escreva.value}`
   
}else
if(escreva.value == "Galio"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Janna"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Karma"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Leona"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Lulu"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Lux"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Maokai"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Morgana"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Nami"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Nautilus"){
    window.location.href = `suporte.html?champ=${escreva.value}`
}else
if(escreva.value == "Pyke"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Rakan"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Rell"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Renata"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Senna"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Seraphine"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Shaco"){
    window.location.href = `suporte.html?champ=${escreva.value}`
}else
if(escreva.value == "Sona"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Soraka"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Swain"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "TahmKench"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Taric"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Thresh"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Velkoz"){
    window.location.href = `suporte.html?champ=${escreva.value}`

}else
if(escreva.value == "Xerath"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Yuumi"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Zilean"){
    window.location.href = `suporte.html?champ=${escreva.value}`
    
}else
if(escreva.value == "Zyra"){
    window.location.href = `suporte.html?champ=${escreva.value}`
}else{
    alert("Campeão não encontrado")
    escreva.value = ""
    
}

}

