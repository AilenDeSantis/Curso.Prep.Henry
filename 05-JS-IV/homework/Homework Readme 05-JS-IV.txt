Homework Readme 05-JS-IV

1. Explicaciones de conceptos como si se los estuviera explicando a un niño de 12 años: 

*Objetos:
	Los objetos son contenedores de datos, como las matrices. Los objetos contienen mucha información sobre una sola cosa. Son una colección de propiedades (pares clave: valor), pueden contener muchos pares de clave-valor, los mismos deben estar separados por coma. Los objetos se construyen usando llaves ({}). Ejemplo de un objeto:
const usuario = {
	username: 'ailen.ds',
	password: 'aert134'
};

*Propiedades:
	Una propiedad es una asociación entre un nombre (clave) y un valor (key: value). Son también llamadas pares de clave:valor. La clave (key) es el identificador y el valor (value) es el valor que guardamos en esa clave. Los objetos pueden tener muchos pares de clave: valor. Las claves son únicas, aunque varias claves pueden tener el mismo valor. Los valores pueden ser cualquier tipo de dato de JavaScript: cadenas (texto), números, booleanos, matrices, funciones o incluso otro objeto. Así, en el ejemplo anterior, un par de clave valor sería username: 'ailen.ds', en donde "username" sería la clave y 'ailen.ds' el valor. 

*Métodos:
	Los métodos son las funciones que están guardadas en un objeto. Se puede establecer una clave para un nombre y el valor para una función. Para llamar al método se debe colocar el nombre del objeto, seguido de un punto, la clave (donde está guardada la función) y paréntesis. Ejemplo:
const descripUser = {
	usuario: function() {
	   console.log ('Este es mi usuario');
	}
}

descripUser.usuario() ----> Me devuelve: Este es mi usuario

*Bucle for...in:
	El bucle for... in loop es un segundo tipo de bucle for de JavaScript. En los objetos el bucle for común no funciona porque no tienen índices numéricos, por lo que debe usarse un bucle for... in loop. La sintaxis es diferente a la del bucle for: comienza igual con la palabra for, luego entre paréntesis se declara una variable, la palabra clave in y el nombre del objeto. Esto recorrerá cada clave del objeto y finalizará cuando se hayan iterado todas las claves. Tomando como ejemplo el objeto utilizado en el apartado "Objetos", el siguiente es un ejemplo de bucle for...in loop:
for (let clave in usuario) {
	console.log (clave);
	console.log (usuario [clave]);
} 

Me devuelve: 
username
'ailen.ds'
password
'aert134'

*Notación de puntos vs notación de corchetes:
	Podemos acceder a los pares de clave-valor llamando al nombre del objeto y la clave. Hay dos formas de hacerlo, usando puntos o corchetes.
-PUNTOS (DOT NOTATION):
Se debe colocar el nombre del objeto, un punto y el nombre de la clave. Ejemplo: 
usuario.username; ----> Me devuelve: ailen.ds
-CORCHETES (BRACKETS):
Se debe colocar el nombre del objeto, seguidos de corchetes que contengan el nombre de la clave entre comillas. Ejemplo: 
usuario['username'] ----> Me devuelve: ailen.ds