function counter() {  
  let count = 0;
  return function() {
    count++;
    return count;
  }
}

const count = counter();
const anotherCount = counter();

console.log(count());
console.log(count());
console.log(count());

console.log(anotherCount());
console.log(anotherCount());
console.log(anotherCount());
console.log(anotherCount());