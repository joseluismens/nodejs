
function bienvenida(lector, callback){
    lector.question('Cual es su nombre?', nombre => {
       
        console.log('Hola %s !', nombre);
        callback(nombre);
    });
}
module.exports=bienvenida;