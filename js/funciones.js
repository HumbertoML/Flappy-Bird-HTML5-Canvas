function randomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function resetGame(){
    buclePrincipal.mseg = 0;
    grados = 0;
    Pajaro = new Rectangulo(cw/6,ch/3,40,40,"#fff");
    Suelo = new Rectangulo(0,ch-100,cw,250,"#ddd");
    TuberiaUp = new Rectangulo(0,0,60, 0,"#fff");
    TuberiaDown = new Rectangulo(0,0,60, 0,"#fff");
}