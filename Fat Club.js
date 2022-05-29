/*My friend John and I are members of the "Fat to Fit Club (FFC)". John is worried because each month a list with the weights of members is published and each month he is the last on the list which means he is the heaviest.

I am the one who establishes the list so I told him: "Don't worry any more, I will modify the order of the list". It was decided to attribute a "weight" to numbers. The weight of a number will be from now on the sum of its digits.

For example 99 will have "weight" 18, 100 will have "weight" 1 so in the list 100 will come before 99.

Given a string with the weights of FFC members in normal order can you give this string ordered by "weights" of these numbers?

Example:
"56 65 74 100 99 68 86 180 90" ordered by numbers weights becomes: 

"100 180 90 56 65 74 68 86 99"
When two numbers have the same "weight", let us class them as if they were strings (alphabetical ordering) and not numbers:

180 is before 90 since, having the same "weight" (9), it comes before as a string.

All numbers in the list are positive numbers and the list can be empty.

Notes
it may happen that the input string have leading, trailing whitespaces and more than a unique whitespace between two consecutive numbers
For C: The result is freed.*/



// Неудача
function orderWeight(strng) {
  let str = strng.trim().split(' ') 
  let arr =[]
for (i = 0; i<str.length;i++) {
  if (str[i] !== '') {
    arr.push(str[i])
  }
}
 let weightArr = [];
for (let i = 0; i < arr.length; i++) {
 let a = arr[i].split('') 
 let weight = a.reduce((acc, item) => +acc + +item)
 weightArr.push(weight)
} 
  let b = []
for(let i = 0; i<arr.length; i++){
  b.push(new Array(weightArr[i], arr[i])) 
}
  
let k = b.sort()

let c = k.sort(function(a,b) {
  return (a[0]-b[0]) 
})
  
  let d = []
for(let i =0; i<c.length;i++) {
  d.push(c[i][1])
}
  return d.join(' ')
}

//11
function orderWeight(strng) {
  const sum = (str)=>str.split('').reduce((sum,el)=>(sum+(+el)),0);
   function comp(a,b){
     let sumA = sum(a);
     let sumB = sum(b);
     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
    };
  return strng.split(' ').sort(comp).join(' ');
 }

 //22
 function orderWeight(strng) {
  return strng
    .split(" ")
    .map(function(v) {  
      return {
        val: v,
        key: v.split("").reduce(function(prev, curr) {
          return parseInt(prev) + parseInt(curr);
        }, 0)
      };
    })
    .sort(function(a, b) {
      return a.key == b.key 
        ? a.val.localeCompare(b.val)
        : (a.key - b.key);
    })
    .map(function(v) {
      return v.val;
    })
    .join(" ");
}

//33

function digitSum(str) {
  return str.split('').reduce(function(s, e) { 
    return s + parseInt(e); 
  }, 0);
}

function orderWeight(str) {
    return str.split(' ').sort(function(a, b) {
      return digitSum(a) - digitSum(b) || a.localeCompare(b);
    }).join(' ');
}

//44

function orderWeight(str) {
  const sum = x => x.split('').reduce((res, cur) => (res + +cur), 0);
  return str.split(' ').sort((a, b) => {
    const diff = sum(a) - sum(b);
    return diff == 0 ? (a > b ? 1 : -1) : diff;
  }).join(' ');
}

//55

function orderWeight(s) {
  return s.split(' ').sort((a,b)=>a.split('').reduce((pv,cv)=>pv+ +cv,0)-b.split('').reduce((pv,cv)=>pv+ +cv,0)||(a>b?1:-1)).join(' ');
}

//66

let orderWeight = s => s.split` `.sort((r, s) => r.split``.reduce((s, n) => s + +n, 0) - s.split``.reduce((s, n) => s + +n, 0) || r.localeCompare(s)).join` `;

//77

function orderWeight(str) {
  return str.split(" ").sort((a,b) => {
    let sumA = a.split("").reduce((acc,cur) => acc+Number(cur), 0)
    let sumB = b.split("").reduce((acc,cur) => acc+Number(cur), 0)
    if (sumA < sumB) return -1
    if (sumA > sumB) return 1
    if (a < b) return -1
    return 1
  })
  .join(" ")
}

//88
function weightStrNb(nb) {
  var n = 0, a = nb.split('');
  for(var i in a){ n += +a[i]; }
  return n;
}
function comp(a, b) {
  var r;
  var cp = weightStrNb(a) - weightStrNb(b);
  if (cp == 0) {
      if (a < b) r = -1; else r = 1;
  } else {
      r = cp;
  }
  return r;
}
function orderWeight(strng) {
  return strng.split(' ').sort(comp).join(" ")
}