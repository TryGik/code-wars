// Description:
// In this example you have to validate if a user input string is alphanumeric. The given string is not nil/null/NULL/None, so you don't have to check that.

// The string has the following conditions to be alphanumeric:

// At least one character ("" is not valid)
// Allowed characters are uppercase / lowercase latin letters and digits from 0 to 9
// No whitespaces / underscore

 //my
function alphanumeric(string){
  const abc = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const str = string.toLowerCase();
  let resStr = ''
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < abc.length; j++) {
      if ( str[i] === abc[j]) 
      resStr += str[i];    
    }
  }
  if (resStr.length === str.length && str.length !== 0) {
    return true;
  } else return false;
}

//REgEXp

let alphanumeric = s => /^[a-z\d]+$/i.test(s);

//3333

const alphanumeric = (str) => {
  if (!str.length) return false;
  const ALLOWED_CHARS = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  for (let char of str) {
    if (!ALLOWED_CHARS.includes(char)) return false;
  }
  return true;
};
  
//4444

function alphanumeric(string){
  let regExp = /^[a-zA-Z0-9]+$/
  return regExp.test(string)

}



 
    






