function CodelandUsernameValidation(str) {
  const valid_length = str.length >= 4 && str.length <= 25;
  const valid_reg = /^[A-Za-z][A-Za-z0-9\\_]*$/.test(str);

  const valid_end = !/[\\_]$/.test(str);

  return valid_length && valid_end && valid_reg;
}

// keep this function call here
console.log(CodelandUsernameValidation('Pass444_dd'));
console.log(CodelandUsernameValidation('Pass$44_dd'));
console.log(CodelandUsernameValidation('Pass444_dd_'));
console.log(CodelandUsernameValidation('3ass444_dd'));
