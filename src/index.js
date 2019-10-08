module.exports = function check(str, bracketsConfig) {
  // your solution

  while (str.length > 0) {
    
    let result = false;
    
    for (const arr in bracketsConfig) {
      let pos = str.indexOf(bracketsConfig[arr][0] + bracketsConfig[arr][1]);
      
      if (pos != -1) {
        str = str.slice(0, pos) + str.slice (pos+2);
        result = true;
      };
    }

    if (result == false) return false;
    
  }
  return true;
}