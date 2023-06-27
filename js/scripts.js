function pigLatinTranslate(str){
  const vowels = ['a','e','i','o','u'];
  let strArr = str.split(' ');

  const regex = new RegExp('/[aeiou]/', 'gi');
  
  
  
  if(str[0].match(regex)){
    strArr[index]+='way';
  }
  else {

    //regex will add consecutive consonants to the end and then add ay
    str.replace(regex, )
  }
  
  strArr.forEach(function(word, index){
    if(vowels.includes(word[0])){
      strArr[index] += 'way';
    }
    else {
      let stoppingPoint = 0;
      for(let i = 0; i < word.length; i++) {
        if(vowels.includes(word[i])) {
          stoppingPoint = i;
          // Special case for "qu"
          if(word[i-1] === 'q' && word[i] === 'u') {
            stoppingPoint++;
          }
          break;
        }
      }
      strArr[index] = word.slice(stoppingPoint) + word.slice(0, stoppingPoint) + 'ay';
    }
  });

  return strArr.join(' ');
}
