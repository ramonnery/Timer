let hora = 0
let minuto = 0
let segundo = 0
let milissegundo = 0
let timer

document.querySelector('.btn-iniciar').onclick = () => iniciar()
document.querySelector('.btn-pausar').onclick = () => pausar()
document.querySelector('.btn-resetar').onclick = () => resetar()

function cronometro() {
    if((milissegundo += 10) == 1000) {
        milissegundo = 0
        segundo++
    }

    if(segundo == 60) {
        segundo = 0
        minuto++
    }
    
    if(minuto == 60) {
        minuto = 0
        hora++
    }

    document.getElementById('milissegundo').innerHTML = milissegundo < 100 ? '0'+milissegundo : milissegundo
    document.getElementById('segundo').innerHTML = segundo < 10 ? '0'+segundo : segundo
    document.getElementById('minuto').innerHTML = minuto < 10 ? '0'+minuto : minuto
    document.getElementById('hora').innerHTML = hora < 10 ? '0'+hora : hora
    
}

function iniciar() {
    
    pausar()
    timer = setInterval(() => cronometro(), 10)
}

function pausar() {
    clearInterval(timer)
}


function resetar() {

    pausar()

    milissegundo = 0
    segundo = 0
    minuto = 0
    hora = 0

    document.getElementById('milissegundo').innerHTML = '000'
    document.getElementById('segundo').innerHTML = '00'
    document.getElementById('minuto').innerHTML = '00'
    document.getElementById('hora').innerHTML = '00'
}

