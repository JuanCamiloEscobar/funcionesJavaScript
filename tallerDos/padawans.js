//tradicional
/*function asignarActividad(edad){
    if (edad<=15) {
        edad(` Manejo de la fuerza`)
    } else {
        edad(` Manejo del sable de luz`)
    }
}
*/
let nombre="padawan";
let planeta="yavin4";
//let edad=16;
let estatura="1 metro"


// flecha con operador ternario
let asignarActividad=(edad,actividad)=>(edad<=15) ? 
      actividad(`Manejo de la fuerza con ${edad} años`)
    : actividad(`Manejo del sable de luz con ${edad} años`);

asignarActividad(12,function(result){
    console.log(` 
                 ${nombre}
                 ${planeta}
                 ${estatura}
                 ${result}
                   `);
});    

    
