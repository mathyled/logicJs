/**
 * 1- Dado un string cree una funcion reverse que invierta el orden de sus caracteres.
 * Ejemplo : "Hello world" = "dlrow olleH " . No puede usarse desestructuración ni recursion
 * 2- Dado un string, cree una funcion que invierta el orden de sus caracteres. Debe de utilizar una desestructuración en el proceso
 * 3- Dado un string, invierta el orden de sus caracteres recursivamente
 * 4- Contruya una funcion isPalindrome, la cual dado un string nos indique si es un palindromo o no
 * Ejemplo: "Yo dono rosas, oro no doy"
 * 5- Invertir las palabras de una frase, pero cada palabra debe mantenerse en su lugar 
 * Ejemplo: "Hello world" = "olleH dlrow"

 * 
 */
// 1 (UNO)
 function reverse(text){
    let reverseText = "";
   for(let i = 0; i < text.length; i++){
     reverseText = text[i] + reverseText
   }
      return reverseText
  };
  
  console.log(reverse("Hello world"))


  function reverseThree(text){
    let reverseText = "";
      for(word of text){
      reverseText = word + reverseText
    }
    return reverseText
  }
  
  console.log(reverseThree("Hello world"))


  // 2 (DOS)

  function reverseTwo(text){
    let reverseText = "";
    [...text].reverse().forEach(letter => {
      reverseText += letter
     
    })
    return reverseText
  }
  
  console.log(reverseTwo("Hello world"))

  // 3- (TRES)
  function reverseTwo(text){
    let reverseText = "";
    let desText = [...text]
    if(desText.length<1){
      return reverseText
    }
    
   reverseText = reverseText + desText.pop()
  return reverseText + reverseTwo(desText)
  }
let text = "Hello world"


console.log(reverseTwo(text))



function reverseFour(text){

   if(text===""){
     return ""
   }
    let subText = text.substring(1)
    
    return reverseFour(subText) + text.charAt(0) 
  }

console.log(reverseFour(text))

/**
 * 
 * 4- Contruya una funcion isPalindrome, la cual dado un string nos indique si es un palindromo o no
 * Ejemplo: "Yo dono rosas, oro no doy"
 * 
 */

 function isPalindrome(text){
  let newText = text.toLowerCase().split(" ").join(" ")
  let textReverse = newText
  
return  text.toLowerCase()=== textReverse
};


let textPalin = "Yo dono rosas, oro no doy"
console.log(isPalindrome(textPalin))

/**
 * * 5- Invertir las palabras de una frase, pero cada palabra debe mantenerse en su lugar 
 * Ejemplo: "Hello world" = "olleH dlrow"
 */


 function reverseFifth(text){
  let reverse = reverseThree(text)
  return reverse.split(" ").reverse().join(" ")
 };
 


console.log( reverseFifth( "Hello world"))