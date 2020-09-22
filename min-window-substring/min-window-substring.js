function MinWindowSubstring(strArr) {
  const str = strArr[0];
  const pattern = strArr[1];
  let hash_pat = {};
  let hash_str = {};
  let start = 0;
  let substring_length = str.length;
  let start_index = 0;

  // hash the pattern
  for (let i = 0; i < pattern.length; i++) {
    // if hash already has letter increment it
    let pat_char = pattern[i];
    if (hash_pat[pat_char]) {
      hash_pat[pat_char] = hash_pat[pat_char] + 1;
    } else {
      hash_pat[pat_char] = 1;
    }
  }

  // start traversing the string
  let count = 0; // count of matched characters
  for (let j = 0; j < str.length; j++) {
    let str_char = str[j];

    // count occurrence of characters of string
    if (hash_str[str_char]) {
      hash_str[str_char] = hash_str[str_char] + 1;
    } else {
      hash_str[str_char] = 1;
    }

    // If string's char matches with pattern's char
    // and we need another
    // then increment count
    if (hash_pat[str_char] && hash_pat[str_char] >= hash_str[str_char]) {
      count++;
    }

    // if all the characters are matched
    if (count == pattern.length) {
      // Try to minimize the window i.e., check if
      // any character is occurring more no. of times
      // than its occurrence in pattern, if yes
      // then remove it from starting and also remove
      // the useless characters.
      while (
        hash_pat[str[start]] < hash_str[str[start]] ||
        !hash_pat[str[start]]
      ) {
        if (
          hash_pat[str[start]] < hash_str[str[start]] ||
          !hash_pat[str[start]]
        ) {
          hash_str[str[start]] = hash_str[str[start]] - 1;
        }
        start++;
      }

      // update window size
      let len_window = j - start + 1;
      if (substring_length > len_window) {
        substring_length = len_window;
        start_index = start;
      }
    }
  }

  // code goes here
  return str.substring(start_index, substring_length);
}

// keep this function call here
console.log(MinWindowSubstring(['ahffaksfajeeubsne', 'jefaa']));
// Output: aksfaje
console.log(MinWindowSubstring(['aaffhkksemckelloe', 'fhea']));
// Output: affhkkse
