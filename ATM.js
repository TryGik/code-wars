/*Банкоматы допускают использование 4- или 6-значных ПИН-кодов, а ПИН-коды не могут содержать ничего, кроме ровно 4 или ровно 6 цифр.

Если функции передается допустимая строка ПИН-кода, верните истину, иначе верните ложь. */
// function validatePIN (pin) {
//   const atmNum = [0,1,2,3,4,5,6,7,8,9]
//   let pinArr = pin.split('')
//   if(pinArr.length===4 || pinArr.length===6 ){
//     let result = 0
//     for(i=0; i<pinArr.length; i++){
//       for(j=0;j<atmNum.length;j++){
//         if(+pinArr[i] === +atmNum[j]){
//           result++
//         }
//       }
//   }
//     if(result===pinArr.length){
//         return true
       
//     } else return false
//     }  
//   else return false
// }

// console.log(validatePIN('0as1'))


//2 вариант
// function validatePIN(pin) {
//   var isNumber = /^\d+$/.test(pin) && (pin.length == 4 || pin.length == 6)
//   return isNumber
//   }
  
  



//3й варик

function validatePIN (pin) {
  return typeof pin === 'string' && // verify that the pin is a string
    Number.isInteger(+pin) && // make sure that the string is an integer when converted into a number
    [4, 6].includes(pin.length) // only accepts 4 and 6 character pins
}


console.log(validatePIN('0593'))

