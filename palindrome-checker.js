/**
 * Return true if the given string is a palindrome. Otherwise, return false.
 * A palindrome is a word or sentence that's spelled the same way both forward and backward, 
 * ignoring punctuation, case, and spacing.
 */
function palindrome(str) {
  return str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('')
    .every((element, index, array) => element === array[array.length - index - 1]);
}

console.log(palindrome("eye"));
// => true
console.log(palindrome("_eye"));
// => true
console.log(palindrome("A man, a plan, a canal. Panama"));
// => true