

1. For words beginning with a vowel, add "way" to the end. For Pig Latin, vowels are "a," "e," "i," "o," and "u."

Describe: pigLatinTranslate()
Test: It should return `${vowel}way` when passed a single-letter word beginning with any of vowels = ['a','e','i','o','u'].
Code:
```javascript
const vowelWord = 'a';
pigLatinTranslate(vowelWord);
```
Expected Output: "away"



Examples: "away" becomes "awayway" and "okay" becomes "okayway."

2. Words beginning with one or more consonants, move all of the first consecutive consonants to the end and add "ay". 
 
 Examples: "code" becomes "odecay" and "move" becomes "ovemay."

3. If the first consonants include "qu", move the "q" and the "u." Don't forget about words like "squeal" where "qu" doesn't come first! 
 
 Examples: "quick" becomes "ickquay" while "squeal" becomes "quealsay."



