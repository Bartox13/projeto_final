const nick = document.querySelector("#nick_input")
const form = document.querySelector("form")
const botao_confirmar = document.querySelector("#confirmar")

form.addEventListener("submit",confirmar)
botao_confirmar.addEventListener("click",confirmar)



function confirmar(event) {
    event.preventDefault()
    
    if(nick.value){
        window.location.href = "suporte_inicio.html"
    }
    else{
        alert("Preencha Corretamente")
        botao_confirmar.classList.remove("ok")
        botao_confirmar.classList.add("nao_confirmad")

    }
}
