Homework: Javascript III

1. Explicaciones del concepto de "Arrays" como si se lo estuviera explicando a un niño de 12 años:

*Arrays: 
Los arrays, también llamados matrices o arreglos, son listas de elementos. Pueden contener todos los tipos de datos, inclusive pueden tener dentro otro array y también funciones. 
Para construirlos, primero hay que declarar una variable, seguido del símbolo =, y a continuación todos los elementos deben estar dentro de corchetes separados por comas. Por ejemplo: 
var array = [1, 2, 'hola', true, null, undefined, [1,2,3]]
Cada elemento dentro de un array tiene un número "índice" que lo identifica para poder utilizarlo. Estos índices comienzan en el 0 y ascienden cronológicamente. Es decir, en el ejemplo anterior, el 1 está en la posición 0, el 2 en la posición 1, el 'hola' en la posición 2 y así sucesivamente. 
Para acceder a un elemento en particular, es necesario escribir el nombre del arreglo y entre corchetes el número de índice al que queremos acceder. En el caso del ejemplo anterior:
array[3] ----> Estoy llamando al elemento 3 del array 
true 	-----> Me devuelve true, ya que es el dato que se encuentra en esa posición. 