function FirstFactorial(num) {
  let factorial = num;
  num--;
  while (num > 0) {
    factorial = factorial * num;
    num--;
  }
  // code goes here
  return factorial;
}

// keep this function call here
console.log(FirstFactorial(4));
console.log(FirstFactorial(8));
