
function jugar(lector,callback){
    console.log('Jugemos');
    let numeroIncognito= parseInt(Math.random()*10);
    tiempoInicio = Date.now();
    consultar(numeroIncognito,lector,callback);

}

function consultar(numeroIncognito,lector,callback){
    lector.question('Ingrese un numero: ', numero => {
        numero = parseInt(numero);
        if(numero < numeroIncognito){
            console.log('Le falta');
            consultar(numeroIncognito);
        } else if(numero > numeroIncognito ){
            console.log('Le sobra');
            consultar(numeroIncognito);
        }else{
            console.log("Felicitaciones");
            tiempoFinal=Date.now();
           callback(tiempoFinal-tiempoInicio);
        
        }
    });
}
module.exports=jugar;