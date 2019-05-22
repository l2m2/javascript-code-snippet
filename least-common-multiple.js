/**
 * 最小公倍数
 * 解法：最小公倍数 = a * b / 最大公约数
 */
function lcm(a, b) {
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

console.log(lcm(4, 5));
console.log(lcm(4, 6));
console.log(lcm(1, 2));


/**
 * Find the smallest common multiple of the provided parameters that can be evenly divided by both, 
 * as well as by all sequential numbers in the range between these parameters.
 * The range will be an array of two numbers that will not necessarily be in numerical order.
 * For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly 
 * divisible by all numbers between 1 and 3. The answer here would be 6.
 */
function smallestCommons(arr) {
  let lcm = (a, b) => {
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
  };
  return Array.from({length: Math.max(...arr) - Math.min(...arr) + 1 }, (_, v) => v + Math.min(...arr))
              .reduce((p, v) => lcm(p, v));
}

console.log(smallestCommons([1, 5]));