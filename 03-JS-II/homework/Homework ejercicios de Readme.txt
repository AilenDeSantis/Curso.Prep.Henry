Homework: Javascript II

1. Explicaciones de conceptos como para un niño de 12 años: 

*Bucle FOR:
El FOR es una forma de escribir código que se ejecuta en bucles. Se usa para repetir un bloque de código varias veces sin necesidad de escribirlo cada vez. El bucle for evalúa una condición y se ejecuta mientras sea verdadera, si fuera falsa deja de funcionar. Primero hay que escribir la palabra clave for, luego paréntesis en los que hay tres cosas: declarar una variable, una condición y por último incrementar la variable. Luego van las llaves que contienen el código que se va a ejecutar cada vez que la condición sea cierta. Por ejemplo:
for (var i=0; i<10; i++) {
	console.log(i);
} 
En el ejemplo anterior se puede ver que creo un bucle for (for), declaro la variable i (var i=0), establezco la condición de que i sea menor que 10 (i<10), le incremento 1 a i y por último se ejecuta el código que imprime i. De forma que como i es 0, y por lo tanto es menor que 10, se le suma 1 y luego se imprime. Así sucederá mientras se cumpla la condición de que i sea menor que 10 (es decir hasta llegar a 9) y luego dejará de funcionar. 

*Operadores Lógicos (&&, ||, !):
Los operadores lógicos sirven para comparar dos expresiones, evaluarlas y devolver true o false según si ambas expresiones son verdaderas, si una de ellas lo es o si son las dos falsas. 

-Operador Y/AND (&&):
Evalúa las expresiones y devolverá true si AMBAS expresiones son verdaderas. Si una o las dos son falsas devolverá false. Por ejemplo:
if (20>10 && 10===10) { 
	console.log ('Como ambas son verdaderas se ejecuta el código');
}

-Operador O/OR (||):
Evalúa si una de las expresiones es verdadera. Devolverá true si al menos una (o ambas) de las expresiones es verdadera. Devolverá false si ambas son falsas. Por ejemplo:
if (10===9 || 10>9) { 
	console.log('Una de las expresiones es verdadera, el código se ejecuta');
}

-Operador NO/NOT (!):
Devolverá el valor booleano (true, false) opuesto de lo que se le pase. Por ejemplo:
!(1>2) // Devolverá true
En este ejemplo, 1 no es mayor que 2, por lo tanto, es false. Pero al tener delante el operador NOT, se convierte en true (el valor booleano opuesto). 