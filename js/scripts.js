function pigLatinTranslate(str){
  let strArr = str.split(' ');
  let result = '';

  const firstLetterVowelRegex = new RegExp('\\b[aeiou]', 'i');
  const consonantRegex = new RegExp('\\b[^aeiou]+', 'i');
  const quackyWords = new RegExp('\\bqu', "i");
  
  strArr.forEach(function(word, index){
    if(firstLetterVowelRegex.test(word)) {
      strArr[index] = word + 'way';
    }
    else if(consonantRegex.test(word)) {
      let consonantSeq = word.match(consonantRegex)[0]
      strArr[index] = word.replace(consonantRegex, '') + consonantSeq + 'ay';
    }
    if(quackyWords.test(word) && consonantRegex.test(word)){
      strArr[index] = word.replace(quackyWords, '') + 'quay';
    }
  });

  return strArr.join(' ');
  

}
