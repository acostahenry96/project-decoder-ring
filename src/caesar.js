function caesar(input, shift, encode = true) {
 // your solution code here
 if (!shift || shift > 25 || shift < -25 || shift == 0){
    return false;
  } 
   
  const snippet = input.toLowerCase();
  let encryption = '';
      if(!encode){
        shift = -shift
      }
  for (let i = 0; i < snippet.length; i++){
    let codepoint = snippet.charCodeAt(i) + shift
      if(snippet.charCodeAt(i) < 97 || snippet.charCodeAt(i) > 122){
        
      encryption += snippet.charAt(i)
      continue
    }
    if (codepoint < 97){
        encryption += String.fromCodePoint(codepoint + 26)
      continue
        }
    if (codepoint > 122){
      encryption += String.fromCodePoint(codepoint - 26)
      continue
    }
     encryption += String.fromCodePoint(codepoint)
  }
      return encryption 
    }

module.exports = caesar;


// #### caesar()
/*String myStr = "Hello";
char result = myStr.charAt(0);
System.out.println(result);
*/
// The `caesar()` function in the `src/caesar.js` file has three parameters:

// - _input_ is a string that refers to the inputted text to be encoded or decoded.
// - _shift_ is an integer refers to how much each letter is "shifted" by. A positive number means shifting to the right (i.e. "A" becomes "D")
//       whereas a negative number means shifting to the left (i.e. "M" becomes "K").
// - _encode_ is a boolean that refers to whether you should encode or decode the message. By default, it is set to `true`.

// When building the function, keep the following constraints and rules in mind:

// - Spaces in the message should be maintained before and after encoding or decoding, as should other non-alphabetic symbols.

// - Encoding is case-insensitive (e.g., both "a" or "A" would be encoded to the same result).

// - If a letter is shifted so that it goes "off" the alphabet (e.g. a shift of 3 on the letter "z"), it should wrap around to the front of the alphabet (e.g. "z" becomes "c").


// -DONE If the `shift` value is not present, equal to `0`, less than `-25`, or greater than `25`, the function should return `false`.

