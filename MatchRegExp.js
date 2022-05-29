//Завершите решение так, чтобы оно разбило строку на пары из двух символов. Если строка содержит нечетное количество символов, она должна заменить отсутствующий второй символ последней пары знаком подчеркивания ('_').



function solution(str) {
  if (str.length == 0) {
    return []
  };
  
  return (str.length % 2 ? str + '_' : str).match(/../g);
}

console.log(solution('abcder'))


// function isOdd(num) { return num & 1; };

// function solution(str){
//   let arr = str.match(/.{1,2}/g);
  
  
//    if (str.length == 0) {
//      return []
//    } else if(isOdd(str.length) == 1) {
//       let x = str + "_"
//       return arr = x.match(/.{1,2}/g);
//    } else {
//       return arr;
//    }
  
// }





