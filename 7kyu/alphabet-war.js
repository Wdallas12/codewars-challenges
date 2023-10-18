function alphabetWar(fight){
    const leftPow = {
      w:4,
      p:3,
      b:2,
      s:1
    };
    const rightPow = {
      m:4,
      q:3,
      d:2,
      z:1
    };
    let leftScore = 0;
    let rightScore = 0;
    let arr = fight.split('');
  
    for (let i=0; i < arr.length; i++){
      if (leftPow[arr[i]]) {
        leftScore += leftPow[arr[i]];
      }else if (rightPow[arr[i]]) {
        rightScore += rightPow[arr[i]];
      }
    }
    
    if (leftScore > rightScore) {
      return `Left side wins!`
    }else if (rightScore > leftScore) {
      return `Right side wins!`
    }else {
      return `Let's fight again!`
    }
  }