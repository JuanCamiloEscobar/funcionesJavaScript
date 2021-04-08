//tradicional
/*
let temperaturaMax=100;  
let temperaturaMin=50;

function calculaTemperatura(temperaturaMax,temperaturaMin){
    return (temperaturaMax+temperaturaMin)/2
}

console.log(` 
 ${calculaTemperatura(temperaturaMax,temperaturaMin)}`);*/

 //flecha
let temperaturaMax=100;  
let temperaturaMin=50;

let calculaTemperatura=(temperaturaMax,temperaturaMin)=>(temperaturaMax+temperaturaMin)/2;


console.log(` 
 ${calculaTemperatura(temperaturaMax,temperaturaMin)}`);