function menu(lector,callback){
    console.log ('MENU');
    console.log ('1.- Jugar');
    console.log ('2.- Mejores puntajes');
    console.log ('3.- Salir');

    lector.question('Escriba su opción: ', opcion => {
        callback(opcion);
    });
}
module.exports=menu;