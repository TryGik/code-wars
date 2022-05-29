//Дезоксирибонуклеиновая кислота (ДНК) - это химическое вещество, обнаруженное в ядре клеток и несущее «инструкции» для развития и функционирования живых организмов.

//Если вы хотите узнать больше: http://en.wikipedia.org/wiki/DNA

//В цепочках ДНК символы «А» и «Т» дополняют друг друга, как «С» и «G». У вас есть функция с одной стороной ДНК (строка, кроме Haskell); вам нужно получить другую дополнительную сторону. Нить ДНК никогда не бывает пустой или ДНК вообще не бывает (опять же, за исключением Haskell).





// function DNAStrand(dna){
  
//     const dnaArr = ['A','T', 'C', 'G'];
//     const dna1Arr = ['T', 'A', 'G', 'C'];
//     const newDNA = [];
//     for (let i = 0; i < dna.length; i++) {
//       for (let j = 0; j < dnaArr.length; j++) {
//         if (dna[i] === dnaArr[j]) {
//           newDNA.push(dna1Arr[j])
//         }
//       }          
//     } return newDNA.join('')
//   }




// function DNAStrand(str){
//     let newStr = '';
//     for (i = 0; i < str.length; i++) {
//       if (str.charAt(i)==='A'){
//         newStr += 'T';
//       } else
//       if (str.charAt(i)==='T'){
//         newStr += 'A';
//       } else 
//       if (str.charAt(i)==='C'){
//         newStr += 'G';
//       } else
//       if (str.charAt(i)==='G'){
//         newStr += 'C';
//       }
// } return newStr
// }



function DNAStrand(dna) {
    return dna.replace(/./g, c => DNAStrand.pairs[c]);
}

DNAStrand.pairs = {
    A: 'T',
    T: 'A',
    C: 'G',
    G: 'C',
};

console.log(DNAStrand('ATTGC')); // TAACG



function DNAStrand(dna) {
    return dna.split('').map(function(v) {return {A:'T', T:'A', C:'G', G:'C'}[v];}).join('');
  }