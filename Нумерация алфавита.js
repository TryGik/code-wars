// let str = 'The narwhal bacons at midnight.'
// let alfabet = 'abcdefghijklmnopqrstuvwxyz'
// let alfabetArr = alfabet.split('')
// let arr = str.toLocaleLowerCase().split('')
// let result = []


// for(var i = 0; i<arr.length; i++){
//    for(var j = 0; j<alfabetArr.length; j++){
//       if(arr[i] === alfabetArr[j]){
//          result.push(j+1)
//       }else continue
//    }
// }
// console.log(result.join(' '))

// function alphabetPosition(text) {
// let alfabet = 'abcdefghijklmnopqrstuvwxyz'
// let alfabetArr = alfabet.split('')
// let arr = text.toLocaleLowerCase().split('')
// let result = []
// for(var i = 0; i<arr.length; i++){
//    for(var j = 0; j<alfabetArr.length; j++){
//       if(arr[i] === alfabetArr[j]){
//         result.push(j+1) 
//       }else continue
//    }
// }
//    return result.join(' ');
//  }

//  console.log(alphabetPosition('The narwhal bacons at midnight.'))

// function alphabetPosition(text) {
//    let alfabet = 'abcdefghijklmnopqrstuvwxyz'
//    let alfabetArr = alfabet.split('')
//    let arr = text.toLocaleLowerCase().split('')
//    let result = []
//    for(var i = 0; i<arr.length; i++){
//       for(var j = 0; j<alfabetArr.length; j++){
//          if(arr[i] === alfabetArr[j]){
//            result.push(j+1) 
//          }else continue
//       }
//    }
//       return result.join(' ');
//     }
   
//     console.log(alphabetPosition('The narwhal bacons at midnight.'))

console.log('a'.charCodeAt(0))

let str = 'The narwhal bacons at midnight.'
let arr = str.toLocaleLowerCase().split('').join('')
console.log(arr)
let result = ''
for(var i = 0; i<arr.length; i++){
  if(arr.charCodeAt(i)&&(Number(arr.charCodeAt(i))-96)>0){
     result+=Number(arr.charCodeAt(i))-96+', '
     
  }else continue
}
console.log(result)






