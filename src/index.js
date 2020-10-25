module.exports = function check(str, bracketsConfig) {
    let brackets = bracketsConfig;
    let stack = []
    let arr=[];
    for(let i=0; i<brackets.length; i++){   
      for(let j=0; j<brackets[i].length; j++){
        arr.push(brackets[i][j]);
      }
  } 
    for(let bracket of str) {
      let bracketsIndex = arr.indexOf(bracket)
  
      if (bracketsIndex === -1){
        continue
      }
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  
}
