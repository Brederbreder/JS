var altura
var largura
var vidas = 1
var time = 10
var mosquitoTempo = 1500

var nivel = window.location.search
nivel.replace('?', '')

if(nivel == 'normal') {
    mosquitoTempo = 1500
} else if(nivel == 'dificil') {
    mosquitoTempo = 1000
} else if(nivel == 'impossivel') {
    mosquitoTempo = 500
}

var cronometro = setInterval(function(){
    time -= 1
    if(time < 0){
        clearInterval(cronometro)
        clearInterval(criaMosca)
        window.location.href = 'win.html'
    } else {
        document.getElementById('cronometro').innerHTML = time
    }
}, 1000)

function adjustSize() {
    altura = window.innerHeight
    largura = window.innerWidth
}

adjustSize()

function randomPos() {
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
        if(vidas > 3){
            window.location.href = 'end_game.html'
        } else {
            document.getElementById('v' + vidas).src = "img/coracao_vazio.png"
            vidas++
        }
    }

    var posX = (Math.floor(Math.random() * largura)) - 90
    var posY = (Math.floor(Math.random() * altura)) - 90

    posX = posX < 0 ? 0 : posX
    posY = posY < 0 ? 0 : posY

    var mosquito = document.createElement('img')
    mosquito.src = 'img/mosquito.png'
    mosquito.className = randomSize() + ' ' + randomDirection()
    mosquito.style.left = posX + 'px'
    mosquito.style.top = posY + 'px'
    mosquito.style.position = 'absolute'
    document.body.appendChild(mosquito)
    mosquito.id = 'mosquito'
    mosquito.onclick = function() {
        this.remove()
    }
    
    console.log(mosquito.className)
}

function randomSize() {
    var classe = Math.floor(Math.random() * 3)
    switch(classe) {
        case 0:
            return 'mosquito1'
        case 1:
            return 'mosquito2'
        case 2:
            return 'mosquito3'
    }
}

function randomDirection() {
    var classe = Math.floor(Math.random() * 2)
    switch(classe) {
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}