/*Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.*/ 
  function encrypt(text, n) {
    let result = text  
      if (text === '' || n < 0 || typeof text !== 'string') {
        return text
      } else
      
     for (let i = 1; i <= n; i++) {
       result = code(result)
     }
     return result;
    }
    
    
    function code(text) {
        let result = text;
        let resEven = '';
        let resOdd = '';
        let result1 = '';
        for (let i = 0; i < result.length; i++) {
          if (i % 2 === 0) {
            resEven += result[i];
          } else resOdd += result[i];
        }
        return result1 = resOdd + resEven
    }
    
    
    function decrypt(encryptedText, n) {
      if (!encryptedText || !encryptedText.length || n <= 0)
      {
        return encryptedText;
      }
    
      let first = encryptedText.slice(0, encryptedText.length / 2);
      let second = encryptedText.slice(encryptedText.length / 2);
      
      let res = "";
      let i = 0;
      let j = 0;
    
      while (res.length < encryptedText.length)
      {
        if (res.length % 2 == 0)
        {
          res += second[i];
          i++;
        }
        else
        {
          res += first[j];
          j++;
        }
      }
    
      return decrypt(res, --n);
    }


    //22222222222222222222222222
    function encrypt(text, n) {
      for (let i = 0; i < n; i++) {
        text = text && text.replace(/.(.|$)/g, '$1') + text.replace(/(.)./g, '$1') 
      }
      return text
    }
    
    function decrypt(text, n) {
      let l = text && text.length / 2 | 0
      for (let i = 0; i < n; i++) {
        text = text.slice(l).replace(/./g, (_, i) => _ + (i < l ? text[i] : ''))
      }
      return text
    }

    //333333333333333333333333

    function encrypt(text, n=0) {
      return n<1 || text==null ? text : encrypt( [...text].reduce(([a,b],v,i)=> i%2 ? [a+v,b]:[a,b+v],['','']).join(''), n-1)
    }
    
    function decrypt(text, n) {
      return n<1 || text==null ? text : decrypt( [...text].slice(text.length/2).map((v,i) => v+text[i] ).join('').slice(0,text.length), n-1)
    }


    //4444444444444444444444444

    const isValidInput = (text, key) => !(!text || key <= 0);

const encrypt = (text, key) => {
  
  if (!isValidInput(text, key) || key === 0) return text;
  
  let secondChars = "";
  let otherChars = "";
  
  for (let index = 0; index < text.length; index++) {
    if (index & 1) secondChars += text.charAt(index);
    else otherChars += text.charAt(index);
  }

  return encrypt(`${secondChars}${otherChars}`, --key);
}

const decrypt = (encryptdTxt, key) => {
  
  if (!isValidInput(encryptdTxt, key) || key === 0) return encryptdTxt;
  
  let textLength = encryptdTxt.length;
  let textHalfLength = parseInt(textLength/2);
  let charSlots = new Array(textLength);
  
  const genEven = (function* () { let curr = 0; yield curr; while (true) yield curr += 2; })();
  const genOdd = (function* () { let curr = 1; yield curr; while (true) yield curr += 2; })();
  
  for (let index = 0; index < textHalfLength; index++) {
    charSlots[genOdd.next().value] = encryptdTxt.charAt(index);
  }
  
  for (let index = textHalfLength; index < textLength; index++) {
    charSlots[genEven.next().value] = encryptdTxt.charAt(index);
  }
  
  return decrypt(charSlots.join(''), --key);
}
















