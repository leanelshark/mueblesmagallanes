var parrafos = document.getElementsByClassName('texto'),
    rojo = document.getElementById('rojo'),
    verde = document.getElementById('verde'),
    azul = document.getElementById('azul'),
    bgnegro = document.getElementById('bgnegro'),
    bgamarillo = document.getElementById('bgamarillo');

rojo.addEventListener('click', function()){

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = red;
        
    }
}

azul.addEventListener('click', function()){

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = blue;
        
    }
}

verde.addEventListener('click', function()){

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.color = green;
        
    }
}

bgnegro.addEventListener('click', function()){

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor = black;
        
    }
}

bgamarillo.addEventListener('click', function()){

    for (let i = 0; i < parrafos.length; i++) {
        parrafos[i].style.backgroundColor = yellow;
        
    }
}