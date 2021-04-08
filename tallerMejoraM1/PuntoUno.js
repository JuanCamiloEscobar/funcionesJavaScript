//tradicional
/*
function calcularEdad(fechaNacimiento){
    return (2021)-(fechaNacimiento)
}*/
//con function de flecha
let calcularEdad=(fechaNacimiento)=>(2021-fechaNacimiento);

console.log(` ${calcularEdad(1997)}`);