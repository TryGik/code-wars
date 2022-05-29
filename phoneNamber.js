// Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9), который возвращает строку этих чисел в форме номера телефона.

// Пример
// createPhoneNumber ([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => возвращает «(123) 456-7890»
// Возвращенный формат должен быть правильным для выполнения этой задачи.
// Не забывайте пробел после закрывающих скобок!
// const createPhoneNumber = (numbers) => {
//   let result = ''
  
//     for(let i = 0; i < numbers.length; i++ ){
//       if(i===0){
//         result+=('('+ numbers[i])
//       } else if(i===2){
//         result+=(numbers[i] + ') ')
//       } else if(i===5){
//         result+=(numbers[i]+'-')
//       } else
//         result+=(numbers[i])
//     }
//    return result
   
// }

                        //2
// function createPhoneNumber(numbers){
//   numbers = numbers.join('');
//   return '(' + numbers.substring(0,3) + ')' 
//       + numbers.substring(3, 6)
//       + '-'
//       + numbers.substring(6);
// }
                     //3
function createPhoneNumber(numbers){
  var format = "(xxx) xxx-xxxx";
  for (var i=0; i<number.length; i++){
    format = format.replace('x', numbers[i]);
  }
  
  return format;
}

console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]))


