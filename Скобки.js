/*Напишите функцию, которая принимает строку фигурных скобок и определяет, допустим ли порядок фигурных скобок. Он должен возвращать истину, если строка действительна, и ложь, если она недействительна.

Это Ката похоже на Ката с правильными круглыми скобками, но содержит новые символы: квадратные скобки [] и фигурные скобки {}. Спасибо @arnedag за идею!

Все входные строки будут непустыми и будут состоять только из скобок, скобок и фигурных скобок: () [] {}.

Что считается действительным?
Строка фигурных скобок считается действительной, если все фигурные скобки совпадают с правильной фигурной скобкой.*/ 


function validBraces(braces){
    let tracer = []
    for(let i=0;i < braces.length; i++){
      if ( braces[i] === "(" || braces[i] === "{" || braces[i] === "["){
        tracer.push(braces[i])
      } else{
        if(tracer.length === 0) return false
        let lastValue = tracer[tracer.length-1]
        if( (braces[i] === ']' && lastValue === '[') || (braces[i] === '}' && lastValue === '{') || (braces[i] === ')' && lastValue === '('))
        {
          tracer.pop()
        } else {
          break;
        }
      }
    }
    return tracer.length === 0
  }

//   const regex = /\(\)|\[\]|\{\}/;
// const validBraces = braces => regex.test(braces)
//   ? validBraces(braces.replace(regex, ''))
//   : '' === braces


// function validBraces(braces){
//   while(/\(\)|\[\]|\{\}/g.test(braces)){braces = braces.replace(/\(\)|\[\]|\{\}/g,"")}
//   return !braces.length;
//  }


