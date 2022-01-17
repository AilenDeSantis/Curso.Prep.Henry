Homework: Introducción a JavaScript 

1. Explicaciones de conceptos para un niño de 12 años:

* Variables:
Una variable es una forma de guardar en una palabra un dato específico. Para crearlas, se debe escribir la palabra clave "var", un espacio y el nombre de la variable. Y para asignarle el valor se usa el signo = seguido del dato que queremos guardar en ella. Por ejemplo:
var MiNombre = 'Ailen'
De esta forma, con "var" declaro la variable, "MiNombre" es el nombre que elegí para la variable, con = le asigno un dato dentro de esta variable y 'Ailen' es dicho dato. 

* Strings:
"String" en español significa "cadena" y en este ámbito hace alusión a una cadena de caracteres. Es decir, los strings son texto, son un conjunto de caracteres. En JavaScript defino un string colocándolo entre comillas simples ('') o dobles (""). Por ejemplo:
var string = 'Esto es un string'

* Funciones (argumentos, `return`):
Una función es una forma de JavaScript para agrupar una parte de código que realiza una tarea. Se crean para recurrir a ellas cuando sea necesario y no tener que estar repitiendo el mismo código varias veces. En lugar de ello, "invocamos" la función para que cumpla la tarea para la que fue creada. Se llama "invocar" la función a cuando la llamamos, es decir, cuando escribimos su nombre en el código para usarla. 
Los ARGUMENTOS de una función son datos que nosotros le pasamos a la misma y van entre paréntesis. Dentro de los argumentos, podemos agregar una variable para usarla en la función. Los argumentos se agregan colocando una coma entre ellos. 
El "RETURN" es la forma de pedirle a la función que muestre un dato que está dentro de ella. 
La estructura de una función es la siguiente:
function nombreFuncion () {}
Así, con "function" le estamos avisando a JavaScript que estamos creando una función, "nombreFuncion" es el nombre que elegimos para llamarla, dentro de los paréntesis () van los argumentos y dentro de las llaves {} va el código de la función. Por ejemplo:
function presentacion (nombre, edad) {
	console.log('Mi nombre es' + nombre);
	console.log('tengo'+edad+ 'años');
}
De forma que cuando yo invoco la función debo escribir:
presentacion (Ailen De Santis, 24)
y se leerá el mensaje "Mi nombre es Ailen De Santis
			tengo 24 años"

* Declaraciones `if`
La declaración if sirve para evaluar si se cumplen o no ciertas condiciones y decirle al código qué hacer en función de ello. Si las condiciones se cumplen, ejecuta un código que hará determinada tarea, y si no se cumplen, se ejecuta otro código. Por ejemplo
numero 1 = 7
numero 2 = 5
if (numero 1>numero 2) { 
	console.log('El numero 1 es mayor');
} else { 
	console.log('El numero 2 es mayor'),
}

* Valores booleanos (`true`, `false`)
Los valores booleanos hacen referencia a dos opciones posibles, en JavaScript estas opciones posibles son verdadero (true) o falso (false). Por ejemplo:
var soyunaPersona = true