# Lunar lander con html, css y javascript

Juego terminado: https://rawgit.com/ach74/LunaLander-Ach74aaaaaa/master/index.html

**Autor:** Achraf El Ouakili

**Asignatura:** Lenguaje de marcas

## PROYECTO:

El objetivo final de este proyecto es desarrollar un juego en que una nave tiene que aterrizar en la luna, este mismo sera creado estéticamente con HTML y CSS. El desplazamiento de la nave y las funciones de los paneles de control estarán definidos en el JavaScript.
El proyecto que he decidido desarrollar ha sido el que diseñe al principio de este proyecto, pero añadiendo algunas modificaciones.

Este es el resultado final para la versión de ordenador:
![Imagen](img/screenshots/1.PNG)

Y este es el resultado final para la versión para móviles:
![Imagen](img/screenshots/2.PNG)

## Explicación:

### Botones de la versión para ordenador:

Como se puede observar en la versión para ordenadores tenemos una serie de opciones para interactuar con el juego:
![Imagen](img/screenshots/3.PNG)

* El primer botón situado más a la izquierda, es el de sonido. Una vez pulsado sonara una melodía que nos acompañara mientras jugamos. Por defecto el juego viene silenciado. Cuando pulsemos este boton tambien cambiara. Y pasaremos a tener otro que nos permitira silenciar el juego.

Los botones que irán intercambiando entre si son los siguientes:

![Imagen](img/Sonido.png)
![Imagen](img/nosonido.png)


* El siguiente es el de reinicio, con el podremos volver a empezar cuando queramos. Tiene este aspecto: 

![Imagen](img/Replay.png)

* A continuación viene el botón encargado de pausar el juego o ponerlo en marcha. Este botón ira alternando entre los dos estado según lo pulsemos. Por defecto viene en pausa.

![Imagen](img/Pause.png)
![Imagen](img/Play.png)

* El botón que veremos a continuación es el botón de "Ayuda" que nos abrirá una pestaña donde nos explicara el juego. 

Bóton de ayuda:
![Imagen](img/ayuda.png)

Panel que abrirá es el siguiente:
![Imagen](img/screenshots/4.png)

Como podemos observar hay un botón el de "About" si le damos nos llevara a otra pagina donde nos hablaran un poco más del juego.

* Por ultimo tenemos el botón de "Ajustes", el cual una vez desplegado nos mostrara las siguientes funciones:

![Imagen](img/screenshots/5.PNG)

Como se muestra podremos cambiar la dificultad y la nave solo con hacer click. Al cambiar la nave, lo que se hace es ocultar la imagen de la nave que sé está mostrando, para poner en visible la que está oculta. Y así sucesivamente. 

Las naves con las cuales podremos jugar son las siguientes:

![Imagen](img/Covete.png)
![Imagen](img/Nave.png)

Si lo que queremos es cambiar la dificultad del juego, solo con elegir una de las opciones que se nos muestra bastara. Dependiendo el nivel de dificultad que elijamos dispondremos de más fuel o menos fuel, para poder jugar. Ademas de que cada nivel influye en la velocidad máxima que debe tener la nave al caer sobre la base, para poder ganar o perder el juego.

* En el modo fácil la velocidad tendrá que ser inferior a 5 m/s y dispondremos de del 100% del fuel.
* En el modo normal la velocidad tendrá que ser inferior a 4 m/s y dispondremos de del 75% del fuel.
* En el modo difícil la velocidad tendrá que ser inferior a 3 m/s y dispondremos de del 50% del fuel.
* En el modo imposible la velocidad endrá que ser inferior a 1 m/s y dispondremos de del 20% del fuel.


### Botones de la versión para móvil:

Para la versión móvil tenemos menos botones en pantalla, un total de 2:

![Imagen](img/screenshots/6.PNG)

* El botón rojo, es el encargado de recoger todos los demás botones que teníamos en la versión para ordenador. Una vez le demos se nos mostraran la mismas opciones que tenemos para ordenador pero recogidas en un recuadro que se mantiene oculto cuando jugamos. Ademas de queuna ves le demos el juego de pausara.

El panel que se nos va a desplegás es el siguiente:


![Imagen](img/screenshots/7.PNG)

Como podemos observar tenemos las mismas opciones que teníamos en la versión de escritorio, con lo cual hacen las mismas funciones.

* El botón verde (Pause) hace lo mismo que en la versión de escritorio. Controlar si el juego para detenerlo o no.

### Indicadores:

En las dos versiones tenemos los mismos indicadores solo que en la versión para móviles, la anchura se hace un poco más pequeña. Los indicadores son los siguientes :

![Imagen](img/screenshots/8.PNG)

* El indicador de velocidad nos marcara a que velocidad estamos cayendo, o por su contrario ascendiendo.

* El indicador de altura nos marcara cuenta distancia estamos cayendo.

* El siguiente es el indicador de fuel, que mediante una barra vertical nos mostrara cuanta gasolina nos queda en el tanque de gasolina.

### Otros elementos:

* Cuando interactuemos con algún elemento que nos vaya a mostrar información o más opciones, como por ejemplo la opción de "Ayuda", tenemos un botón situado en la parte superior izquierda, que nos permite volver atrás, o más bien hacer que desaparezca el elemento que hemos abierto.

El botón es el siguiente:

![Imagen](img/x.png)

* Otro botón muy importante es el botón para propulsar la nave, en este caso tiene aspecto de palanca y por defecto viene bajada (en estado apagado), cuando la accionamos la imagen de la palanca cambia y pasa a tener otra imagen donde la palanca mira hacia arriba (en estado encendido), cuando la palanca está en estado encendido consume el fuel del tanque de combustible que nos marca el indicador.
Este botón se mantiene automáticamente apagado cuando no es usado o cuando el juego ha finalizado.

Aquí le muestro sus dos estados:
Botón sin ser pulsado:

![Imagen](img/BotonOFF.png)

Botón pulsado:

![Imagen](img/BotonON.png)

## Inicio del juego

Una vez iniciemos el juego la nave ira descendiendo dependiendo de la dificultad elegida. Y para controlar dicho descenso tenemos el botón de propulsión que cada ver que lo pulsemos la imagen de la nave cambiara a un "GIF", que nos dará la impresión de que esta desprendiendo fuego. Dichos "GIF" son los siguientes:

![Imagen](img/Covete2.GIF)
![Imagen](img/Nave2.gif)


## Conclusión del proyecto

El proyecto me ha parecido muy divertido de por si ademas de que muy dinámico, ya que cada cambio que hacia, al instante podía ver como influía directamente en el juego. Ademas de que el consejo de probar el código primero en el "Inspector de elementos" de Google Chome me ha facilitado mucho a la hora de probar cosas.

En el proyecto me han salido variar errores como que me he equivocado a la hora de poner el nombre de una imagen en el código y luego no se vea, que la base lunar no se mantenga donde yo quería, que el motor gastase fuel cuando el juego estaba en pausa y otros más parecido. Pero todo ellos los he podido solucionar gracias a la ayuda de mis compañeros de mesa que me han corregido parte del código y me han dado su opinión de como podría hacer o colocar la cosas.
