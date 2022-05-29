/*
В этом ката вы должны создать все перестановки непустой входной строки и удалить дубликаты, если они есть. Это означает, что вы должны перетасовать все буквы из ввода во всех возможных порядках.

Примеры:

* С вводом «а»
* Ваша функция должна вернуть: ['a']
* С вводом «ab»
* Ваша функция должна возвращать ['ab', 'ba']
* С вводом 'aabb'
* Ваша функция должна возвращать ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa'] */
//My cheating solution
let str = 'ab';
let strArr = str.split('');
let newArr = [];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
  }
}
let set
for (let i = 0; i < Math.pow(strArr.length, strArr.length) + 10; i++) {
  shuffle(strArr)
  newArr.push(strArr.join(''));
  console.log(newArr)
  set = new Set(newArr);

}
console.log(Array.from(set));


//2
function permutations(str) {
    return (str.length <= 1) ? [str] :
            Array.from(new Set(
              str.split('')
                 .map((char, i) => permutations(str.substr(0, i) + str.substr(i + 1)).map(p => char + p))
                 .reduce((r, x) => r.concat(x), [])
            ));
}

//3
const unique = xs => [ ...new Set(xs) ]
const concat = (a, b) => [ ...a, ...b ] 
const drop = i => xs => [ ...xs.slice(0, i), ...xs.slice(i + 1) ]

const permute = (x, i, xs) => 
  combinations(drop(i)(xs)).map(y => x + y)

const combinations = s =>
  s.length === 1 ? [ s ] : [ ...s ].map(permute).reduce(concat)

const permutations = s => unique(combinations(s))

//4
function permutations(string) {

    let perms = string.split('').reduce((acc, element) => {
      let updatedPerms = new Set();
      acc.forEach((word) => {
        for(let i = 0; i <= word.length; i++) {
          updatedPerms.add(word.substring(0, i) + element + word.substring(i));
        }
      });
      return updatedPerms;
    }, new Set(['']));
    
    return [...perms];
}

//5
function permutations (string) {
    if (string.length === 1) { return [string]; }
  
    var split = string.split("")
      , perms = []
      , i, l;
  
    for(i = 0, l = split.length; i < l; i++) {
      var remainder = split.slice(0)
        , firstChar = remainder.splice(i, 1)[0]
        , remainderPerms = permutations(remainder.join(""));
  
      remainderPerms.forEach(function (perm) {
        perm = firstChar + perm;
        if (perms.indexOf(perm) === -1) { perms.push(perm) };
      });
    }
  
    return perms;
  }

  //6

  function permutations(string) {
    var s = string.split('').sort();
    var res = [s.join('')]
    while(true) {
    
      var j = s.length - 2;
      while (j != -1 && s[j] >= s[j + 1])
        j--;
      if(j == -1)
        break;
        
      var k = s.length - 1;
      while(s[j] >= s[k])
        k--;
      
      [s[j], s[k]] = [s[k], s[j]];
      var l = j + 1, r = s.length - 1;
      while (l<r) {
        [s[l], s[r]] = [s[r], s[l]];
        l++;
        r--;
      }
      res.push(s.join(''));
    }
    return res;
  }