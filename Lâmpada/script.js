let ligarANDdesligar = document.getElementById("ligarANDdesligar")
let lampada = document.getElementById("lampada")

function ifQuebrada(){ //funçao que vai verificar se a lampada está quebrada, parar as outras interações quando estiver quebrada
return lampada.src.indexOf("quebrada") > -1//O indexOf é utilizado para encontrar um valor dentro de uma string ou array, 
                                           //caso o valor não seja encontrado, ele retorna -1
}

function ligarLampada() {
    if ( !ifQuebrada() ){//essa exclamação é uma negaçao,se a lampada nao estiver quebrada vai trocar por uma lamp ligada
    lampada.src = "img/ligada.jpg"
    }
}

function desligarLampada() {
    if ( !ifQuebrada() ){
    lampada.src = "img/desligada.jpg"
    }
}

function quebrarLampada() {
    lampada.src = "img/quebrada.jpg"
}

function lampadaligarANDdesligar(){
   if(ligarANDdesligar.textContent === "Ligar"){
   ligarLampada()
   ligarANDdesligar.textContent ="Desligar"
   }else{
    desligarLampada()
    ligarANDdesligar.textContent = "Ligar"
   }

   }

ligarANDdesligar.addEventListener("click", lampadaligarANDdesligar)
lampada.addEventListener("mouseover", ligarLampada)
lampada.addEventListener("mouseleave", desligarLampada)
lampada.addEventListener("dblclick", quebrarLampada)
