/**
 * 将字符串转换成二进制的字符串, 以空格隔开
 */
function stringToBinary(str) {
  let zeroPad = (num) => "00000000".slice(String(num).length) + num;
  return str.match(/[\s\S]/g).map(v => zeroPad(str.charCodeAt().toString(2))).join(" ");
};

console.log(stringToBinary("Hello World!"));
// => 01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001

/**
 * 将二进制的字符串转换成字符串
 */
function binaryToString(str) {
  return str.split(" ").map(v => String.fromCharCode(parseInt(v, 2))).join("");
}

console.log(binaryToString("01001000 01100101 01101100 01101100 01101111 00100000 01010111 01101111 01110010 01101100 01100100 00100001"));
// => Hello World!


// Reference
// https://ourcodeworld.com/articles/read/380/how-to-convert-a-binary-string-into-a-readable-string-and-vice-versa-with-javascript