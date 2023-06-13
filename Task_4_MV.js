function isBracketsBalanced(str) {
    let n = str.length;
    
    while (n) {
      str = str.replace(/<>|\[]|\{}|\(\)/, '');   
      n--;
    }  
    return str.length === 0;       
  }

  console.log(isBracketsBalanced('[((())()(())]]'));
  console.log(isBracketsBalanced('[[((())()(()))]]'));
  console.log(isBracketsBalanced('[[(())()(())]]'));