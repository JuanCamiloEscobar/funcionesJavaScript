/*let numeroUno=5;
let numeroDos=10;
console.log('Hola mundo '+(numeroUno)+'Esto es un numero');
console.log(`Hola mundo ${numeroUno} Esto + es un numero`);*/


/*let nombre="PEDRO PEREZ";
if(true){
    let nombre="CATALINA PEREZ";
}
nombre="MIGUEL PEREZ";
const EDAD=40;
console.log(`Buenas tardes ${nombre} su edad es ${EDAD}`);*/



//funciones

//ingredientes
let nombre1="CATALINA PEREZ";
let nombre2="JORGE PEREZ";

//proceso manual
/*console.log("Buenas tardes "+nombre1);
console.log("Buenas tardes "+nombre2);*/


//proceso automatico (FUNCION)
function saludarUsuario(nombreUsuario){

    console.log("Buenas tardes "+nombreUsuario);

}

saludarUsuario(nombre1);
saludarUsuario(nombre2);