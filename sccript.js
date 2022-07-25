const nick = document.querySelector("#nick_input")
const form = document.querySelector("form")
const botao_confirmar = document.querySelector("#confirmar")

form.addEventListener("submit",confirmar)
botao_confirmar.addEventListener("click",confirmar)

let verificar = false

function confirmar(event) {
    event.preventDefault()
    
    if(nick.value){
        botao_confirmar.classList.remove("nao_confirmad")
        botao_confirmar.classList.add("ok")
        verificar = true
    }
    else{
        alert("Preencha Corretamente")
        botao_confirmar.classList.remove("ok")
        botao_confirmar.classList.add("nao_confirmad")
        verificar = false

    }
}

function sup() {
    if(verificar == true){
        window.location.pathname = "suporte.html"
    }
    else{
        alert("Nick não infromado")
    }
}

function adc() {
    if(verificar == true){
        window.location.pathname = "adc.html"
    }
    else{
        alert("Nick não infromado")
    }
}