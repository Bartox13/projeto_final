const parametro_busca = new URLSearchParams(window.location.search);
const nome_champ = parametro_busca.get("champ")
const icone = document.querySelector("#icone")
const titulo_nome = document.querySelector("#titulo_nome")
const sub_nome = document.querySelector("#sub_nome")
const historia_texto = document.querySelector("#historia_texto")
const habilidade_Q_disc = document.querySelector("#habilidade_Q_disc")
const habilidade_Q_icone = document.querySelector("#habilidade_Q_icone")
const mana_Q = document.querySelector("#mana_Q")
const cooldown_Q = document.querySelector("#cooldown_Q")
const habilidade_W_icone = document.querySelector("#habilidade_W_icone")
const habilidade_W_disc = document.querySelector("#habilidade_W_disc")
const mana_W = document.querySelector("#mana_W")
const cooldown_W = document.querySelector("#cooldown_W")
const habilidade_E_icone = document.querySelector("#habilidade_E_icone")
const habilidade_E_disc = document.querySelector("#habilidade_E_disc")
const mana_E = document.querySelector("#mana_E")
const cooldown_E = document.querySelector("#cooldown_E")
const habilidade_R_icone = document.querySelector("#habilidade_R_icone")
const habilidade_R_disc = document.querySelector("#habilidade_R_disc")
const mana_R = document.querySelector("#mana_R")
const cooldown_R = document.querySelector("#cooldown_R")
const passiva_icone = document.querySelector("#passiva_icone")
const passiva_disc = document.querySelector("#passiva_disc")
const nome_passiva = document.querySelector("#nome_passiva")
const nome_Q = document.querySelector("#nome_Q")
const nome_W = document.querySelector("#nome_W")
const nome_E = document.querySelector("#nome_E")
const nome_R = document.querySelector("#nome_R")
const classe = document.querySelector("#classe")
const vida = document.querySelector("#vida")
const vda_nivel = document.querySelector("#vida_nivel")
const regen_vida = document.querySelector("#regen_vida")
const regen_vida_nivel = document.querySelector("#regen_vida_nivel")
const mana = document.querySelector("#mana")
const mana_nivel = document.querySelector("#mana_nivel")
const regen_mana = document.querySelector("#regen_mana")
const regen_mana_nivel = document.querySelector("#regen_mana_nivel")
const velocidade_movimento = document.querySelector("#velocidade_movimento")
const alcance = document.querySelector("#alcance")
const dano_atk = document.querySelector("#dano_atk")
const dano_atk_nivel = document.querySelector("#dano_atk_nivel")
const velocidade_atk = document.querySelector("#velocidade_atk")
const velocidade_atk_nivel = document.querySelector("#velocidade_atk_nivel")
const armadura = document.querySelector("#armadura")
const armadura_nivel = document.querySelector("#armadura_nivel")
const res_magica = document.querySelector("#res_magica")
const res_magica_nivel = document.querySelector("#res_magica_nivel")
const lista_dicas_aliados = document.querySelector("#lista_dicas_aliados")
const lista_dicas_inimigos = document.querySelector("#lista_dicas_inimigo")
const dicas_aliados_tudo = document.querySelector("#dicas_aliados_tudo")
const dicas_inimigos_tudo = document.querySelector("#dicas_inimigos_tudo")

console.log(nome_champ)
let champ_atual = nome_champ


fetch(`http://ddragon.leagueoflegends.com/cdn/12.13.1/data/pt_BR/champion/${nome_champ}.json`).then(res => res.json())
.then(conteudo => {
      let nome
      if(nome_champ == "Alistar"){
            nome=conteudo.data.Alistar
           
      }else
      if(nome_champ == "Amumu"){
            nome=conteudo.data.Amumu
            
      }else
      if(nome_champ == "Ashe"){
            nome=conteudo.data.Ashe
           
      }else
      if(nome_champ == "Bard"){
            nome=conteudo.data.Bard
            
      }else
      if(nome_champ == "Blitzcrank"){
            nome=conteudo.data.Blitzcrank
            
      }else
      if(nome_champ == "Brand"){
            nome=conteudo.data.Brand
            
      }else
      if(nome_champ == "Braum"){
            nome=conteudo.data.Braum
           
      }else
      if(nome_champ == "Galio"){
            nome=conteudo.data.Galio
            
      }else
      if(nome_champ == "Janna"){
            nome=conteudo.data.Janna
            
      }else
      if(nome_champ == "Karma"){
            nome=conteudo.data.Karma
            
      }else
      if(nome_champ == "Leona"){
            nome=conteudo.data.Leona
            
      }else
      if(nome_champ == "Lulu"){
            nome=conteudo.data.Lulu
            
      }else
      if(nome_champ == "Lux"){
            nome=conteudo.data.Lux
            
      }else
      if(nome_champ == "Maokai"){
            nome=conteudo.data.Maokai
            
      }else
      if(nome_champ == "Morgana"){
            nome=conteudo.data.Morgana
            
      }else
      if(nome_champ == "Nami"){
            nome=conteudo.data.Nami
            
      }else
      if(nome_champ == "Nautilus"){
            nome=conteudo.data.Nautilus
            
      }else
      if(nome_champ == "Pyke"){
            nome=conteudo.data.Pyke
            
      }else
      if(nome_champ == "Rakan"){
            nome=conteudo.data.Rakan
            
      }else
      if(nome_champ == "Rell"){
            nome=conteudo.data.Rell
            
      }else
      if(nome_champ == "Renata"){
            nome=conteudo.data.Renata
            
      }else
      if(nome_champ == "Senna"){
            nome=conteudo.data.Senna
            
      }else
      if(nome_champ == "Seraphine"){
            nome=conteudo.data.Seraphine
            
      }else
      if(nome_champ == "Shaco"){
            nome=conteudo.data.Shaco
            
      }else
      if(nome_champ == "Sona"){
            nome=conteudo.data.Sona
            
      }else
      if(nome_champ == "Soraka"){
            nome=conteudo.data.Soraka
            
      }else
      if(nome_champ == "Swain"){
            nome=conteudo.data.Swain
            
      }else
      if(nome_champ == "TahmKench"){
            nome=conteudo.data.TahmKench
            
      }else
      if(nome_champ == "Taric"){
            nome=conteudo.data.Taric
            
      }else
      if(nome_champ == "Thresh"){
            nome=conteudo.data.Thresh
            
      }else
      if(nome_champ == "Velkoz"){
            nome=conteudo.data.Velkoz

      }else
      if(nome_champ == "Xerath"){
            nome=conteudo.data.Xerath
            
      }else
      if(nome_champ == "Yuumi"){
            nome=conteudo.data.Yuumi
            
      }else
      if(nome_champ == "Zilean"){
            nome=conteudo.data.Zilean
            
      }
      if(nome_champ == "Zyra"){
            nome=conteudo.data.Zyra
            
      }
      console.log(nome)
      titulo_nome.innerText = nome.name
      

      nome_passiva.innerText = "Passiva - "+ nome.passive.name
      nome_Q.innerText = "Q - "+ nome.spells[0].name
      nome_W.innerText = "W - "+ nome.spells[1].name
      nome_E.innerText = "E - "+ nome.spells[2].name
      nome_R.innerText = "R - "+ nome.spells[3].name

      if(nome.tags[1]){
            classe.innerText = nome.tags[0] +" / "+ nome.tags[1]
      }
      else{
            classe.innerText = nome.tags[0]
      }


let i,x
for(i=0;;i++){
      if(nome.allytips[i]){
            let item = document.createElement("li")
            item.innerText = nome.allytips[i]
            lista_dicas_aliados.appendChild(item)
            continue
      }
      else{
            break
      }
}
console.log(i)
if(i == 0){
      dicas_aliados_tudo.classList.remove("dicas_aliados_tudo")
      dicas_aliados_tudo.classList.add("sumir")
      
}

for(x=0;;x++){
      if(nome.enemytips[x]){
            let item = document.createElement("li")
            item.innerText = nome.enemytips[x]
            lista_dicas_inimigos.appendChild(item)
            continue
      }
      else{
            break
      }
}

if(x == 0){
      dicas_inimigos_tudo.classList.remove("dicas_inimigos_tudo")
      dicas_inimigos_tudo.classList.add("sumir")
      
}


 vida.innerText = nome.stats.hp
 vda_nivel.innerText =  nome.stats.hpperlevel
 regen_vida.innerText =  nome.stats.hpregen
 regen_vida_nivel.innerText =  nome.stats.hpregenperlevel
 mana.innerText =  nome.stats.mp
 mana_nivel.innerText =  nome.stats.mpperlevel
 regen_mana.innerText =   nome.stats.mpregen
 regen_mana_nivel.innerText =   nome.stats.mpregenperlevel
 velocidade_movimento.innerText =   nome.stats.movespeed
 alcance.innerText =  nome.stats.attackrange 
 dano_atk.innerText =   nome.stats.attackdamage
 dano_atk_nivel.innerText =   nome.stats.attackdamageperlevel
 velocidade_atk.innerText =   nome.stats.attackspeed
 velocidade_atk_nivel.innerText =  nome.stats.attackspeedperlevel
 armadura.innerText =  nome.stats.armor
 armadura_nivel.innerText =   nome.stats.armorperlevel
 res_magica.innerText =   nome.stats.spellblock
 res_magica_nivel.innerText =  nome.stats.spellblockperlevel








      mana_Q.innerText = nome.spells[0].costBurn
      mana_W.innerText = nome.spells[1].costBurn
      mana_E.innerText = nome.spells[2].costBurn
      mana_R.innerText = nome.spells[3].costBurn
      cooldown_Q.innerText = nome.spells[0].cooldownBurn
      cooldown_W.innerText = nome.spells[1].cooldownBurn
      cooldown_E.innerText = nome.spells[2].cooldownBurn
      cooldown_R.innerText = nome.spells[3].cooldownBurn
      sub_nome.innerText = nome.title
      historia_texto.innerText = nome.lore
      habilidade_Q_disc.innerText = nome.spells[0].description
      habilidade_W_disc.innerText = nome.spells[1].description
      habilidade_E_disc.innerText = nome.spells[2].description
      habilidade_R_disc.innerText = nome.spells[3].description
      passiva_disc.innerText = nome.passive.description
      habilidade_R_icone.src = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${nome.spells[3].image.full}`
      habilidade_W_icone.src = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${nome.spells[1].image.full}`
      habilidade_E_icone.src = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${nome.spells[2].image.full}`
      habilidade_Q_icone.src =`http://ddragon.leagueoflegends.com/cdn/12.13.1/img/spell/${nome.spells[0].image.full}`
      icone.src = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/champion/${nome.image.full}`
      passiva_icone.src = `http://ddragon.leagueoflegends.com/cdn/12.13.1/img/passive/${nome.passive.image.full}`
      

})



