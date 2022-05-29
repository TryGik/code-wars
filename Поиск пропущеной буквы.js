

function findMissingLetter(array)
{
for(var i = 1; i<array.length; i++){
   const prev = array[i-1].charCodeAt()
   const current = array[i].charCodeAt()
   if(current - prev !==1){
      return String.fromCharCode(prev +1)
   }
  } 
}
  
console.log(findMissingLetter(['g', 'h', 'i', 'k']))
     
   





