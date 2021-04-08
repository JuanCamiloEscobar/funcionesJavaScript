//tradicional
/*
function robarPlanos(idPlano){

    if(idPlano>0 && idPlano<=10){
        
        let mensaje="El plano que se consiguio fue el "+idPlano;
        return (mensaje);
        }else{
            let error="pilas!! no te has robado un plano real"
            return(error);
        }

}
     Flecha con operador ternario
*/
let robarPlanos=(idPlano,arrancarNave) => idPlano>0 && idPlano<=10 ?   
        arrancarNave(`
            El plano que se consiguio fue el ${idPlano} Estamos despegando!!`)
        :
         arrancarNave(`
            pilas!! no te has robado un plano real no podemos arrancar!!`);  
         
robarPlanos(11,function(robo){
    console.log(robo)
});
        
