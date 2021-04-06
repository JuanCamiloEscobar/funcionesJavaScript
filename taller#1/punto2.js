//tradicional
/*
let codigoCapitan1 = "ARQ2555: Sara Bel-Sun";
let codigoCapitan2 = "ARQ2556: Nodin Chavdri";
let codigoCapitan3 = "ARQ2557: Finn";

console.log(`${codigoCapitan1} ${codigoCapitan1} ${codigoCapitan1}`);
console.log();

function separaCodigoCapitan(codigoCapitan){
    return codigoCapitan.split(':')[1]
}

console.log(separaCodigoCapitan(codigoCapitan1));
console.log(separaCodigoCapitan(codigoCapitan2));
console.log(separaCodigoCapitan(codigoCapitan3));
*/
//flecha
let codigoCapitan1 = "ARQ2555: Sara Bel-Sun";
let codigoCapitan2 = "ARQ2556: Nodin Chavdri";
let codigoCapitan3 = "ARQ2557: Finn";

console.log(`
 ${codigoCapitan1} 
 ${codigoCapitan1}
 ${codigoCapitan1}
 `);

let separaCodigoCapitan=(codigoCapitan)=>codigoCapitan.split(':')[1]


console.log(separaCodigoCapitan(codigoCapitan1));
console.log(separaCodigoCapitan(codigoCapitan2));
console.log(separaCodigoCapitan(codigoCapitan3));
