var seg = 0
var min = 0
var hora = 0
var intervalo

function Doisdigitos(digito) {
    if(digito<10) {
        return('0'+digito)
    } else {
        return (digito)
    } 
}

function star(){
    contador()
   intervalo = setInterval(contador,1000)
}

function pause(){
 clearInterval(intervalo)
}

function stop(){
 clearInterval(intervalo)
 seg = 0
 min = 0
 document.getElementById('contador').innerText='00:00:00'
}


function contador(){
    seg++
    if(seg==60){
        min++
        seg=0
        if(min == 60){
            min = 0
            hora++
        }
    }
    document.getElementById('contador').innerText =Doisdigitos(hora)+':'+Doisdigitos(min)+':'+Doisdigitos(seg) 
}