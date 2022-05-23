
/**
 * Mejores días para comprar y vender una acción
Dado un array de prices donde prices[i] es el precio una acción en el i-ésimo día. Tienes que comprar la acción en un día determinado y luego venderla en un día diferente, con el objetivo de maximizar las ganancias que puedas obtener.
Retorna la ganancia máxima que puedes obtener con esta transacción. Si no puedes lograr una rentabilidad positiva, retorna 0.
max_profit([7, 1, 5, 3, 6])
=> 5
# comprando en el segundo día (precio = $1) y vendiendo en el quinto día (precio = $6) ganamos $5.
# Ojo, comprar en el segundo día (precio = $1) y vender en el primer día (precio = $7) para obtener una ganancia de $6 no se puede porque debes comprar antes de vender.
Ejemplo:
max_profit([5, 4, 3, 2])
=> 0
# No se puede obtener ganancias con estos precios
 */
array = [7, 1, 5, 3, 6]
//       i
//          x
 function ganaciaMax(array){
 	let gananciaMax = 0;

	for(let i = 0 ; i < array.length; i++){
  	let max = array[i]; // 7
   	for(let x = i + 1 ; x < array.length; x++){
   		if(max < array[x]){
      	max = array[x] // 7
      }
  	}
    // 7 - 7
  	let ganancia = max - array[i]
    if(gananciaMax < ganancia ){
      gananciaMax = ganancia
    }
  };
  return gananciaMax
};