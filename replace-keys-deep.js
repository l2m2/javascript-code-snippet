
/**
 * 递归重命名Object中的key
 */
var replaceKeysDeep = function(obj, keysMap){
  return _.transform(obj, function(result, value, key){
    var currentKey = keysMap[key] || key;
    result[currentKey] = _.isObject(value) ? replaceKeysDeep(value, keysMap) : value;
  });
};  