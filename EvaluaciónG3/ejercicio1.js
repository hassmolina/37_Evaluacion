// INICIO
// variable piedra
// variable papel
// variable tijera
// Para (var i=0; i<=3; i++)
// Pedir jugador 1 (piedra, papel, tijera)
// Leer piedra/papel/tijera
// Pedir jugador 2 (piedra, papel, tijera)
// Leer piedra/papel/tijera
// If piedra>papel 
// entonces 
// Imprimir gana piedra
// Else if papel>piedra 
// entonces
// Imprimir gana papel
// Else if tijera>papel
// entonces
// Imprimir gana tijera
// Else papel == papel || tijera == tijera || piedra == piedra
// entonces
// Imprimir son empate
// FIN

var piedra;
var papel;
var tijera;
for (var i=1; i<=3; i++){
	var jugador1 = prompt("Ingresa piedra, papel o tijera");
	var jugador2 = prompt("Ingresa piedra, papel o tijera");
	if(piedra>tijera){
		alert("gana piedra");
	}else if(piedra<papel){
		alert("gana papel");
	}else if(tijera>papel){
		alert("gana tijera");
	}
	else (tijera==tijera||papel==papel||piedra==piedra){
		alert("empate");
	}
}
