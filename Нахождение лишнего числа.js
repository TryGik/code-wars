



     
   


function findUniq(arr) {
   let err = []
   let arr1 =arr.sort()
   
for(var i = 0;i<arr1.length;i++){
  
   
   if(arr1[i+1]!==arr1[i] && arr1[i-1]!==arr1[i] )
   {
      err.push(arr1[i])
      break      
   } 
} 
return Number(err)
} 
console.log(findUniq([ 3, 10, 3, 3, 3]))


