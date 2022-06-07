//Dada una matriz de enteros, calcule las proporciones de sus elementos que son positivos , negativos y cero .
// Imprime el valor decimal de cada fracción en una nueva línea con 6 lugares después del decimal.


let myArr = [1, 1, 0, -1, -1]
// cantidad              proporciones
// 1 -> 2                 2/5
// 0 -> 1                 1/5
// -1 -> 2                2/5  
 

//Imprime las proporciones de valores positivos, negativos y cero en la matriz. Cada valor debe imprimirse en una línea separada condígitos después del decimal. La función no debe devolver un valor.

function plusMinus(myArr) {
    // Escribi tu codigo aquí
  console.log(equalElement(myArr))
  }


  let arr = [1, 3,7, 2,3]
// Cuenta elementos iguales 
function equalElement(arr){
let cache = {}
  for(let i = 0; i < arr.length ; i++){
    if(cache.hasOwnProperty(arr[i])){
      cache[arr[i]] = cache[arr[i]] + 1
    }else{
      cache[arr[i]] = 1
    }
  }
  
    return cache;
}
// {}
console.log(equalElement(arr))


// Encuentra el indice con el valor más chico
function findSmallest(arr) {
  let smallest = arr[0]
  let smallestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
      if(arr[i] < smallest){
        smallest = arr[i]
        smallestIndex = i
      }
      
  }
  return smallestIndex
}

// Quitar acentos de un string

function quitarAcentos(string){
	const acentos = {
    'á':'a',
    'é':'e',
    'í':'i',
    'ó':'o',
    'ú':'u',
    'Á':'A',
    'É':'E',
    'Í':'I',
    'Ó':'O',
    'Ú':'U'
  };
	return string.split('').map( letra => acentos[letra] || letra).join('').toString();	
}

console.log(quitarAcentos("cádÉná"))


// String termina con
// Hacer una función que reciba 2 strings (siempre los va a recibir), y devuelva si el primero termina con el segundo. Ejemplos:

// func("abc", "bc"); // returns true
// func("abc", "d"); // returns false


function endsWith(string1,string2){



  return string1.endsWith(string2)
//   return string1.slice(-string2.length) === string2


}

console.log( endsWith("abc","bc"))


/**
 * 
 * Letras por números
Reemplazar las letras de un string por su index en el alfabeto (e.g. A = 1 , B = 2 , C = 3 ...)

Consideraciones Adicionales:

Ignorar espacios.
Hacer clean up del string antes de comenzar el swap (para eliminar acentos y caracteres especiales, se sugiere meter en este proceso de clean up el ignorado de espacios).
Ejemplo:

func("abc def"); // returns '1 2 3 4 5 6';
 */

const alfabeto = [
  "A",
  "B",
  "C",
  "D",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "LL",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z"
]
function lettersForNumbers(string){
  let string2= string.toUpperCase()
return  string2.split("").map(letter => alfabeto.indexOf(letter)+1).join("")
  
  }
  
  console.log( lettersForNumbers("abcbc"))