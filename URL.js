/*Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

domainName("http://github.com/carbonfive/raygun") == "github" 
domainName("http://www.zombie-bites.com") == "zombie-bites"
domainName("https://www.cnet.com") == "cnet"*/


//My imaizing function
function domainName(str){
    let str1 = str.lastIndexOf('.');
    let res = '';
    let res1 = '';
    if (str.includes('https://www.')) {
      res1=str.slice(12,str1)
      if (res1.includes('.')) { 
          res = res1.slice(0,res1.indexOf('.'))
        return res
      } else return res1
  } else
  if (str.includes('http://www.')) {
      res1=str.slice(11,str1)
      if (res1.includes('.')) { 
          res = res1.slice(0,res1.indexOf('.'))
        return res
      } else return res1
  }
  
  else
  if (str.includes('http://') ){
      res1=str.slice(7,str1)
      if (res1.includes('.')) { 
          res = res1.slice(0,res1.indexOf('.'))
        return res
      } else return res1
  } else if (str.includes('www.')) {
      res1=str.slice(4,str1)
      
      if (res1.includes('.')) {
          res = res1.slice(0,res1.indexOf('.'))
        return res
      } else return res1
  } else
  if (str.includes('https://') ){
    res1=str.slice(8,str1)
    if (res1.includes('.')) { 
        res = res1.slice(0,res1.indexOf('.'))
      return res
    } else return res1
  
 } else res = str.slice(0,str.indexOf('.'))
    return res
  }


console.log(domainName(str))


//RegExp

function domainName(url){
    return url.match(/(?:http(?:s)?:\/\/)?(?:w{3}\.)?([^\.]+)/i)[1];
  }



//replace

function domainName(url){
    url = url.replace("https://", '');
    url = url.replace("http://", '');
    url = url.replace("www.", '');
    return url.split('.')[0];
  };



//???
function domainName(url){  
    return url.replace(/.+\/\/|www.|\..+/g, '')
  }

 
    






