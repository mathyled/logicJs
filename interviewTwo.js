/**
 * 1- Implemente un algoritmo capaz de combinar dos arrays ordenados, obteniendo un nuevo array ordenado.
 * 2- Analice el orden de su algoritmo
 * 3- Implemente un algoritmo el cual dado un array cualquiera, lo ordene
 * 4- Analice el orden de su algoritmo
 */


// 1- (UNO)


// arrays ordenados
let arrOne = [ 2,3,6,9,20]
let arrTwo = [4,6,15,21]

  function merge(arrOne,arrTwo){
	let combinedArr = []
   while(arrOne.length && arrTwo.length){
      let firstElement;
       if(arrOne[0]< arrTwo[0]){
          firstElement = arrOne.shift()
  }else{
      firstElement = arrTwo.shift()
  }
       combinedArr.push(firstElement)
   }
 // combina restante de los arrays
    combinedArr=combinedArr.concat(arrOne).concat(arrTwo)

  return combinedArr
  }
  // combinedArr =[2, 3,]
  console.log(merge(arrOne,arrTwo))

let myArr = [6,2,5,4,20,8,1]
// [6,2,5]           [4,20,8,1]
// [6]    [2,5]     [4,20]    [8,1]
// [6]    [2] [5]   [4]  [20]  [8]  [1]

  function mergeSort(arr){
    // cuando arr.lenth sea 1 -> returnar ese array
    if(arr.length === 1){
      return arr
    }
    let halfArr = Math.trunc(arr.length/2)
    let leftArr = arr.slice(0,halfArr)
    let rightArr = arr.slice(halfArr)
    let leftMerge = mergeSort(leftArr)
    let rightMerge = mergeSort(rightArr)

    return merge(leftMerge,rightMerge)
  };

  console.log(mergeSort(myArr))
