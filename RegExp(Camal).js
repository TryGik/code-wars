/*Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior"*/
function toCamelCase(str){
let dash = '-';
let underscore = '_';
let result = '';

for (let i= 0; i < str.length; i++) {
  if (str[i] === str[i].toUpperCase() && str[i] !== dash && str[i] !== underscore) {
   result += str[i]
   
 } else if (str[i] !== dash && str[i] !== underscore) {
     result += str[i]   
 
 } else  {
 result += str[i+1].toUpperCase();
 i++;
 
 }
}
return result
}

//2222222222222
function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}

//333333
function toCamelCase(str){
  return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
}

//444
function toCamelCase(str){
  return str.split(/\-|_/).reduce(function(previous, current, index){ return camelize(previous, current, index);});
}

function camelize(previous, current, index){
  return previous + current.capitalizeFirstLetter();
}

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}



