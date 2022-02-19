Homework Readme 07-JS-VI

1. Explicaciones de conceptos como para un niño de 12 años:

*Funciones Callback:
	Son aquellas funciones que se pasan como argumento a otra función. Pueden ser llamadas en cualquier momento y pasar argumentos dentro de la función. Como convención se usa "cb" como argumento. Por Ejemplo:
function decirHolaAlUsuario (usuario) {
	return 'Hola' + usuario;
}
function crearSaludo (usuario,cb) {
	return cb (usuario);
}
crearSaludo('Ailen',decirHolaAlUsuario); ----> devuelve 'Hola Ailen' 