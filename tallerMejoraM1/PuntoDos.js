//tradicional
/*
function clasificarBiotipo(estatura){
    if (estatura<1.70) {
        return(` Biotipo bajo`)
    } else if (estatura>=1.70 && estatura<1.80) {
        return(` Biotipo promedio`)
    } else if (estatura>=1.80) {
        return(` Biotipo superior`)
    } else {
        return(` Estatura invalida`)
    } 
}*/
// function flecha con operador ternario
let clasificarBiotipo=(estatura)=>(estatura<1.70) ? 
        (` Biotipo bajo`)
    : (estatura>=1.70 && estatura<1.80) ?
        (` Biotipo promedio`)
    : (estatura>=1.80) ?
        (` Biotipo superior`)
    :
        (` Estatura invalida`);
     


console.log(clasificarBiotipo(2.00));