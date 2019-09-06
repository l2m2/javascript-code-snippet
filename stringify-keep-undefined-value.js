var obj = {
  a: 1,
  b: null,
  c: undefined
};
var result = JSON.stringify(obj, function(k, v){
  return typeof v === 'undefined' ? null : v;
});
console.log(result);
// ES6
var result = JSON.stringify(obj, (k, v) => (typeof v === 'undefined' ? null : v) );
console.log(result);