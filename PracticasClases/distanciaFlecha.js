//entradas
let coordenadaFinalX=70;
let coordenadaFinalY=-50;
let coordenadaInicialX=0;
let coordenadaInicialY=0;

//Funcion flecha
let calcularDistancia=(xinicial,xfinal,yinicial,yfinal) => Math.sqrt((Math.pow((xfinal-xinicial),2))+(Math.pow((yfinal-yinicial),2)));
    


console.log(calcularDistancia(coordenadaInicialX,coordenadaFinalX,coordenadaInicialY,coordenadaFinalY));