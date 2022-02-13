Homework Readme 05-JS-IV

1. Explicaciones de conceptos como si se los explicara a un niño de 12 años: 

*Objetos:
	Los objetos son contenedores de datos, que tienen mucha información sobre una sola cosa. Son una colección de propiedades (Pares clave:valor). Estas propiedades deben ir separadas por coma. Los objetos se construyen mediante llaves ({}), por ejemplo: 
const objeto = {};

*Propiedades:
	Una propiedad es una asociación entre un nombre (o clave) y un valor. Son pares de clave:valor; la clave (key) es el identificador y el valor (value) es el valor que queremos guardar en esa clave. Por su nombre en inglés también se llama keyvalue. Los objetos pueden contener muchos pares de clave-valor y deben estar separados por coma. Las claves son únicas en un objeto, sólo puede haber una clave con ese nombre, pero pueden repetirse los valores. Los valores pueden ser cualquier tipo de dato, texto (string), números, booleanos, matrices, funciones o incluso otro objeto. Ejemplo:
const usuario = {
	username: 'ailen.ds',
	password: 'askd127'
};

*Métodos: 
	Los métodos son funciones guardadas en un objeto. En los objetos, los valores pueden establecerse como funciones. Así, podemos poner una clave para un nombre y el valor para una función. Para llamar al método, se debe colocar el nombre del objeto, seguido de un punto (notación de puntos), el nombre de clave y paréntesis finales. Ejemplo:
const usuario = {
	infoUsuario: function ()
		console.log ('Este es mi usuario');
	}
}

usuario.infoUsuario();		// Devuelve: Este es mi usuario

*Bucle for...in: 
Es un segundo tipo de bucle que tiene JavaScript. Su finalidad es iterar sobre cada par clave-valor de un objeto. Recorrerá cada clave y finalizará cuando se hayan iterado todas. Comienza igual que el bucle for, pero entre paréntesis se declara una variable, la palabra clave in y el nombre del objeto. Tomando como ejemplo el objeto empleado en el apartado "Propiedades", el siguiente es un ejemplo de bucle for...in loop:
for (let clave in usuario) {
	console.log (clave);
	console.log (usuario [clave]);
}

Me devuelve:
username
'ailen.ds'
password
'askd127'

*Notación de puntos vs notación de corchetes:
	Para acceder a los valores dentro de un objeto, podemos hacerlo llamando al nombre del objeto y la clave. Hay dos formas: usando puntos o corchetes. 
-Puntos (Dot notation):
Se debe colocar el nombre del objeto, un punto y el nombre de la clave. Ejemplo:
usuario.username;  	// Devuelve ailen.ds
-Corchetes (Bracket notation):
Se debe colocar el nombre del objeto, abrir corchetes, el nombre de la clave entre comillas ('') y cerrar corchetes. Ejemplo:
usuario['username'];	// Devuelve ailen.ds