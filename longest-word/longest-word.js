function LongestWord(sen) {
  const words = sen.split(' ');

  let longest_word = '';
  for (let i = 0; i < words.length; i++) {
    const cur_word = words[i].replace(/[^a-z]+/gi, '');
    // console.log(cur_word);

    if (cur_word.length > longest_word.length) {
      longest_word = cur_word;
    }
  }
  // code goes here
  return longest_word;
}

// keep this function call here
console.log(LongestWord('I love dogs'));
console.log(LongestWord('funny&!! time'));
