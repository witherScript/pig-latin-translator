function pigLatinTranslate(str){
  const vowels = ['a','e','i','o','u'];
  let strArr = str.split(' ');
  let result = '';
  vowels.forEach(function(vowel){
    
    strArr.forEach(function(word, index){
      if(word.startsWith(vowel)){
        strArr[index]+='way';
      }
    });

  });
    
}