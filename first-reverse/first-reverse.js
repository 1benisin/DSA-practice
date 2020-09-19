function FirstReverse(str) {
  // code goes here
  let rev_str = '';

  for (let i = 0; i < str.length; i++) {
    rev_str = str[i] + rev_str;
  }

  return rev_str;
}

// keep this function call here
console.log(FirstReverse('I love you'));
