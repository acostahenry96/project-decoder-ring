const poly = {
    '11' : 'a',
    '12' : 'f',
    '13' : 'l',
    '14' : 'q',
    '15' : 'v',
    '21' : 'b',
    '22' : 'g',
    '23' : 'm',
    '24' : 'r',
    '25' : 'w',
    '31' : 'c',
    '32' : 'h',
    '33' : 'n',
    '34' : 's',
    '35' : 'x',
    '41' : 'd',
    '42' : '(i/j)',
    '43' : 'o',
    '44' : 't',
    '45' : 'y',
    '51' : 'e',
    '52' : 'k',
    '53' : 'p',
    '54' : 'u',
    '55' : 'z',
    'a' : '11',
    'f' : '12',
    'l' : '13',
    'q' : '14',
    'v' : '15',
    'b' : '21',
    'g' : '22',
    'm' : '23',
    'r' : '24',
    'w' : '25',
    'c' : '31',
    'h' : '32',
    'n' : '33',
    's' : '34',
    'x' : '35',
    'd' : '41',
    'i' : '42',
    'j' : '42',
    'o' : '43',
    't' : '44',
    'y' : '45',
    'e' : '51',
    'k' : '52',
    'p' : '53',
    'u' : '54',
    'z' : '55',
    ' ' : ' '
  }
  

  function polybius(input, encode = true) {
    // your solution code here
    
     let encryption = ''
   for (let i in input){
   
     let letter = input[i]
     
    /*This will use ASCII Table[Dec] to check if string contains a letter*/
  
    if (input.charCodeAt(0) > 97 && input.charCodeAt(0) < 122){
       encryption += poly[letter]
    }
     
       /*The for in loop (i) closes with this bracket below*/  
     
 }
   
         /*This will use ASCII Table[Dec] to check if string contains a number*/
    
   if (input.charCodeAt(0) < 97 || input.charCodeAt(0) > 122){
     let jj = 1; let clone = input
     
     /*Clone is a copy of input, w/o any spaces*/
     
     clone = clone.split('').filter((e) => e.trim().length).join('')
    
     /*A check if input (numbers) is in pairs of two w/o spaces*/
     if (clone.length % 2 == 1){
     return false
     }
     
     
     for (let j = 0; j < input.length; j += 1){
       
       /*The if statement below will account for spaces w/o breaking code*/
       
       if (poly[input.charAt(j)] == poly[' '] || poly[input.charAt(jj)] == poly[' ']){
          encryption += poly[' ']
          jj += 1; 
          continue
       } 
       
           /*This will set up the decoded/encoded message*/
       
       encryption += poly[input.charAt(j) + input.charAt(jj)]; jj += 2;  j += 1;
       
           /*Bracket below closes the for loop (j)*/
       
     }
     
     console.log(encryption)
      
   }
    
    console.log(encryption)
    return encryption
  }

module.exports = polybius;
