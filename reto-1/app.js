const readline = require('readline');
var bienvenidaFuncion=require('./librerias/bienvenida.js');
var menuFuncion=require('./librerias/menu.js');
var jugarFuncion=require('./librerias/jugar.js');
var lector= readline.createInterface({
    input:  process.stdin,
    output: process.stdout
});

var nombreJugador;
var tiempoInicio;
var tiempoFinal;
var jugadores=[];

function BienvenidaCallback(nombre){
    nombreJugador = nombre;
     menuFuncion(lector,menu);
}


function menu(opcion){
    
        switch(opcion){
            case '1':
                jugarFuncion(lector,jugar);
                break;
            case '2':
                console.log('Mejores Jugadores: ');
                mostrarJugadores();
                break;
            case '3':
                console.log('Adios %s!', nombreJugador);
                lector.close();
                process.exit(0);
                break; 
            case '4':
                console.log('Cambiar de jugador');
                bienvenida();
            default:
                console.log('opción no encontrada');
                
                break;       
        }
    
}

function jugar(tiempoTotal){
    jugadores.push({nombreJugador,tiempo:tiempoTotal}); 
    jugadores.sort((a, b) => (a.tiempo) - (b.tiempo)); //funcion para ordenar de manera ascendente segun 

}

function mostrarJugadores(){
    console.log(jugadores[0],jugadores[1],jugadores[2]);
    menu();
}

bienvenidaFuncion(lector,BienvenidaCallback);
