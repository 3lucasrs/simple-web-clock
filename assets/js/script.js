const hora = document.querySelector('#hora');
const minutos = document.querySelector('#minutos');
const segundos = document.querySelector('#segundos');

function relogio(){
    let data = new Date();

    h = data.getHours().toString().length < 2 ? '0' + data.getHours() : data.getHours();
    m = data.getMinutes().toString().length < 2 ? '0' + data.getMinutes() : data.getMinutes();
    s = data.getSeconds().toString().length < 2 ? '0' + data.getSeconds() : data.getSeconds();

    hora.innerHTML = h;
    minutos.innerHTML = m;
    segundos.innerHTML = s;
}

setInterval(relogio, 1000);