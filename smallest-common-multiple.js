/**
 * 最小公倍数
 * 解法：最小公倍数 = a * b / 最大公约数
 */
function scm(a, b) {
  let gcd = (a, b) => {
    let min = Math.min(a, b);
    let max = Math.max(a, b);
    while (min !== 0) {
      let c = max % min;
      max = min;
      min = c;
    }
    return max;
  };
  return a * b / gcd(a, b);
}

console.log(scm(4, 5));
console.log(scm(4, 6));
console.log(scm(1, 2));