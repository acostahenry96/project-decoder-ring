function substitution(input, alphabet, encode = true) {
    const decodingCheatsheet = {' ' : ' '}; let encryption = '';
   
    
        /*Ensures function is used accordingly*/
    
    if (!alphabet || !input || alphabet.length < 26 || alphabet.length > 26){
      return false
    }

          /*This will check if any characters repeat*/
    let repeat = alphabet.split("");
   if (repeat.some((element, index) =>{
      for (let z = 0; z < alphabet.length; z++){
        let letter = alphabet.charAt(z);
        /*Skips checking the same letter*/
        if (index == z){
          continue
        }
        if (element.charCodeAt() == letter.charCodeAt()){
          return true
        }
      }
      
    } )){
  return false
   }
      
    
      /*This will create a GREAT reference point*/
    
    for (let i = 0; i < alphabet.length; i++){
  
  
             /*Creates an object with the proper alphabet as values*/
  
       decodingCheatsheet[alphabet.charAt(i)] = String.fromCodePoint(97 + i)
  
    };
  
    if (!encode){
 for (let j in input){
   let letter = input[j]
    encryption += decodingCheatsheet[letter];
  }
  return encryption
}
    if (encode){
      
       /*This will create a GREAT reference point (encoding)*/
    let encodeCheatsheet = {" " : " "}
    for (let i = 0; i < alphabet.length; i++){
       encodeCheatsheet[String.fromCodePoint(97 + i)] = alphabet.charAt(i)
    };
     for (let j in input){
    let letter = input[j]
    encryption += encodeCheatsheet[letter];
  }
  return encryption 
      
    }
  }

module.exports = substitution;
