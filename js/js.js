//ENTORNO
var g = 1.622;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
//NAVE
var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var v = 0;
var c = 100;
var a = g; //la aceleración cambia cuando se enciende el motor de a=g a a=-g (simplificado)
//MARCADORES
var velocidad = null;
var altura = null;
var combustible = null;
var singasofa = false;
//Al cargar por completo la página...
var siempreV = null;
var siempreA = null;
//Cambio de nave
var NaveCambio = 1;
//Niveles 
var VCaida = 5;


window.onload = function InicioJuego(){


	velocidad = document.getElementById("velocidad");
	altura = document.getElementById("altura");
	combustible = document.getElementById("gastofuel");

	//encender/apagar el motor al hacer click en la pantalla


	/*encender/apagar al apretar/soltar una tecla
	* document.onkeydown = motorOn;
	*document.onkeyup = motorOff;
	*/
	//Empezar a mover la nave justo después de cargar la página
	stop();

	//VALIDAR BOTONES INICIAR EL JUEGO

	document.getElementById("BotonPlay").onclick=function(){play();};
	document.getElementById("BotonPause").onclick=function(){pause();};
	document.getElementById('BotonReiniciar').onclick=function(){Restart();};
	//Sonido
	document.getElementById('BotonSonido').onclick=function(){sonido();};
	document.getElementById('BotonSonidoNo').onclick=function(){nosonido();};

	document.getElementById("BotonAyuda").onclick=function(){help();};
	document.getElementById("CerrarAyuda").onclick=function(){closeHelp();};

	document.getElementById("BotonAjustes").onclick=function(){settings();};
	document.getElementById("CerrarAjustes").onclick=function(){Closesettings();};



	
	//Niveles
	document.getElementById("Facil").onclick=function(){facil();};
	document.getElementById("Normal").onclick=function(){normal();};
	document.getElementById("Difícil").onclick=function(){dificil();};
	document.getElementById("Imposible").onclick=function(){imposible();};



	//Volver a jugar
	document.getElementById("VolverAjugar").onclick=function(){Restart();};

	//Desplegar menu
	document.getElementById("BotonMenu").onclick=function(){menu();};
	document.getElementById('cerrarMenu').onclick=function(){cerrartodo();};



	//Botones movil
	document.getElementById('S-Replay').onclick=function(){Restart();};
	document.getElementById('S-Setting').onclick=function(){
		settings();
		closemenu();
	};
	document.getElementById('S-Help').onclick=function(){
		help();
		closemenu();
	};

	document.getElementById('S-Sound').onclick=function(){Sonido_S();};
	document.getElementById('NS-Sound').onclick=function(){NSonido_S();};
	//Game Over
	document.getElementById('VolverAJugar').onclick=function(){Restart();};

	//Ir a about
	document.getElementById('Abutton').onclick=function(){direccion();};


	//Cambiar naves
	document.getElementById("CambiarNave").onclick=function(){otranave();};
}

function direccion(){
location.href='About.html';
}

function Sonido_S(){
		document.getElementById('demo').play();
		document.getElementById('S-Sound').style.display="none";
		document.getElementById('NS-Sound').style.display="block";

}
function NSonido_S(){
		document.getElementById('demo').pause();
		document.getElementById('NS-Sound').style.display="none";
		document.getElementById('S-Sound').style.display="block";

}


//Mostrar menu
function menu(){
	document.getElementById("SmartphoneMenu").style.display="block";
	closeHelp();
	Closesettings();
	pause();
}
function closemenu(){
	document.getElementById("SmartphoneMenu").style.display="none";
}


//Cambiar nave
function otranave(){
	if (NaveCambio==1){
		document.getElementById("imgNave").style.display="none";
		document.getElementById("imgCohete").style.display="block";
		NaveCambio=2;
	}
	else if (NaveCambio==2){
		document.getElementById("imgCohete").style.display="none";
		document.getElementById("imgNave").style.display="block";
		NaveCambio=1;
	}
}

//Resest solo para los niveles de dificultat
function reset(){

	clearInterval(timer);
	y = 0;
	v = 0;
	g = 1.622;
	a = g;
	dt = 0.016683;
	combustible.style.height = c +"%";
	document.getElementById("BotonPause").style.display="none";
	document.getElementById('BotonPlay').style.display="inline-block";
	BotonOff();
	cerrartodo();
}
//Niveles de dificultat
function facil(){
	c = 100;
	reset();
	cerrartodo();
	play();
}
function normal(){
	c = 75;
	VCaida = 4;
	reset();
	cerrartodo();
	play();
}
function dificil(){
	c = 50;
	VCaida = 3;
	reset();
	cerrartodo();
	play();
}
function imposible(){
	c = 20;
	VCaida = 1;
	reset();
	cerrartodo();
	play();
}

function cerrartodo(){
	Closesettings();
	closeHelp();
	document.getElementById("loser").style.display="none";	
	document.getElementById("winner").style.display="none";
	document.getElementById("SmartphoneMenu").style.display="none";
}


//Botones
function BotonOn(){
		document.getElementById('BotonOn').style.display="none";
		document.getElementById('BotonOff').style.display="inline-block";
  		motorOn();
}
function BotonOff(){
		document.getElementById('BotonOn').style.display="inline-block";
		document.getElementById('BotonOff').style.display="none";
		motorOff();
}

//Definición de funciones
function start(){
	//cada intervalo de tiempo mueve la nave
	timer=setInterval(function(){ moverNave(); }, dt*1000);


}



function stop(){
	clearInterval(timer);
	BotonOff();
}

function moverNave(){
	//cambiar velocidad y posicion
	v +=a*dt;
	y +=v*dt;
	//actualizar marcadores

	//Velocidad dismepre en positivo
	if (v > 0) {
		siempreV = v;
	}else{
		siempreV = -v;
	}
	//Altura simpre en positivo
	if (y > 0) {
		siempreA = y;
	}else{
		siempreA =(-1)*y;
	}

	
	//mover hasta que top sea un 70% de la pantalla
	if (y<=72.9){ 
		document.getElementById("nave").style.top = y+"%"; 
		velocidad.innerHTML=siempreV.toFixed(2);
		altura.innerHTML=siempreA.toFixed(2);
	} else { 
		stop();

	}

	//Game over
	 if (siempreA>=72.9) {

	 	if (siempreV<=VCaida) {
		document.getElementById("winner").style.display="inline-block";
		}else{
		document.getElementById("loser").style.display="inline-block";
		}

		document.getElementById('BotonOn').onclick = function () {BotonOff();};

	 }

}
function motorOn(){

	document.getElementById("imgNave").src="img/Nave2.gif";
	document.getElementById("imgCohete").src="img/Covete2.GIF";

	//Cambiar estado del boton
	if (!singasofa){
			//el motor da aceleración a la nave
	a=-g;
	//mientras el motor esté activado gasta combustible
	if (timerFuel==null)
	timerFuel=setInterval(function(){ actualizarFuel(); }, 10);
	
	}else{
		motorOff();
	}
}


function motorOff(){
	document.getElementById("imgNave").src="img/Nave.png"
	document.getElementById("imgCohete").src="img/Covete.png"
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
}


function actualizarFuel(){
	//Restamos combustible hasta que se agota
	c-=0.1;
		if (c == 0 ){
		c = 0;
		//combustible.innerHTML=c;	
		singasofa = true;
		motorOff(); /**Que se apage el motor cuando el fuel sea 0**/
		}

		if (c < 0 ) {
			document.getElementById('BotonOn').onclick = function () {BotonOff();};
			document.getElementById('BotonOff').onclick = function(){ BotonOff();};
			motorOff();
		}
		combustible.style.height = c +"%";


}

// FUNCIONES PARA LOS BOTONES

function sonido(){
	document.getElementById('BotonSonido').style.display="none";
	document.getElementById('BotonSonidoNo').style.display="inline-block";
	document.getElementById('demo').play();
}
function nosonido(){
	document.getElementById('BotonSonido').style.display="inline-block";
	document.getElementById('BotonSonidoNo').style.display="none";
	document.getElementById('demo').pause();
}
function play(){
	start();
	document.getElementById('BotonPause').style.display="inline-block";
	document.getElementById('BotonPlay').style.display="none";
	cerrartodo();
	document.getElementById('BotonOn').onclick = function () {BotonOn();};
	document.getElementById('BotonOff').onclick = function(){ BotonOff();};
}
function pause(){
	stop();
	document.getElementById("BotonPlay").style.display="inline-block";
	document.getElementById("BotonPause").style.display="none";
	//para que no gaste fuel
	document.getElementById('BotonOn').onclick = function(){ BotonOff();};
}


function Restart(){

	clearInterval(timer);
		// VOLVER VARIABLE A ESTADO DE INCIO
	y = 0;
	v = 0;
	g = 1.622;
	c = 100;
	a = g;
	dt = 0.016683;
	VCaida = 5;
	combustible.style.height = c +"%";
	document.getElementById("BotonPause").style.display="none";
	document.getElementById('BotonPlay').style.display="inline-block";
	play();
	BotonOff();
	cerrartodo();
	moverNave();
}

function help(){
	pause();
	document.getElementById("Ayuda").style.display="inline-block";
	Closesettings();
	BotonOff();
	document.getElementById("loser").style.display="none";	
	document.getElementById("winner").style.display="none";

	document.getElementById('BotonOn').onclick = function(){ BotonOff();};
}
function closeHelp(){
	document.getElementById("Ayuda").style.display="none";
}

function settings(){
	pause();
	document.getElementById("ajustes").style.display="inline-block";
	closeHelp();
	BotonOff();
	document.getElementById("loser").style.display="none";	
	document.getElementById("winner").style.display="none";
	document.getElementById('BotonOn').onclick = function(){ BotonOff();};

}
function Closesettings(){
	document.getElementById("ajustes").style.display="none";
}

