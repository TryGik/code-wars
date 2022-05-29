//111 TOO LONG

function scramble(str3, str4) {
  let str1 = str3.split('');
  let str2 = str4.split('');
  let res = [];
  if (str4.length > str3.length) {
    return false
  } else
 for (let i = 0; i < str2.length; i++) {
   for(let j =0; j< str1.length; j++){
     if(str2[i]===str1[j]) {
       res.push(str2[i]);
       delete str2[i]
       delete str1[j];       
     }
   }
 }
   if (res.join('') === str4) {
     return true
   } else return false
 
 }

 //222 LONG
 function scramble(left, right) {
  const a = [...left].sort();
  var i = 0;
  return [...right]
      .sort()
      .every(c => i = a.indexOf(c, i) + 1);
}


//333 GOOD

function scramble(str1, str2) {
  var count = Object.create(null);

  Array.prototype.forEach.call(str1, function(a) {
      count[a] = (count[a] || 0) + 1;
  });

  return Array.prototype.every.call(str2, function(a) {
      return count[a]--;
  });
}


//444

function scramble(strToBeChecked, strToCheckFor) {
  let numLetters = {}

  for (const letter of strToCheckFor) {
    if (numLetters[letter]) numLetters[letter]++
    else numLetters[letter] = 1
  }

  for (const letter of strToBeChecked) {
    if (numLetters[letter] && numLetters[letter] !== 0) numLetters[letter]--
  }

  for (const key in numLetters) {
    if (numLetters[key] !== 0) return false
  }

  // Only reaches this far if all good
  return true
}

//555
 function scramble(str1, str2) {

  let arr1 = str1.split('').sort(),
  arr2 = str2.split('').sort(),
  prevIndex = 0

return arr2.every(v => (prevIndex = arr1.indexOf(v, prevIndex) + 1) > 0)
}

//666

