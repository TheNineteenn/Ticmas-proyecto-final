/*Letras que aparecen y desaparecen*/
const typed = new Typed('.typed', {
	strings: ['<p>Estudiante</p>', '<p>Programador</p>', '<p>Diseñador web</p>'],
	stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 75, // Velocidad en mlisegundos para poner una letra,
	startDelay: 1, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 75, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 0, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	showCursor: false, // Mostrar cursor palpitanto
	cursorChar: '', // Caracter para el cursor
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	contentType: 'html', // 'html' o 'null' para texto sin formato
})
/*Nav-Bar*/
var nav = document.querySelector('nav');

/*Solución Problema background no rellena todo el espacio*/
if (screen.width < 1402) {
	nav.classList.add('bg-dark', 'shadow');
}

/*Cambio de navbar de transparente a negro*/
if (screen.width >= 1402) {
	window.addEventListener('scroll', function () {
		if (window.pageYOffset > 100) {
			nav.classList.add('bg-dark', 'shadow');
	  } else {
		  nav.classList.remove('bg-dark', 'shadow');
		}
	});
	window.addEventListener("resize", cambiarNavbarClass);
}

/* Certificado*/
function mostrar(){
    document.getElementById('Ticmas-div').style.display = 'block';
}

function ocultar(){
    document.getElementById('Ticmas-div').style.display = 'none';
}