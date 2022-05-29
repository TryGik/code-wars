/*На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].

Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.

Функция getMaxSubSum(arr) должна возвращать эту сумму.

Например:

getMaxSubSum([-1, 2, 3, -9]) = 5 (сумма выделенных)
getMaxSubSum([2, -1, 2, 3, -9]) = 6
getMaxSubSum([-1, 2, 3, -9, 11]) = 11
getMaxSubSum([-2, -1, 1, 2]) = 3
getMaxSubSum([100, -9, 2, -3, 5]) = 100
getMaxSubSum([1, 2, 3]) = 6 (берём все)*/


function getMaxSubSum(arr) {
  // let sumMax = 0;
  // for (let i = 0; i < arr.length; i++) {
  //   let startSum = 0;
  //   for (let j = i; j < arr.length-1; j++) {
  //     startSum += arr[j]
  //     sumMax = Math.max(sumMax, startSum)
  //   }
  // } 
  // return sumMax;
  let maxSum = 0;
  let partialSum = 0;
  for (let item of arr) {
    partialSum += item;
    maxSum = Math.max(maxSum, partialSum);
    if (item < 0) {
      partialSum = 0;
    }
  }
  return maxSum;
}

console.log(getMaxSubSum([-2, -1, 1, 2]))




