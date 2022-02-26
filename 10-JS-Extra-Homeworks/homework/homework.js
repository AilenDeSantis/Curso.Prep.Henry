// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  Array2 = [];
  for (let clave in objeto) {
    Array1 = [];
    Array1.push(clave);
    Array1.push(objeto[clave]);
    Array2.push(Array1); 
  }
  return Array2;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  var string;
  var arr1=[];
  var arr2=[];
  var repe=0;
  var acc;
  var obj={};
  
  for(var i=0;i<string.length;i++){
      acc=0;
      repe=0;
      for(var x=0;x<arr1.length;x++){
        if(string[i]===arr1[x]){
         repe=1;
        }
      }if (repe===0){
         arr1.push(string[i]);
          for (var t=0;t<string.length;t++) {
              if(string[t]===arr1[x]) {
              acc=acc+1;
              }
            }
            arr2.push(acc);
    }
}
for (var i=0;i<arr1.length;i++) {
    Object.assign(obj,{[arr1[i]]:arr2[i]});
}
  return obj;
}



function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  var arrayma="";
  var arraymi=""
  for (var i=0;i<s.length;i++) {
    if (s[i]===s[i].toUpperCase()) {
      arrayma=arrayma+s[i];
    }else{
      arraymi=arraymi+s[i];
    }
  }
  return arrayma+arraymi;
}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  var sinABC = '';
  for (i=0;i<cadena.length;i++) {
    if (cadena[i] === 'a' || cadena[i]=== 'b' || cadena[i] === 'c') {
      continue;
    }
    else{
      sinABC += cadena[i];
    }
  }
  return sinABC;
}
  
function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  var arrord= [];
  var aux1= "";
  var aux2= "";
  var indice=0;
 for (var i=0; i<arr.length;i++) {
   if(arr[i].length>aux2.length) {
     aux2=arr[i];
   }
 }
  aux1= aux2+" ";
  aux2= aux2+" ";
  for (var x=0; x<arr.length;x++) {
    for(var n=0;n<arr.length;n++) {
      if(arr[n].length<aux1.length){
        aux1= arr[n];
        indice=n;
      }
    }
    arr[indice]=aux2;
    arrord.push(aux1);
    aux1=aux2;
  }
 return arrord;
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  

}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};