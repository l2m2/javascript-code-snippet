/**
 * 最大公约数
 */
function gcd(a, b) {
  let min = Math.min(a, b);
  let max = Math.max(a, b);
  while (min !== 0) {
    let c = max % min;
    max = min;
    min = c;
  }
  return max;
}

console.log(gcd(2, 4));
console.log(gcd(1, 2));
console.log(gcd(3, 5));
console.log(gcd(8, 12));