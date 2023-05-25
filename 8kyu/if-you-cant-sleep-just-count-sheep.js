var countSheep = function (num){
    let murmur = '';
    if(num === 0){
      return "";
    }else{
      for(let i=1; i<=num; i++){
        murmur += i + ' sheep...'
      }
    }
    return murmur
  }